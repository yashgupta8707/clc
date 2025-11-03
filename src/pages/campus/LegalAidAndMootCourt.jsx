import React from "react";

const LegalAidAndMootCourt = () => {
  const legalAid = [
    "https://images.unsplash.com/photo-1581092335263-1e7f9dff6a4f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7?auto=format&fit=crop&w=800&q=80",
  ];
  const mootCourt = Array(8).fill("https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80");

  return (
    <div className="bg-white text-gray-800">
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589820296156-2454bb8f27c9?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Legal Aid Clinic & Moot Court
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">Legal Aid Clinic</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {legalAid.map((src, i) => (
              <img key={i} src={src} alt="Legal Aid" className="rounded-lg shadow-md object-cover w-full h-60" />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">Moot Court</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {mootCourt.map((src, i) => (
              <img key={i} src={src} alt="Moot Court" className="rounded-lg shadow-md object-cover w-full h-60" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LegalAidAndMootCourt;
