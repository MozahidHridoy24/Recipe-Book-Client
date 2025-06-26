import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-base-200 px-4 py-12 text-base-content">
      <div className="w-11/12 mx-auto">
        <h1 className="text-4xl font-bold text-orange-500 mb-6 text-center">
          About Us
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-orange-600 mb-2">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed">
            At{" "}
            <span className="font-semibold text-orange-500">Recipe Book</span>,
            we believe food is more than just nourishment — it's a way to
            connect, share, and inspire. Our mission is to provide a simple
            platform where food lovers can explore, share, and preserve their
            favorite recipes from all over the world.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-orange-600 mb-2">
            What We Offer
          </h2>
          <ul className="list-disc ml-6 text-lg leading-relaxed space-y-1">
            <li>Discover and explore diverse cuisines</li>
            <li>Upload and manage your personal recipes</li>
            <li>Get inspired by trending & top-rated dishes</li>
            <li>Like and bookmark your favorite recipes</li>
          </ul>
        </section>

        <section className="mb-10 text-black">
          <h2 className="text-2xl font-semibold text-orange-600 mb-2">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            <div className="bg-orange-100 rounded-lg p-4 shadow border">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                Simplicity
              </h3>
              <p>
                A clean and easy-to-use interface for all users to add, find,
                and love recipes.
              </p>
            </div>
            <div className="bg-orange-100 rounded-lg p-4 shadow border">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                Community
              </h3>
              <p>
                We're building a platform that brings home cooks and foodies
                together to share love through food.
              </p>
            </div>
            <div className="bg-orange-100 rounded-lg p-4 shadow border">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                Passion
              </h3>
              <p>
                Every recipe has a story. We're passionate about helping you
                tell yours.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-orange-600 mb-2">
            Meet the Developer
          </h2>
          <p className="text-lg">
            👨‍💻 Built by{" "}
            <span className="text-orange-500 font-medium">Mozahidul Islam</span>{" "}
            — a MERN Stack developer passionate about crafting clean,
            user-friendly web applications.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
