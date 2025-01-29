'use client'
import Link from "next/link";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string>('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus("Sending...");

    setTimeout(() => {
      setStatus("Message Sent!");
      setEmail("");
      setMessage("");
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center bg-gray-800 text-white min-h-screen py-12 px-6">
      <h1 className="text-4xl font-semibold mb-6">Contact Support</h1>
      <p className="text-xl mb-6">
        If you have any questions or need help, feel free to reach out.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
        <div>
          <label className="block text-lg mb-2">Your Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 bg-gray-700 text-white rounded-lg"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-lg mb-2">Your Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-3 bg-gray-700 text-white rounded-lg"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-200"
        >
          Send Message
        </button>
      </form>

      {/* Status Message */}
      {status && <p className="mt-4 text-lg text-green-400">{status}</p>}

      {/* Back to Home Link */}
      <div className="mt-8 text-center">
        <Link href="/" className="text-gray-400 hover:text-gray-200 text-lg">
            Back to Home
        
        </Link>
      </div>
    </div>
  );
};

export default Contact;
