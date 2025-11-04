import React from 'react';
import { FaFileDownload, FaClock } from 'react-icons/fa';

const TimeTable = () => {
  const llb5YearTimetables = [
    { title: 'CLC LLB 5YR 2022-23 Even Semester', file: '/pdfs/LLB 5 YEAR EVEN SEM JAN 2023.pdf' },
    { title: 'CLC LLB 5YR 2022-23 Odd Semester', file: '/pdfs/LLB 5 YEAR ODD SEM JULY 2022.pdf' }
  ];

  const llb3YearTimetables = [
    { title: 'CLC LLB 3YR 2022-23 Even Semester', file: '/pdfs/LLB 3 YEAR EVEN SEM JAN 2023.pdf' },
    { title: 'CLC LLB 3YR 2022-23 Odd Semester', file: '/pdfs/LLB 3 YEAR ODD SEM JULY 2022.pdf' }
  ];

  const currentYearTimetable = [
    { title: 'Time Table for 3 Year & B.A. LL.B (2023-24)', file: '/pdfs/time table for 3 yr and hons.pdf' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center flex items-center justify-center gap-3">
            <FaClock />
            Time Table
          </h1>
          <div className="flex items-center justify-center mt-4 text-sm">
            <span className="text-blue-200">Home</span>
            <span className="mx-2">/</span>
            <span className="text-blue-200">Academics</span>
            <span className="mx-2">/</span>
            <span>Time Table</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Class Schedules</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access semester-wise timetables for all law programs. Stay updated with your class schedules, 
              lecture timings, and faculty assignments.
            </p>
          </div>

          {/* LL.B 5 Years */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-t-lg">
              <h3 className="text-2xl font-bold text-white">LL.B 5 Years (2022-23)</h3>
            </div>
            <div className="bg-white rounded-b-lg shadow-md p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {llb5YearTimetables.map((doc, index) => (
                  <a
                    key={index}
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-blue-700 hover:bg-blue-50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-700 transition-colors">
                        <FaFileDownload className="text-blue-700 group-hover:text-white text-xl" />
                      </div>
                      <span className="text-gray-700 font-medium">{doc.title}</span>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* LL.B 3 Years */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-green-600 to-green-800 p-4 rounded-t-lg">
              <h3 className="text-2xl font-bold text-white">LL.B 3 Years (2022-23)</h3>
            </div>
            <div className="bg-white rounded-b-lg shadow-md p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {llb3YearTimetables.map((doc, index) => (
                  <a
                    key={index}
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-green-700 hover:bg-green-50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-700 transition-colors">
                        <FaFileDownload className="text-green-700 group-hover:text-white text-xl" />
                      </div>
                      <span className="text-gray-700 font-medium">{doc.title}</span>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Current Year */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4 rounded-t-lg">
              <h3 className="text-2xl font-bold text-white">LL.B 3 Years & B.A. LL.B (2023-24)</h3>
            </div>
            <div className="bg-white rounded-b-lg shadow-md p-6">
              <div className="grid md:grid-cols-1 gap-6">
                {currentYearTimetable.map((doc, index) => (
                  <a
                    key={index}
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-purple-700 hover:bg-purple-50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-700 transition-colors">
                        <FaFileDownload className="text-purple-700 group-hover:text-white text-xl" />
                      </div>
                      <span className="text-gray-700 font-medium">{doc.title}</span>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Important Information</h3>
            <p className="text-gray-700">
              Timetables are subject to change based on faculty availability and administrative requirements. 
              Students will be notified of any changes through official college notices. For queries regarding 
              timetables, please contact the academic coordination office.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTable;