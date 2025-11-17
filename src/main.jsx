import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Simple section reveal on load (adds 'visible' to elements with .reveal)
function revealSections() {
  const sections = Array.from(document.querySelectorAll('section'));
  sections.forEach((el, i) => {
    el.classList.add('reveal');
    // staggered reveal
    window.requestAnimationFrame(() => {
      setTimeout(() => el.classList.add('visible'), i * 80 + 120);
    });
  });
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', revealSections);
} else {
  revealSections();
}
