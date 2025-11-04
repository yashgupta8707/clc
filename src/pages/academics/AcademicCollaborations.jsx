import React from "react";
import {
  FaUniversity,
  FaBalanceScale,
  FaHandsHelping,
  FaFilePdf,
  FaExternalLinkAlt,
} from "react-icons/fa";

const AcademicCollaborations = () => {
  const mouLinks = [
    {
      title: "Educational Institute",
      file: "/pdfs/college.pdf",
      icon: <FaUniversity className="text-blue-700 text-3xl" />,
    },
    {
      title: "Law Firm",
      file: "/pdfs/LAW FIRM SCANNED.pdf",
      icon: <FaBalanceScale className="text-blue-700 text-3xl" />,
    },
    {
      title: "NGO",
      file: "/pdfs/NGO SCANNED.pdf",
      icon: <FaHandsHelping className="text-blue-700 text-3xl" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">College MOUs</h1>
          <div className="flex justify-center mt-4 text-sm">
            <span className="text-blue-200">Home</span>
            <span className="mx-2">/</span>
            <span className="text-blue-200">Academics</span>
            <span className="mx-2">/</span>
            <span>College MOUs</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-gray-700 text-lg leading-relaxed">
            City Law College fosters academic and professional collaborations
            through Memorandums of Understanding (MOUs) with various educational
            institutions, law firms, and NGOs. These collaborations aim to
            promote research, training, internships, and community engagement.
          </p>
        </div>

        {/* MOU Links */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {mouLinks.map((m, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center"
            >
              <div className="flex justify-center mb-4">{m.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {m.title}
              </h3>
              <a
                href={m.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium text-sm"
              >
                <FaFilePdf className="text-base" />
                View MOU (PDF)
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg max-w-5xl mx-auto">
          <p className="text-gray-700">
            <span className="font-semibold">Note:</span> All MOUs are stored
            locally in <code className="bg-white px-1 py-0.5 rounded">/public/pdfs/</code>.
            Ensure the following files exist:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mt-2">
            <li>college.pdf</li>
            <li>LAW FIRM SCANNED.pdf</li>
            <li>NGO SCANNED.pdf</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AcademicCollaborations;