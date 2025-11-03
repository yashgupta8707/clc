import React from "react";

const CampusOverview = () => {
  const campusImages = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
  ];

  const divyangImages = [
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687920-4b1bf1b6b44f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Banner */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          CLC Campus & Divyangjan Facilities
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Campus Section */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            CLC Campus
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {campusImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Campus ${i + 1}`}
                className="rounded-lg shadow-md object-cover w-full h-60"
              />
            ))}
          </div>
        </section>

        {/* Divyang Facilities */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            Divyangjan Facilities
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {divyangImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Facility ${i + 1}`}
                className="rounded-lg shadow-md object-cover w-full h-60"
              />
            ))}
          </div>
          <div className="mt-6">
            <a
              href="https://example.com/policy-for-disabled.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline font-medium"
            >
              Policy for Disabled (PDF) ↗
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CampusOverview;
