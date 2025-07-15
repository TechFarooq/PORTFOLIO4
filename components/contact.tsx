'use client';

import { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [done, setDone] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_bnn4l1q',
        'template_qatme87',
        form.current,
        'newRCgwK5DGvLAwZI'
      )
      .then(
        () => {
          setDone(true);
          form.current?.reset();
          toast.success("Message sent successfully ✅");
        },
        (error) => {
          console.error('EmailJS error:', error.text);
          toast.error("Failed to send message ❌");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <Toaster />
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition-colors text-white font-bold py-3 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
