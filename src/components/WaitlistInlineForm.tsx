import { useEffect, useRef, useState } from "react";



type FormState = "init" | "submitting" | "success" | "error";

const loopsFormId = "cmgql2ir8e5fo180ietgz744n";
const loopsEndpoint = loopsFormId
  ? `https://app.loops.so/api/newsletter-form/${loopsFormId}`
  : "";

export default function WaitlistInlineForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [showNameField, setShowNameField] = useState(false);
  const [formState, setFormState] = useState<FormState>("init");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (formState === "success") {
      setEmail("");
      setName("");
      setCompany("");
      setShowNameField(false);
    }
  }, [formState]);

  if (!loopsEndpoint) {
    return (
      <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400">
        Waitlist submissions are not configured. Add `VITE_LOOPS_FORM_ID` to enable this form.
      </div>
    );
  }

  const isSubmitting = formState === "submitting";
  const formRef = useRef<HTMLFormElement | null>(null);

  const collapseNameFieldIfEmpty = (nextTarget: EventTarget | null) => {
    if (email.trim() !== "" || name.trim() !== "" || company.trim() !== "") {
      return;
    }

    if (nextTarget instanceof Node && formRef.current?.contains(nextTarget)) {
      return;
    }

    setShowNameField(false);
  };

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

    if (name.trim().length === 0) {
      setFormState("error");
      setErrorMessage("Please enter your name.");
      setShowNameField(true);
      return;
    }

    if (company.trim().length === 0) {
      setFormState("error");
      setErrorMessage("Please enter your company name.");
      setShowNameField(true);
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
      const trimmedName = name.trim();
      const trimmedCompany = company.trim();
      const body = new URLSearchParams({
        userGroup: "waitlist",
        mailingLists: "",
        email: email.trim(),
      });

      if (trimmedName) {
        body.append("firstName", trimmedName);
        body.append("name", trimmedName);
      }

      if (trimmedCompany) {
        body.append("company", trimmedCompany);
      }

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
    <div className="w-full">
      {formState === "success" ? (
        <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-center text-sm font-medium">
          Thanks! We&apos;ll be in touch!
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-2.5">
          <div className={`transition-all duration-300 overflow-hidden ${showNameField ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-col gap-2.5">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={(e) => collapseNameFieldIfEmpty(e.relatedTarget)}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border card-border text-white placeholder-tertiary focus:outline-none focus:card-border-hover focus:bg-white/[0.04] transition-all"
              />
              <input
                type="text"
                placeholder="Company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                onBlur={(e) => collapseNameFieldIfEmpty(e.relatedTarget)}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border card-border text-white placeholder-tertiary focus:outline-none focus:card-border-hover focus:bg-white/[0.04] transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5">
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setShowNameField(true)}
              onBlur={(e) => collapseNameFieldIfEmpty(e.relatedTarget)}
              required
              disabled={isSubmitting}
              className="flex-1 px-4 py-3 rounded-lg bg-white/[0.03] border card-border text-white placeholder-tertiary focus:outline-none focus:card-border-hover focus:bg-white/[0.04] transition-all"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all whitespace-nowrap text-[15px]"
            >
              {isSubmitting ? "Please wait..." : "Join waitlist"}
            </button>
          </div>

          {formState === "error" && errorMessage && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex justify-between items-center">
              <span>{errorMessage}</span>
              <button type="button" onClick={handleReset} className="text-white text-xs hover:opacity-80 transition-opacity ml-3 cursor-pointer">Try again</button>
            </div>
          )}
        </form>
      )}
    </div>
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
