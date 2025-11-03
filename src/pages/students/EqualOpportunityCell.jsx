import React from "react";

const EqualOpportunityCell = () => {
  return (
    <div className="bg-white text-gray-800">
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600880292089-90e7e086ee0c?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Equal Opportunity Cell (EOC)
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-gray-700 mb-4">
          The EOC promotes equality and inclusivity for all members of the
          college community irrespective of caste, religion, gender, or
          disability.
        </p>
        <p className="text-gray-700 mb-6">
          To report grievances, write to:{" "}
          <a
            href="mailto:citylawjnk@cgclko.com"
            className="text-blue-700 hover:underline"
          >
            citylawjnk@cgclko.com
          </a>
        </p>

        <h3 className="text-lg font-semibold text-blue-800 mb-3">Members:</h3>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Mr. Rajeev Kumar Srivastava – Convener</li>
          <li>Mr. Nitish Kumar Tiwary – Member</li>
          <li>Dr. Meena Mishra – Member</li>
        </ul>
      </div>
    </div>
  );
};

export default EqualOpportunityCell;
