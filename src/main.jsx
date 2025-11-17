import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function showErrorOverlay(err) {
  const message = typeof err === 'string' ? err : (err && err.stack) || String(err);
  const root = document.getElementById('root');
  const html = `\n    <div style="padding:24px;background:#1f2937;color:#ffdddd;min-height:100vh;box-sizing:border-box;white-space:pre-wrap;">\n      <h2 style="margin-top:0;color:#ffd1d1">Runtime Error</h2>\n      <pre style="font-family:menlo,monospace;">${message}</pre>\n    </div>`;
  if (root) {
    root.innerHTML = html;
  } else {
    document.body.innerHTML = html;
  }
  // also log to console for good measure
  // eslint-disable-next-line no-console
  console.error(err);
}

window.addEventListener('error', (e) => {
  try {
    showErrorOverlay(e.error || e.message || e);
  } catch (err) {
    // ignore
  }
});

window.addEventListener('unhandledrejection', (e) => {
  try {
    showErrorOverlay(e.reason || e);
  } catch (err) {
    // ignore
  }
});

try {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
} catch (err) {
  showErrorOverlay(err);
}
