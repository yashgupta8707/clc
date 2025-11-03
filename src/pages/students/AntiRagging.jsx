import React from "react";

const AntiRagging = () => {
  const members = [
    ["Dr. Baseerat Fatima", "Principal", "Chairperson"],
    ["Mr. Nitish Tiwary", "Assistant Professor", "Convener"],
    ["Dr. Amita Asthana", "Assistant Professor", "Member"],
  ];

  return (
    <div className="bg-white text-gray-800">
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Anti-Ragging Cell
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-gray-700 mb-6">
          City Law College enforces strict anti-ragging policies and conducts
          awareness programs every semester. Students can report anonymously
          through helplines or the online form.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Designation</th>
                <th className="py-3 px-4 text-left">Position</th>
              </tr>
            </thead>
            <tbody>
              {members.map((m, i) => (
                <tr key={i} className="border-b border-gray-200">
                  <td className="py-2 px-4">{m[0]}</td>
                  <td className="py-2 px-4">{m[1]}</td>
                  <td className="py-2 px-4">{m[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-700">
          📞 <strong>Helpline:</strong> +91-8177001081  
          <br />
          📧 <a href="mailto:complain@cgclko.com" className="text-blue-700 hover:underline">
            complain@cgclko.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default AntiRagging;
