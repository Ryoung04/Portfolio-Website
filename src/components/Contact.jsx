export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center bg-gray-800">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

      <p className="text-gray-300 mb-8">
        Feel free to reach out through any platform below!
      </p>

      <div className="space-x-6 text-lg">
        <a
          href="mailto:your-email@example.com"
          className="text-blue-400 hover:underline"
        >
          Email
        </a>
        <a
          href="https://github.com/"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/"
          className="text-blue-400 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
