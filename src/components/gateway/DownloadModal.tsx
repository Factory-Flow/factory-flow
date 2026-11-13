import { useEffect, useRef, useState, type ReactNode, type SVGProps } from 'react';
import { createPortal } from 'react-dom';
import { X, Loader2, Check } from 'lucide-react';
import { AppleIcon, WindowsIcon, LinuxIcon } from './PlatformIcons';

function GatewayMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 222 222" fill="currentColor" {...props}>
      <rect x="41.5" y="-41.5" width="56" height="139" rx="17.52" ry="17.52" transform="translate(97.5 -41.5) rotate(90)" />
      <rect x="0" width="56" height="139" rx="17.52" ry="17.52" transform="translate(56 139) rotate(180)" />
      <rect x="83" y="83" width="56" height="56" rx="17.52" ry="17.52" transform="translate(222 222) rotate(180)" />
      <path d="m73.52,56h-17.52v17.52c0-9.64,7.88-17.52,17.52-17.52Z" />
      <rect x="124.5" y="124.5" width="56" height="139" rx="17.52" ry="17.52" transform="translate(-41.5 346.5) rotate(-90)" />
      <rect x="166" y="83" width="56" height="139" rx="17.52" ry="17.52" />
      <path d="m148.48,166h17.52v-17.52c0,9.64-7.88,17.52-17.52,17.52Z" />
    </svg>
  );
}

export type Platform = 'win' | 'mac-arm64' | 'mac-x64' | 'linux';
type TopPlatform = 'win' | 'mac' | 'linux';

const TOP_PLATFORMS: { value: TopPlatform; label: string; icon: ReactNode }[] = [
  { value: 'win', label: 'Windows', icon: <WindowsIcon className="w-5 h-5" /> },
  { value: 'mac', label: 'macOS', icon: <AppleIcon className="w-5 h-5" /> },
  { value: 'linux', label: 'Linux', icon: <LinuxIcon className="w-5 h-5" /> },
];

const MAC_VARIANTS: { value: Platform; label: string }[] = [
  { value: 'mac-arm64', label: 'Apple Silicon (arm64)' },
  { value: 'mac-x64', label: 'Intel (x64)' },
];

function toTopPlatform(platform: Platform): TopPlatform {
  return platform === 'mac-arm64' || platform === 'mac-x64' ? 'mac' : platform;
}

const DOWNLOAD_API_URL = import.meta.env.VITE_DOWNLOAD_API_URL || 'https://downloads.factoryflow.io';
const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;
const TURNSTILE_SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js';

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          'error-callback'?: () => void;
          'expired-callback'?: () => void;
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

function loadTurnstileScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve();
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${TURNSTILE_SCRIPT_SRC}"]`);
  if (existing) {
    return new Promise((resolve) => {
      if (window.turnstile) resolve();
      else existing.addEventListener('load', () => resolve(), { once: true });
    });
  }
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = TURNSTILE_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    document.head.appendChild(script);
  });
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface DownloadModalProps {
  open: boolean;
  onClose: () => void;
  initialPlatform: Platform;
}

export default function DownloadModal({ open, onClose, initialPlatform }: DownloadModalProps) {
  const [visible, setVisible] = useState(false);
  const [platform, setPlatform] = useState<Platform>(initialPlatform);
  const [email, setEmail] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (!open) return;
    setPlatform(initialPlatform);
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  }, [open, initialPlatform]);

  useEffect(() => {
    if (!open || !TURNSTILE_SITE_KEY) return;
    let cancelled = false;
    loadTurnstileScript().then(() => {
      if (cancelled || !turnstileRef.current || !window.turnstile) return;
      widgetId.current = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token) => setTurnstileToken(token),
        'error-callback': () => setTurnstileToken(''),
        'expired-callback': () => setTurnstileToken(''),
      });
    });
    return () => {
      cancelled = true;
      if (widgetId.current && window.turnstile) {
        window.turnstile.remove(widgetId.current);
        widgetId.current = undefined;
      }
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  function selectTopPlatform(value: TopPlatform) {
    if (value === 'mac') {
      setPlatform((prev) => (prev === 'mac-arm64' || prev === 'mac-x64' ? prev : 'mac-arm64'));
    } else {
      setPlatform(value);
    }
  }

  function handleClose() {
    setVisible(false);
    setTimeout(() => {
      setStatus('idle');
      setErrorMessage('');
      setEmail('');
      setTurnstileToken('');
      onClose();
    }, 200);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !turnstileToken || status === 'submitting') return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch(`${DOWNLOAD_API_URL}/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, platform, turnstileToken }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        if (widgetId.current && window.turnstile) window.turnstile.reset(widgetId.current);
        setTurnstileToken('');
        return;
      }
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
      if (widgetId.current && window.turnstile) window.turnstile.reset(widgetId.current);
      setTurnstileToken('');
    }
  }

  if (!open) return null;

  const topPlatform = toTopPlatform(platform);

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-6 transition-all duration-200 ${
        visible ? 'bg-black/85 backdrop-blur-sm' : 'bg-transparent backdrop-blur-none'
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative w-full max-w-md rounded-2xl border border-white/[0.12] bg-[#0a0b0d] p-6 shadow-2xl transition-all duration-200 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-secondary hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {status === 'success' ? (
          <div className="py-1">
            <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-400/20 flex items-center justify-center mb-4">
              <Check className="w-5 h-5 text-green-400" strokeWidth={2.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Check your email</h3>
            <p className="text-sm text-secondary leading-relaxed">
              We sent a download link to <span className="text-white">{email}</span>. It expires in an hour.
            </p>
          </div>
        ) : (
          <>
            <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-4">
              <GatewayMark className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-1 pr-6">
              Download Factory Flow{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-indigo-400">Gateway</span>
            </h3>
            <p className="text-sm text-secondary leading-relaxed mb-5">
              We'll send you a one-time download link.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="grid grid-cols-3 gap-2">
                {TOP_PLATFORMS.map((p) => (
                  <button
                    key={p.value}
                    type="button"
                    onClick={() => selectTopPlatform(p.value)}
                    aria-pressed={topPlatform === p.value}
                    className={`flex flex-col items-center gap-2 rounded-lg border px-3 py-3 text-sm font-medium transition-colors cursor-pointer ${
                      topPlatform === p.value
                        ? 'border-indigo-400/50 bg-indigo-500/10 text-white'
                        : 'border-white/[0.12] bg-white/[0.02] text-secondary hover:bg-white/[0.04] hover:text-white'
                    }`}
                  >
                    {p.icon}
                    {p.label}
                  </button>
                ))}
              </div>

              {topPlatform === 'mac' && (
                <div className="grid grid-cols-2 gap-2">
                  {MAC_VARIANTS.map((v) => (
                    <button
                      key={v.value}
                      type="button"
                      onClick={() => setPlatform(v.value)}
                      aria-pressed={platform === v.value}
                      className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                        platform === v.value
                          ? 'border-indigo-400/50 bg-indigo-500/10 text-white'
                          : 'border-white/[0.12] bg-white/[0.02] text-secondary hover:bg-white/[0.04] hover:text-white'
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              )}

              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-white/[0.12] bg-white/[0.02] px-3 py-2.5 text-sm text-white placeholder:text-secondary/60 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
              />

              {TURNSTILE_SITE_KEY && <div ref={turnstileRef} />}

              {status === 'error' && <p className="text-xs text-red-400">{errorMessage}</p>}

              <button
                type="submit"
                disabled={!email || !turnstileToken || status === 'submitting'}
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-all text-[15px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' && <Loader2 className="w-4 h-4 animate-spin" />}
                Send me the download link
              </button>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
