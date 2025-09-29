import React from "react";

function ServiceCard({ icon, title, description }) {
  return (
    <div className="card bg-neutral border-2 border-red-900/30 shadow-xl card-hover">
      <figure className="px-6 pt-6">
        <div className="bg-red-600/20 p-6 rounded-xl">{icon}</div>
      </figure>
      <div className="card-body items-center text-center">
        <h3 className="card-title text-2xl text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function Services() {
  const services = [
    {
      title: "Strength Training",
      description:
        "Build raw power with our Olympic lifting platforms, free weights, and resistance machines designed for serious gains.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Group Classes",
      description:
        "High-intensity HIIT, spinning, yoga, and boxing classes led by certified instructors who bring the energy.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Personal Training",
      description: "One-on-one coaching tailored to your goals with customized workout plans and nutrition guidance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: "Cardio Zone",
      description:
        "Premium treadmills, bikes, rowers, and ellipticals with entertainment systems to keep you motivated.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Nutrition Coaching",
      description: "Expert meal planning and dietary advice to fuel your body and maximize your performance and recovery.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Recovery Zone",
      description: "Sauna, steam room, and massage therapy to help your muscles recover and your mind relax.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-red-950/10">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16 text-red-600">OUR SERVICES</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
