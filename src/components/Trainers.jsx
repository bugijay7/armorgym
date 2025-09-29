import React from "react";

// Import trainer images
import MarcusImg from "../assets/marcus.jpeg";
import SarahImg from "../assets/sarah.jpeg";
import DiegoImg from "../assets/diego.jpeg";
import LisaImg from "../assets/lisa.jpeg";

function TrainerCard({ img, name, role, description }) {
  return (
    <div className="card bg-neutral border-2 border-red-900/30 shadow-xl card-hover">
      <figure>
        <img src={img} alt={name} className="w-full h-80 object-cover" />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-xl text-white">{name}</h3>
        <p className="text-red-600 font-semibold">{role}</p>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}

function Trainers() {
  const trainers = [
    {
      name: "Marcus Stone",
      role: "Strength & Conditioning",
      description: "10+ years experience in powerlifting and athletic performance training.",
      img: MarcusImg,
    },
    {
      name: "Sarah Phoenix",
      role: "HIIT & Cardio Specialist",
      description: "Former athlete specializing in high-intensity interval training and endurance.",
      img: SarahImg,
    },
    {
      name: "Diego Ramirez",
      role: "Boxing & Combat Sports",
      description: "Professional boxer with 15 years of martial arts and boxing coaching.",
      img: DiegoImg,
    },
    {
      name: "Lisa Chen",
      role: "Yoga & Mobility",
      description: "Certified yoga instructor focused on flexibility, balance, and mindfulness.",
      img: LisaImg,
    },
  ];

  return (
    <section id="trainers" className="py-24 bg-black bg-pattern">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16 text-red-600">MEET OUR TRAINERS</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {trainers.map((t, i) => (
            <TrainerCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainers;
