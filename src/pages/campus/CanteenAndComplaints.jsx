import React from "react";

const CanteenAndComplaints = () => {
  const complaintImgs = Array(3).fill(
    "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=800&q=80"
  );
  const canteenImgs = Array(4).fill(
    "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80"
  );

  return (
    <div className="bg-white text-gray-800">
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1573164574230-09d3b6a6a43d?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Complaint Box & Canteen
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Complaint Box */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            Complaint Box
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {complaintImgs.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Complaint Box ${i + 1}`}
                className="rounded-lg shadow-md object-cover w-full h-60"
              />
            ))}
          </div>
        </section>

        {/* Canteen */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">Canteen</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {canteenImgs.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Canteen ${i + 1}`}
                className="rounded-lg shadow-md object-cover w-full h-60"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CanteenAndComplaints;
