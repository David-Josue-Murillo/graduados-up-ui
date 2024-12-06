import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center mt-12 px-4">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
        Cantidad de graduados por año en la{" "}
        <span className="text-green-700">Universidad de Panamá</span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 text-lg md:text-xl mt-4">
        Esta es una API RESTful que permite gestionar datos relacionados con
        graduados universitarios de la Universidad de Panamá.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <button className="bg-green-600 text-white px-6 py-2 rounded-md shadow hover:bg-green-700">
          Get Started
        </button>
        <a
          href="https://github.com"
          className="border border-gray-300 px-6 py-2 rounded-md text-gray-600 hover:border-green-700 hover:text-green-700"
        >
          GitHub
        </a>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-8 left-12">
        <img
          src="/graduation-icon.svg"
          alt="Graduation Icon"
          className="w-12 h-12 opacity-50"
        />
      </div>
      <div className="absolute top-12 right-12">
        <img
          src="/graduation-icon.svg"
          alt="Graduation Icon"
          className="w-12 h-12 opacity-50"
        />
      </div>
    </section>
  );
};

export default HeroSection;
