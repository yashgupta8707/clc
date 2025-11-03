import React from "react";

const FacilitiesDivyang = () => {
  const facilities = [
    {
      title: "Built Environment with Ramps/Lifts",
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Divyangjan-Friendly Washrooms",
      img: "https://images.unsplash.com/photo-1600607687920-4b1bf1b6b44f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Tactile Paths & Signage",
      img: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Assistive Technology Facilities",
      img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Facilities for Differently-Abled
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {facilities.map((item, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-blue-800 text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://example.com/divyang-policy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline font-medium"
          >
            View DIVYANG POLICY (PDF) ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesDivyang;
