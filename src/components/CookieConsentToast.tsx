import { useEffect, useState, type SyntheticEvent } from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const STORAGE_KEY = 'factory-flow-cookie-consent';

function readConsent() {
  if (typeof window === 'undefined') {
    return true;
  }

  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'accepted';
  } catch {
    return true;
  }
}

function storeConsent() {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, 'accepted');
  } catch {
    // Ignore write failures (e.g., storage disabled).
  }
}

export default function CookieConsentToast() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!readConsent()) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    storeConsent();
    setOpen(false);
  };

  const handleClose = (_event?: Event | SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'stretch', sm: 'center' },
          gap: 2,
          maxWidth: 480,
        }}
      >
        <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle2">We use cookies</Typography>
          <Typography variant="body2" color="text.secondary">
            We use cookies to improve your experience. By clicking accept, you
            agree to our{' '}
            <Link href="/privacy" color="primary">
              privacy policy
            </Link>
            .
          </Typography>
        </Stack>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAccept}
          sx={{ alignSelf: { xs: 'flex-end', sm: 'center' } }}
        >
          Accept
        </Button>
      </Paper>
    </Snackbar>
  );
}
