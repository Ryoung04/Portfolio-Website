export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>

        <p className="text-gray-300 mb-8">
          Feel free to reach out through any platform below — I respond quickly.
        </p>

        <div className="flex items-center justify-center gap-6 text-lg">
          <a
            href="mailto:reiseyoung@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Email
          </a>
          <a
            href="https://github.com/"
            className="inline-flex items-center gap-2 text-gray-200 hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/reise-young"
            className="inline-flex items-center gap-2 text-gray-200 hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
