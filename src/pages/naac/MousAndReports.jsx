import React from "react";

const MousAndReports = () => {
  const mous = [
    { name: "Educational Institute", link: "https://example.com/mou-education.pdf" },
    { name: "Law Firm", link: "https://example.com/mou-lawfirm.pdf" },
    { name: "NGO", link: "https://example.com/mou-ngo.pdf" },
  ];

  const reports = [
    { name: "Disability/Gender/Diversity Audit", link: "https://example.com/diversity-audit.pdf" },
    { name: "Student Satisfaction Survey (SSS)", link: "https://example.com/sss.pdf" },
    { name: "Best Practices", link: "https://example.com/best-practices.pdf" },
    { name: "Institutional Distinctiveness", link: "https://example.com/institutional-distinctiveness.pdf" },
  ];

  return (
    <div className="bg-white text-gray-800">
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581091012184-5c8af709c6cb?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          MOUs & Institutional Reports
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* MOUs */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">MOUs</h2>
          <ul className="space-y-3">
            {mous.map((m, i) => (
              <li key={i}>
                <a
                  href={m.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline font-medium"
                >
                  {m.name} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Reports */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            Institutional Reports
          </h2>
          <ul className="space-y-3">
            {reports.map((r, i) => (
              <li key={i}>
                <a
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline font-medium"
                >
                  {r.name} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default MousAndReports;
