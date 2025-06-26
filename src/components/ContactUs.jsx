import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-base-200 px-4 py-12 text-base-content">
      <div className="w-11/12 mx-auto">
        <h1 className="text-4xl font-bold text-orange-500 mb-6 text-center">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-orange-100 p-6 rounded-lg shadow text-black border border-orange-200">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              Get in Touch
            </h2>
            <p className="mb-4">
              We'd love to hear from you! Whether you have a question about a
              recipe, feedback on the app, or just want to connect, feel free to
              reach out.
            </p>
            <ul className="space-y-2">
              <li>
                📧 <strong>Email:</strong>{" "}
                <a
                  href="mailto:hridoy1407@gmail.com"
                  className="text-orange-500 hover:underline"
                >
                  hridoy1407@gmail.com
                </a>
              </li>
              <li>
                📞 <strong>Phone:</strong>{" "}
                <a
                  href="tel:01913959624"
                  className="text-orange-500 hover:underline"
                >
                  01913959624
                </a>
              </li>
              <li>
                🕒 <strong>Support Hours:</strong> 9 AM – 6 PM (GMT+6), Sunday
                to Friday
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-base-100 p-6 rounded-lg shadow border border-orange-200">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              Send a Message
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent!");
                e.target.reset();
              }}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="input input-bordered w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="input input-bordered w-full"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="textarea textarea-bordered w-full"
              ></textarea>
              <button
                type="submit"
                className="btn bg-orange-500 hover:bg-orange-600 text-white w-full"
              >
                📤 Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
