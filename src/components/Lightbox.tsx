import { useState, useEffect } from 'react';

interface LightboxProps {
  src: string;
  alt: string;
  children: React.ReactNode;
  wrapperClassName?: string;
}

export default function Lightbox({ src, alt, children, wrapperClassName = 'w-full h-full' }: LightboxProps) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  function handleOpen() {
    setOpen(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  }

  function handleClose() {
    setVisible(false);
    setTimeout(() => setOpen(false), 200);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <div
        className={`${wrapperClassName} relative cursor-pointer group/lb`}
        onClick={handleOpen}
      >
        {children}
        <div className="absolute inset-0 bg-black/0 group-hover/lb:bg-black/40 transition-colors duration-200 flex items-center justify-center pointer-events-none">
          <div className="opacity-0 group-hover/lb:opacity-100 transition-opacity duration-200 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </div>
        </div>
      </div>

      {open && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-6 cursor-pointer transition-all duration-200 ${visible ? 'bg-black/85 backdrop-blur-sm' : 'bg-transparent backdrop-blur-none'}`}
          onClick={handleClose}
        >
          <img
            src={src}
            alt={alt}
            className={`max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl transition-all duration-200 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          />
        </div>
      )}
    </>
  );
}
