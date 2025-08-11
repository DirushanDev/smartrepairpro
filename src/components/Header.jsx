import React from "react";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
          Professional Smart Repair Services
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
          Expert automotive repair solutions that restore your vehicle to perfect
          condition. From scratches to dents, we make it look like it never happened.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            View Our Services
            <FiArrowRight className="text-lg" />
          </a>
          <a
            href="#quote"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 bg-white text-gray-700 font-semibold rounded-md hover:bg-gray-100 transition"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
