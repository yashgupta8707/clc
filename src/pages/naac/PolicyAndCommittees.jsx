import React from "react";

const PolicyAndCommittees = () => {
  const policies = [
    { name: "Annual Gender Sensitization Plan 2022-23", link: "https://example.com/annual-gender-plan.pdf" },
    { name: "CLC Green Policy", link: "https://example.com/green-policy.pdf" },
    { name: "E-Governance Policy", link: "https://example.com/egovernance-policy.pdf" },
    { name: "Disabled Friendly, Barrier-Free Environment Policy", link: "https://example.com/disabled-policy.pdf" },
  ];

  return (
    <div className="bg-white text-gray-800">
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Policies & Working Committees
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Annual Plan */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            Annual Gender Sensitization Plan
          </h2>
          <a
            href="https://example.com/gender-sensitization-2022-23.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline font-medium"
          >
            Download Annual Gender Sensitization Plan (PDF) ↗
          </a>
        </section>

        {/* Policies */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">Policies</h2>
          <ul className="space-y-3">
            {policies.map((p, i) => (
              <li key={i}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline font-medium"
                >
                  {p.name} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Working Committees */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            Working Committees
          </h2>
          <a
            href="https://example.com/working-committees.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline font-medium"
          >
            Download Working Committees PDF ↗
          </a>
        </section>
      </div>
    </div>
  );
};

export default PolicyAndCommittees;
