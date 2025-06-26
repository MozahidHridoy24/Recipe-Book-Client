import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    alert("Subscribed with: " + email);
    setEmail("");
  };

  return (
    <section className="bg-base-200 mt-1 py-12 text-base-content">
      <div className="bg-orange-100 w-11/12 mx-auto px-4 text-center py-12 rounded-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-black mb-6">
          Get the latest recipes, offers, and cooking tips straight to your
          inbox.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center justify-center gap-4 text-black"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full md:w-96 rounded border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
