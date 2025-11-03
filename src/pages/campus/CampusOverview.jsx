import React from "react";

const CampusOverview = () => {
  const campusImages = [
"https://i.ibb.co/WWdd1DZ0/236.jpg",
"https://i.ibb.co/9k1p8Snx/76.jpg",
"https://i.ibb.co/SDfJmbCF/75.jpg"
  ];

  const divyangImages = [
        "https://i.ibb.co/HfLyBB80/136.jpg",
"https://i.ibb.co/Fq7MZyWf/135.jpg",
"https://i.ibb.co/FL5TKTsK/131.jpg",
"https://i.ibb.co/BHrRY5hP/130.jpg"
  ];

  const basePath = "/pdfs";
  const toLink = (file) => `${basePath}/${encodeURIComponent(file)}`;

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
              href={toLink("policy.pdf")}
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
