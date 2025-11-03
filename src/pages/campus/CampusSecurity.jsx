import React from "react";

const CampusSecurity = () => {
  const images = [
    "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1614728263952-94e8e9536a05?auto=format&fit=crop&w=800&q=80",
  ];

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
          Campus Security
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">
          CLC Campus Security
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Security ${i + 1}`}
              className="rounded-lg shadow-md object-cover w-full h-60"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampusSecurity;
