import React from "react";

const SportsFacilities = () => {
  const images = [
    "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1571003123894-1e3b9b4d3436?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <div className="bg-white text-gray-800">
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1601233745647-3b2b75d7c33a?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Sports Facilities
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-gray-700 mb-8">
          City Law College encourages holistic development through sports.
          Students actively participate in football, cricket, volleyball,
          athletics, and indoor games, fostering teamwork and leadership.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Sports ${idx + 1}`}
              className="rounded-lg shadow-md object-cover w-full h-60"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsFacilities;
