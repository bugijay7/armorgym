import React from "react";

function TestimonialCard({ stars, text, name, memberSince, img }) {
  return (
    <div className="card bg-neutral border-2 border-red-900/30 shadow-xl">
      <div className="card-body">
        <div className="rating mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <input
              key={i}
              type="radio"
              className="mask mask-star-2 bg-red-600"
              checked={i < stars}
              readOnly
            />
          ))}
        </div>
        <p className="text-gray-300 mb-4">{text}</p>
        <div className="flex items-center gap-4">
          <img src={img} alt={name} className="w-12 h-12 rounded-full" />
          <div>
            <p className="text-white font-semibold">{name}</p>
            <p className="text-gray-400 text-sm">Member since {memberSince}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      stars: 5,
      text: "Armor Fit changed my life! The trainers are incredibly motivating and the facility is top-notch.",
      name: "James K.",
      memberSince: "2019",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      stars: 4,
      text: "I love the group classes and cardio zones. Great variety and very welcoming community.",
      name: "Monica R.",
      memberSince: "2020",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      stars: 5,
      text: "Personal training sessions are very professional. I reached my goals faster than expected.",
      name: "David S.",
      memberSince: "2018",
      img: "https://randomuser.me/api/portraits/men/76.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-black to-red-950/10">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16 text-red-600">WHAT OUR MEMBERS SAY</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
