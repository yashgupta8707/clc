import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

const Examination = () => {
  const examDocuments = [
    {
      title: 'Internal Exam 2022-23 Even Semester',
      file: '/pdfs/INTERNAL EXAM 2022-23 EVEN SEM.pdf',
      date: 'June 2023'
    },
    {
      title: 'Internal Exam 2022-23 Odd Semester',
      file: '/pdfs/INTERNAL EXAM 2022-23 ODD SEM.pdf',
      date: 'December 2022'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Examination</h1>
          <div className="flex items-center justify-center mt-4 text-sm">
            <span className="text-blue-200">Home</span>
            <span className="mx-2">/</span>
            <span className="text-blue-200">Academics</span>
            <span className="mx-2">/</span>
            <span>Examination</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Internal Examination Records</h2>
            <p className="text-gray-600">
              Access internal examination schedules, results, and related documents
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {examDocuments.map((doc, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-100 p-6 rounded-full">
                    <FaFileDownload className="text-blue-700 text-4xl" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{doc.title}</h3>
                <p className="text-gray-600 text-center mb-6 text-sm">{doc.date}</p>
                <div className="text-center">
                  <a
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium"
                  >
                    <FaFileDownload />
                    View Document
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Examination Queries</h3>
            <p className="text-gray-700">
              For any queries regarding examinations, please contact the examination cell or visit the 
              university examination portal for external examination details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examination;