import { useEffect, useState } from "react";
import banner1 from "../assets/banner-1.jpg";
import banner2 from "../assets/banner-2.jpg";
import banner3 from "../assets/banner-3.jpg";

// All banner images
const images = [banner1, banner2, banner3];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // Automatically update the current image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[70vh] relative overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`w-full h-full transition-opacity duration-700 ease-in-out ${
            current === index
              ? "opacity-100 relative z-10"
              : "opacity-0 absolute inset-0 z-0"
          }`}
        >
          {/* Banner Image */}
          <img
            src={img}
            className="w-full h-full object-cover"
            alt={`Banner ${index + 1}`}
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white p-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Discover & Share Amazing Recipes
            </h1>
            <p className="mb-6 max-w-xl">
              Explore a world of flavors, from traditional dishes to creative
              culinary experiments.
            </p>
            <a href="/all-recipes" className="btn btn-warning text-white">
              Browse Recipes
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
