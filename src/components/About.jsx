import React from "react";

function About() {
  return (
    <section id="about" className="py-24 bg-black bg-pattern">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16 text-red-600">ABOUT ARMOR FIT</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800"
              alt="Gym Interior"
              className="rounded-2xl shadow-2xl border-4 border-red-900/30"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6 text-white">Where Strength Meets Dedication</h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Armor Fit is Zambezi's most advanced fitness facility...
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Whether you're a beginner or an athlete...
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-red-900/20 p-4 rounded-xl border border-red-900/30">
                <div className="text-3xl font-bold text-red-600">500+</div>
                <div className="text-sm text-gray-400">Members</div>
              </div>
              <div className="bg-red-900/20 p-4 rounded-xl border border-red-900/30">
                <div className="text-3xl font-bold text-red-600">15+</div>
                <div className="text-sm text-gray-400">Trainers</div>
              </div>
              <div className="bg-red-900/20 p-4 rounded-xl border border-red-900/30">
                <div className="text-3xl font-bold text-red-600">24/7</div>
                <div className="text-sm text-gray-400">Access</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
