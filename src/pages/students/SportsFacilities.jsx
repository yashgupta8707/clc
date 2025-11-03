import React from "react";

const SportsFacilities = () => {
  const images = [
    "https://i.ibb.co/mVcGghw8/2050.jpg",
    "https://i.ibb.co/Q3k1GVHJ/2049.jpg",
    "https://i.ibb.co/0pzQGx8d/2048.jpg",
    "https://i.ibb.co/bgcMJ42N/115.jpg",
    "https://i.ibb.co/bgvc0KK3/2046.jpg",
    "https://i.ibb.co/Vc7YWSwR/2045.jpg",
    "https://i.ibb.co/yFwvdnkT/2047.jpg",
    "https://i.ibb.co/tM8CXtT8/116.jpg",
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
