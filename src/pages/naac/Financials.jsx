import React from "react";

const Financials = () => {
  const financialYears = [
    "2018-19",
    "2019-20",
    "2020-21",
    "2021-22",
    "2022-23",
  ];

  return (
    <div className="bg-white text-gray-800">
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Financials & IQAC Documents
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Financial Reports */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            Income & Expenditure Statements
          </h2>
          <ul className="space-y-3">
            {financialYears.map((year, i) => (
              <li key={i}>
                <a
                  href={`https://example.com/financial-${year}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline font-medium"
                >
                  Financial Year {year} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* IQAC Composition */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            IQAC Composition
          </h2>
          <a
            href="https://example.com/iqac-composition.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline font-medium"
          >
            Download IQAC Composition (PDF) ↗
          </a>
        </section>

        {/* IQAC Minutes */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            IQAC Minutes
          </h2>
          <a
            href="https://example.com/iqac-minutes.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline font-medium"
          >
            View IQAC Minutes ↗
          </a>
        </section>
      </div>
    </div>
  );
};

export default Financials;
