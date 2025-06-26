import React from "react";

const blogPosts = [
  {
    title: "5 Quick & Healthy Breakfast Ideas",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80",
    date: "June 20, 2025",
    excerpt:
      "Kickstart your morning with these easy, nutritious recipes that are both delicious and time-saving.",
  },
  {
    title: "Top 10 Must-Try International Dishes",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80",
    date: "June 10, 2025",
    excerpt:
      "Explore the flavors of the world with our curated list of international dishes you shouldn't miss.",
  },
  {
    title: "The Secret to Perfect Grilled Meat",
    image:
      "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "May 28, 2025",
    excerpt:
      "Discover the techniques and seasoning tips that will elevate your BBQ game to the next level.",
  },
  {
    title: "Vegan Desserts That Everyone Will Love",
    image:
      "https://i.ibb.co/ccRR8v5z/delicious-pasta-plate.jpg",
    date: "July 2, 2025",
    excerpt:
      "Delicious and healthy vegan dessert recipes to satisfy your sweet tooth.",
  },
];

const Blogs = () => {
  return (
    <section className="mt-1 py-12 bg-base-200 text-base-content">
      <div className="w-11/12 mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-8">
          Latest from Our Blog
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-base-100  rounded-xl shadow hover:shadow-xl transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4 text-left">
                <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                <h3 className="text-xl font-semibold text-orange-500 mb-2">
                  {post.title}
                </h3>
                <p>{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
