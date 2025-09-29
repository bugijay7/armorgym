import React from "react";
import HeroImg from "../assets/hero.jpg";

function Hero() {
  return (
    <section
      className="hero min-h-screen relative overflow-hidden"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${HeroImg}) center/cover no-repeat`,
      }}
    >
      <div className="hero-content text-center z-10">
        <div className="max-w-4xl">
          <h1 className="hero-title text-7xl md:text-9xl font-bold mb-6 text-white drop-shadow-2xl">
            FORGE YOUR <span className="text-red-600">ARMOR</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light">
            Transform Your Body, Elevate Your Mind, Unleash Your Power
          </p>
          <p className="text-lg mb-10 text-gray-400">
            Zambezi's Premier Fitness Destination | State-of-the-Art Equipment | Expert Trainers
          </p>
          <button className="btn btn-lg btn-primary-custom text-white px-10 py-4 text-xl rounded-full">
            START YOUR JOURNEY
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}

export default Hero;
