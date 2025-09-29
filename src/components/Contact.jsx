import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-24 bg-black bg-pattern">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="section-title text-center mb-12 text-red-600">GET IN TOUCH</h2>
        <form className="bg-neutral p-8 rounded-xl shadow-xl border border-red-900/30 grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full bg-black/20 text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full bg-black/20 text-white"
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full bg-black/20 text-white"
          />
          <button type="submit" className="btn btn-primary-custom text-white px-6 py-3 rounded-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
