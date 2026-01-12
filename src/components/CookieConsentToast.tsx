import { useEffect, useState } from 'react';

const STORAGE_KEY = 'factory-flow-cookie-consent';

function readConsent() {
  if (typeof window === 'undefined') return true;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'accepted';
  } catch {
    return true;
  }
}

function storeConsent() {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, 'accepted');
  } catch {
    // Ignore
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

  if (!open) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-6">
      <div className="bg-[#0d0e10]/95 backdrop-blur-xl border card-border-hover p-5 rounded-xl shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 text-sm">
          <p className="font-medium text-white mb-1.5 text-[15px]">We use cookies</p>
          <p className="text-secondary text-[13px] leading-relaxed">
            We use cookies to improve your experience. By clicking accept, you agree to our{' '}
            <a href="/privacy" className="text-white hover:text-white/80 underline underline-offset-2 transition-colors">privacy policy</a>.
          </p>
        </div>
        <button
          onClick={handleAccept}
          className="px-5 py-2 bg-white text-black font-medium rounded-md hover:bg-white/90 transition-all whitespace-nowrap text-sm cursor-pointer"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
