import React from "react";

const HealthAndSEDG = () => {
  return (
    <div className="bg-white text-gray-800">
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1580281657521-26d7f97b94e9?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Health & SEDG Cell
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Health */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Health Facilities
          </h2>
          <p className="text-gray-700">
            City Law College provides on-campus medical care and coordination
            with its sister concern, City Hospital Institute of Paramedical
            Science. Faculty and staff are also covered under General Health
            Insurance.
          </p>
        </section>

        {/* SEDG */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Socio-Economically Disadvantaged Groups (SEDG) Cell
          </h2>
          <p className="text-gray-700 mb-4">
            The SEDG Cell promotes equity, justice, and inclusivity for
            socio-economically disadvantaged students by ensuring access to
            scholarships, mentorship, and grievance redressal.
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Inclusive participation in academic programs</li>
            <li>Workshops and career counseling</li>
            <li>Financial assistance through scholarships</li>
            <li>Grievance redressal for discrimination cases</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default HealthAndSEDG;
