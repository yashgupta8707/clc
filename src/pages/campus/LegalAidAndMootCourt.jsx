import React from "react";

const LegalAidAndMootCourt = () => {
  const legalAid = [
    "https://i.ibb.co/C5Kx6wgc/50.jpg",
"https://i.ibb.co/JWzZmYjy/49.jpg"
  ];
  const mootCourt = [
"    https://i.ibb.co/xqNMhdMW/13.jpg",
"https://i.ibb.co/DcN8Fk0/12.jpg",
"https://i.ibb.co/YBgpwL12/11.jpg",
"https://i.ibb.co/j96PR4M4/10.jpg",
"https://i.ibb.co/YB77NS8R/8.jpg",
"https://i.ibb.co/jkZthTv5/9.jpg",
"https://i.ibb.co/6MVD0t9/7.jpg",
"https://i.ibb.co/bRd2P4Zf/77.jpg",
"https://i.ibb.co/k2v19ZTt/2028.jpg",
"https://i.ibb.co/kVn5Wp0L/2027.jpg"
  ]

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
