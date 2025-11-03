import React from "react";

const Sustainability = () => {
  const sustainabilitySections = [
    { title: "Generator", count: 2 },
    { title: "Energy Conservation Measures", count: 6 },
    { title: "Water Conservation Facilities", count: 6 },
    { title: "Green Campus Initiatives", count: 6 },
    { title: "Disabled-Friendly Barrier-Free Environment", count: 6 },
  ];

  const getImages = (count) =>
    Array(count)
      .fill("https://images.unsplash.com/photo-1581093588401-22d441b4e36e?auto=format&fit=crop&w=800&q=80");

  return (
    <div className="bg-white text-gray-800">
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Sustainability & Eco Initiatives
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {sustainabilitySections.map((section, idx) => (
          <section key={idx}>
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">
              {section.title}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {getImages(section.count).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${section.title} ${i + 1}`}
                  className="rounded-lg shadow-md object-cover w-full h-60"
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Sustainability;
