import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// IntersectionObserver-based reveal for sections (better performance)
function setupRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // stagger reveal for children with .reveal-child
            const children = entry.target.querySelectorAll('.reveal-child');
            children.forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * 80 + 60);
            });
            observer.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: '0px', threshold: 0.08 }
  );

  const sections = Array.from(document.querySelectorAll('section'));
  sections.forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', setupRevealObserver);
  } else {
    setupRevealObserver();
  }
}
