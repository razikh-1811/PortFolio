export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-4">Feel free to reach out via email or social media!</p>

        <div className="space-y-4">
          <p className="bg-gray-700 p-4 rounded-lg shadow-md">
            📧 Email: <a href="mailto:razikh1811@gmail.com" className="text-blue-400">razikh1811@gmail.com</a>
          </p>
          <p className="bg-gray-700 p-4 rounded-lg shadow-md">
            📞 Phone: <span className="text-blue-400">+91 9346243176</span>
          </p>
          <p className="bg-gray-700 p-4 rounded-lg shadow-md">
            💼 LinkedIn: <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer" className="text-blue-400">linkedin.com/in/razikh1811</a>
          </p>
        </div>
      </div>
    </section>
  );
}


