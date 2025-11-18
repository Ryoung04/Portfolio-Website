import React from "react";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>

      <p className="text-gray-700 mb-4">I'd love to hear from you. For recruiting, collaborations, or general inquiries you can reach me via email or on LinkedIn / GitHub.</p>

      <div className="mt-4 space-y-2 text-gray-700">
        <p className="text-sm">Email: <a href="mailto:reiseyoung@gmail.com" className="text-black underline">reiseyoung@gmail.com</a></p>
        <p className="text-sm">LinkedIn: <a href="https://www.linkedin.com/in/reise-young" target="_blank" rel="noopener noreferrer" className="text-black underline">www.linkedin.com/in/reise-young</a></p>
        <p className="text-sm">GitHub: <a href="https://github.com/Ryoung04" target="_blank" rel="noopener noreferrer" className="text-black underline">github.com/Ryoung04</a></p>
        <p className="text-sm">Resume: <a href="/assets/Reise_Resume.pdf" download className="text-black underline">Download Resume (PDF)</a></p>
      </div>

      <p className="mt-6 text-sm text-gray-500">If you'd like, I can add a contact form that emails you directly or integrate with Netlify / Formspree.</p>
    </div>
  );
}
