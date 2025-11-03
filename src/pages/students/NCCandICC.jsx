import React from "react";

const NCCandICC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Banner */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          NCC / NSS & Internal Complaint Committee
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* NSS */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">National Service Scheme (NSS)</h2>
          <p className="text-gray-700 mb-3">
            Empowering students through community service, the NSS develops
            responsibility, empathy, and social awareness.
          </p>
          <p className="text-gray-700">
            Coordinator: <strong>Mr. Pradeep Kumar Tiwari</strong>  
            <br />📞 8177001081
          </p>
        </section>

        {/* ICC */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Internal Complaint Committee (ICC)</h2>
          <p className="text-gray-700 mb-4">
            The ICC ensures a safe, harassment-free environment for students and
            staff. It implements zero-tolerance policies for gender
            discrimination and harassment.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Procedure:</h3>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700">
            <li>Complaint received via box or phone.</li>
            <li>Written complaint reviewed within two days.</li>
            <li>Enquiry conducted and resolved within one week.</li>
          </ol>

          <p className="mt-4 text-gray-700">
            <a
              href="https://example.com/UGC_regulations_2015.pdf"
              className="text-blue-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              UGC Regulations 2015 ↗
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default NCCandICC;
