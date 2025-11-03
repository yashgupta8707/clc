import React from 'react';
import { FaFileDownload, FaExternalLinkAlt } from 'react-icons/fa';

const IQAC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Internal Quality Assurance Cell (IQAC)</h1>
          <div className="flex items-center justify-center mt-4 text-sm">
            <span className="text-blue-200">Home</span>
            <span className="mx-2">/</span>
            <span className="text-blue-200">Academics</span>
            <span className="mx-2">/</span>
            <span>IQAC</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* About IQAC */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-blue-700 pl-4">
              About IQAC
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The Internal Quality Assurance Cell (IQAC) is a quality sustenance measure of City Law College. 
                As per the guidelines of the National Assessment and Accreditation Council (NAAC), IQAC plays a 
                pivotal role in institutionalizing quality enhancement initiatives.
              </p>
              <p>
                IQAC acts as a nodal agency for coordinating quality-related activities including the adoption 
                and dissemination of best practices, organization of workshops, seminars on quality-related themes, 
                and preparation of the Annual Quality Assurance Report (AQAR) to be submitted to NAAC.
              </p>
            </div>
          </div>

          {/* Objectives */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-700 pl-4">
              Objectives of IQAC
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-700 font-bold">1</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  Develop a system for conscious, consistent and catalytic action to improve academic and 
                  administrative performance of the institution
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-700 font-bold">2</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  Promote measures for institutional functioning towards quality enhancement through 
                  internalization of quality culture
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-700 font-bold">3</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  Ensure timely, efficient and progressive performance of academic, administrative and 
                  financial tasks
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-700 font-bold">4</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  Provide a sound basis for decision-making to improve institutional functioning and 
                  promote innovation
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-700 font-bold">5</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  Act as a nodal agency for coordinating quality-related activities across the institution
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-700 font-bold">6</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  Build an organized methodology of documentation and internal communication
                </p>
              </div>
            </div>
          </div>

          {/* IQAC Document */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-700 pl-4">
              IQAC Documentation
            </h2>
            <div className="flex flex-col items-center justify-center py-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-12 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200">
                <FaFileDownload className="text-6xl text-blue-700 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                  IQAC Complete Report
                </h3>
                <p className="text-gray-600 mb-6 text-center max-w-md">
                  Download the comprehensive IQAC report containing all quality assurance initiatives, 
                  activities, and outcomes for the academic year.
                </p>
                <a
                  href="/pdfs/iqac-report.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium shadow-md hover:shadow-lg"
                >
                  <FaExternalLinkAlt />
                  <span>View IQAC Document</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Contact IQAC</h3>
            <p className="text-gray-700">
              For any queries or suggestions regarding quality assurance initiatives, please contact the 
              IQAC Coordinator at the college administration office or email us at iqac@citylawcollege.edu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IQAC;