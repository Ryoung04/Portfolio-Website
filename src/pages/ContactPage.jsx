import React from "react";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>

      <p className="text-gray-700 mb-4">I'd love to hear from you. For recruiting, collaborations, or general inquiries you can reach me via email or on LinkedIn / GitHub.</p>

      <div className="mt-4">
        <p className="text-sm text-gray-600">Email: <em>Add your email address</em></p>
        <p className="text-sm text-gray-600">LinkedIn: <a href="#" className="text-blue-600">Add your LinkedIn</a></p>
        <p className="text-sm text-gray-600">GitHub: <a href="#" className="text-blue-600">Add your GitHub</a></p>
      </div>

      <p className="mt-6 text-sm text-gray-500">If you'd like, I can add a contact form that emails you directly or integrate with Netlify / Formspree.</p>
    </div>
  );
}
