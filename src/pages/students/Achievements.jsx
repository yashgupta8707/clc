import React from "react";

const Achievements = () => {
  const certificates = Array(6).fill("https://via.placeholder.com/200");

  return (
    <div className="bg-white text-gray-800">
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515165562835-cfba588b03ec?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Achievements
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">
          Student Achievements & Certificates
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {certificates.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Achievement ${i + 1}`}
              className="rounded-lg shadow-md object-cover w-full h-56"
            />
          ))}
        </div>

        <div className="space-y-2">
          <a
            href="https://example.com/state-bar-students.pdf"
            className="text-blue-700 hover:underline block"
          >
            Verified List of Students Enrolled in State Bar Council ↗
          </a>
          <a
            href="https://example.com/higher-education.pdf"
            className="text-blue-700 hover:underline block"
          >
            Students Progressed in Higher Education ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
