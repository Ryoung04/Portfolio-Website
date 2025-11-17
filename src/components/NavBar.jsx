import { useState, useRef, useEffect } from 'react'

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const firstLinkRef = useRef(null);

  // Close on Escape and trap focus when open
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        setOpen(false);
      }
      if (e.key === 'Tab' && open && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll(
          'a, button, input, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    }

    if (open) {
      document.addEventListener('keydown', onKeyDown);
      // focus the first link in the panel when it opens
      setTimeout(() => {
        firstLinkRef.current?.focus();
      }, 0);
      // prevent body scroll
      document.body.style.overflow = 'hidden';
      // hide main content from screen readers
      const main = document.getElementById('main-content');
      if (main) main.setAttribute('aria-hidden', 'true');
    }

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      const main = document.getElementById('main-content');
      if (main) main.removeAttribute('aria-hidden');
    };
  }, [open]);

  // keep reference to the toggle so we can return focus when closing
  const toggleRef = useRef(null);

  // return focus when menu closes
  useEffect(() => {
    if (!open) {
      setTimeout(() => toggleRef.current?.focus(), 0);
    }
  }, [open]);

  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
        <div className="col-span-1">
          <a href="#" className="text-lg font-semibold text-gray-900">Reise Young</a>
        </div>

        <div className="col-span-1 flex items-center justify-center">
          <div className="hidden lg:flex items-center space-x-8 text-sm text-gray-700">
            <a href="#about" className="hover:text-black transition">About</a>
            <a href="#projects" className="hover:text-black transition">Projects</a>
            <a href="#skills" className="hover:text-black transition">Skills</a>
            <a href="#contact" className="hover:text-black transition">Contact</a>
          </div>
        </div>

        <div className="col-span-1 flex justify-end">
          <button
            ref={toggleRef}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded text-gray-700 hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile slide-out menu (role=dialog for accessibility) */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-gray-900/95 backdrop-blur-sm shadow-lg transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="mb-6 p-2 rounded text-gray-300 hover:bg-gray-800/50"
          >
            Close
          </button>

          <nav className="flex flex-col gap-4 text-lg">
            <a ref={firstLinkRef} href="#about" onClick={() => setOpen(false)} className="text-gray-200 hover:text-white">About</a>
            <a href="#projects" onClick={() => setOpen(false)} className="text-gray-200 hover:text-white">Projects</a>
            <a href="#skills" onClick={() => setOpen(false)} className="text-gray-200 hover:text-white">Skills</a>
            <a href="#contact" onClick={() => setOpen(false)} className="text-gray-200 hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </nav>
  );
}

// return focus to toggle when menu closes
function useReturnFocus(toggleRef, open) {
  useEffect(() => {
    if (!open) {
      // microtask to ensure DOM is ready
      setTimeout(() => toggleRef.current?.focus(), 0);
    }
  }, [open]);
}
