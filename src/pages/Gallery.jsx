import React from "react";

const Gallery = () => {
  const sections = [
    {
      title: "Beyond Campus Outreach Activities",
      images: Array(8).fill(
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80"
      ),
    },
    {
      title: "Swachh Bharat",
      images: Array(8).fill(
        "https://images.unsplash.com/photo-1573497019581-4c72aa0c3b86?auto=format&fit=crop&w=800&q=80"
      ),
    },
    {
      title: "Tree Plantation",
      images: Array(4).fill(
        "https://images.unsplash.com/photo-1524593154658-2e4a23c3e8d6?auto=format&fit=crop&w=800&q=80"
      ),
    },
    {
      title: "Vidhik Sewa Divas",
      images: Array(4).fill(
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
      ),
    },
    {
      title: "Yuva Protsahan",
      images: Array(2).fill(
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
      ),
    },
    {
      title: "Yuva Shakti",
      images: Array(5).fill(
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80"
      ),
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Banner */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Gallery
        </h1>
      </div>

      {/* Gallery Sections */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">
              {section.title}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {section.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${section.title} ${i + 1}`}
                  className="rounded-lg shadow-md w-full h-56 object-cover hover:scale-105 transition-transform"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
