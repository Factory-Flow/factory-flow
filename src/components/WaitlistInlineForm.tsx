import { useEffect, useState } from "react";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

type FormState = "init" | "submitting" | "success" | "error";

const loopsFormId = "cmgql2ir8e5fo180ietgz744n";
const loopsEndpoint = loopsFormId
  ? `https://app.loops.so/api/newsletter-form/${loopsFormId}`
  : "";

export default function WaitlistInlineForm() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("init");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (formState === "success") {
      setEmail("");
    }
  }, [formState]);

  if (!loopsEndpoint) {
    return (
      <Alert severity="warning">
        Waitlist submissions are not configured. Add `VITE_LOOPS_FORM_ID` to enable this form.
      </Alert>
    );
  }

  const isSubmitting = formState === "submitting";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formState !== "init") {
      return;
    }

    if (!isValidEmail(email)) {
      setFormState("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!passesRateLimit()) {
      setFormState("error");
      setErrorMessage("Too many signups, please try again in a little while.");
      return;
    }

    setFormState("submitting");
    setErrorMessage(null);

    try {
      const body = new URLSearchParams({
        userGroup: "waitlist",
        mailingLists: "",
        email: email.trim(),
      });

      const response = await fetch(loopsEndpoint, {
        method: "POST",
        body,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (!response.ok) {
        const details = await safeParseError(response);
        throw new Error(details ?? response.statusText);
      }

      setFormState("success");
    } catch (error) {
      resetRateLimit();
      setFormState("error");
      setErrorMessage(
        error instanceof Error
          ? error.message === "Failed to fetch"
            ? "Too many signups, please try again in a little while."
            : error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  const handleReset = () => {
    setFormState("init");
    setErrorMessage(null);
  };

  return (
    <Box>
      {formState === "success" ? (
        <Alert severity="success" sx={{ justifyContent: "center" }}>
          Thanks! We&apos;ll be in touch!
        </Alert>
      ) : (
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            sx={{
              alignItems: { xs: "stretch", sm: "center" },
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TextField
              type="email"
              label="Work email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              fullWidth
              size="small"
              disabled={isSubmitting}
              autoComplete="email"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: { xs: "100%", sm: "fit-content" } }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Please wait..." : "Join waitlist"}
            </Button>
          </Stack>
        </Box>
      )}
      {formState === "error" && errorMessage ? (
        <Alert
          severity="error"
          action={
            <Button color="inherit" size="small" onClick={handleReset}>
              Try again
            </Button>
          }
          sx={{ mt: 2, justifyContent: "space-between" }}
        >
          {errorMessage}
        </Alert>
      ) : null}
    </Box>
  );
}

async function safeParseError(response: Response) {
  try {
    const data = await response.json();
    if (data && typeof data === "object" && "message" in data && typeof data.message === "string") {
      return data.message;
    }

    return null;
  } catch (error) {
    if (error instanceof Error && error.name === "SyntaxError") {
      return null;
    }
    throw error;
  }
}

function passesRateLimit() {
  try {
    if (typeof window === "undefined" || !window.localStorage) {
      return true;
    }

    const now = Date.now();
    const previous = window.localStorage.getItem("loops-form-timestamp");

    if (previous && Number(previous) + 60_000 > now) {
      return false;
    }

    window.localStorage.setItem("loops-form-timestamp", String(now));
    return true;
  } catch {
    return true;
  }
}

function resetRateLimit() {
  try {
    if (typeof window === "undefined" || !window.localStorage) {
      return;
    }
    window.localStorage.removeItem("loops-form-timestamp");
  } catch {
    // ignore
  }
}

function isValidEmail(value: string) {
  return /.+@.+/.test(value);
}
