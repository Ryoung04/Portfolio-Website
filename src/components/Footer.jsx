import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="socials" aria-hidden={false}>
          <a href="https://www.linkedin.com/in/reise-young" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
            {/* LinkedIn SVG */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M4.98 3.5C4.98 4.60457 4.09957 5.485 2.995 5.485C1.89043 5.485 1.01 4.60457 1.01 3.5C1.01 2.39543 1.89043 1.515 2.995 1.515C4.09957 1.515 4.98 2.39543 4.98 3.5Z" fill="#0f172a"/>
              <path d="M6.5 8.75H0.5V23.5H6.5V8.75Z" fill="#0f172a"/>
              <path d="M23.5 23.5H17.5V16.25C17.5 14.481 17.5 11.99 15.001 11.99C12.5 11.99 12 14.098 12 16.123V23.5H6V8.75H11.5V10.86H11.56C12.32 9.55 14.14 8.25 16.81 8.25C21.6 8.25 23.5 10.91 23.5 15.67V23.5Z" fill="#0f172a"/>
            </svg>
          </a>

          <a href="https://github.com/Ryoung04" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
            {/* GitHub SVG */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 0.5C5.73 0.5 0.75 5.48 0.75 11.75C0.75 16.92 4.38 21.27 8.87 22.72C9.5 22.82 9.72 22.45 9.72 22.13C9.72 21.84 9.71 21.06 9.71 20.12C6.66 20.7 6.06 18.58 6.06 18.58C5.55 17.2 4.82 16.85 4.82 16.85C3.76 16.12 4.9 16.14 4.9 16.14C6.08 16.23 6.68 17.36 6.68 17.36C7.74 19.25 9.5 18.78 10.18 18.49C10.28 17.78 10.62 17.31 11 17.01C8.02 16.72 4.9 15.74 4.9 11.07C4.9 9.8 5.32 8.78 6.06 7.98C5.94 7.69 5.56 6.44 6.15 4.84C6.15 4.84 7.1 4.52 9.71 6.12C10.61 5.88 11.58 5.76 12.55 5.76C13.52 5.76 14.49 5.88 15.39 6.12C17.99 4.52 18.95 4.84 18.95 4.84C19.54 6.44 19.16 7.69 19.04 7.98C19.78 8.78 20.2 9.8 20.2 11.07C20.2 15.75 17.07 16.71 14.09 17.01C14.56 17.42 15 18.17 15 19.31C15 21.01 14.99 22.35 14.99 22.13C14.99 22.45 15.21 22.83 15.85 22.72C20.34 21.27 23.97 16.92 23.97 11.75C23.97 5.48 19 0.5 12 0.5Z" fill="#0f172a"/>
            </svg>
          </a>

          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
            {/* Instagram SVG */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M17 1H7C3.13 1 1 3.13 1 7V17C1 20.87 3.13 23 7 23H17C20.87 23 23 20.87 23 17V7C23 3.13 20.87 1 17 1Z" stroke="#0f172a" strokeWidth="1"/>
              <path d="M12 7.3C9.16 7.3 6.8 9.66 6.8 12.5C6.8 15.34 9.16 17.7 12 17.7C14.84 17.7 17.2 15.34 17.2 12.5C17.2 9.66 14.84 7.3 12 7.3Z" fill="#0f172a"/>
              <circle cx="18.5" cy="5.5" r="1.2" fill="#0f172a" />
            </svg>
          </a>
        </div>

        <div className="footer-copy">© {new Date().getFullYear()} Reise Young — All Rights Reserved</div>
      </div>
    </footer>
  );
}
