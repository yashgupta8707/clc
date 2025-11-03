import React from 'react';
import { FaFileDownload, FaCalendarAlt } from 'react-icons/fa';

const AcademicCalendar = () => {
  const calendarDocuments = [
    {
      title: 'Academic Calendar 2018-2023',
      file: '/pdfs/academic-calendar-2018-2023.pdf',
      icon: '📅',
      color: 'blue'
    },
    {
      title: 'Academic Planner 2022-23',
      file: '/pdfs/academic-planner-2022-23.pdf',
      icon: '📋',
      color: 'green'
    },
    {
      title: 'Academic Calendar 2024-25',
      file: '/pdfs/academic-calendar-2024-25.pdf',
      icon: '🗓️',
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Academic Calendar</h1>
          <div className="flex items-center justify-center mt-4 text-sm">
            <span className="text-blue-200">Home</span>
            <span className="mx-2">/</span>
            <span className="text-blue-200">Academics</span>
            <span className="mx-2">/</span>
            <span>Academic Calendar</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Plan Your Academic Year</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access comprehensive academic calendars and planners to stay updated with important dates, 
              events, examinations, and holidays throughout the academic year.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {calendarDocuments.map((doc, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className={`bg-${doc.color}-700 p-6 text-center text-white`}>
                  <div className="text-6xl mb-4">{doc.icon}</div>
                  <h3 className="text-xl font-bold">{doc.title}</h3>
                </div>
                <div className="p-6">
                  <a
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 bg-${doc.color}-700 text-white px-6 py-3 rounded-lg hover:bg-${doc.color}-800 transition-colors font-medium w-full`}
                  >
                    <FaFileDownload />
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Key Dates Highlight */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg shadow-md p-8 text-white mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
              <FaCalendarAlt />
              Important Academic Events
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-xl">📚</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Semester Schedules</h4>
                  <p className="text-blue-100 text-sm">Start dates, end dates, and break periods</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-xl">📝</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Examination Dates</h4>
                  <p className="text-blue-100 text-sm">Internal and external examination schedules</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-xl">🎉</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">College Events</h4>
                  <p className="text-blue-100 text-sm">Seminars, workshops, and cultural activities</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-xl">🏖️</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Holidays</h4>
                  <p className="text-blue-100 text-sm">Public holidays and vacation periods</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Note</h3>
            <p className="text-gray-700">
              The academic calendar is subject to change. Students are advised to regularly check for updates 
              and announcements from the college administration. For any queries, please contact the academic office.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;