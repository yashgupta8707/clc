import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

const AcademicPrograms = () => {
  const llb5YearDocs = [
    { title: 'ORDINANCE LLB 5 YEAR 2017', file: '/pdfs/ordinance-llb-5year-2017.pdf' },
    { title: 'SYLLABUS LLB 5 YEAR 2018', file: '/pdfs/syllabus-llb-5year-2018.pdf' },
    { title: 'SYLLABUS LLB 5 YEAR 2021', file: '/pdfs/syllabus-llb-5year-2021.pdf' },
    { title: 'SYLLABUS LLB 5 YEAR 2017', file: '/pdfs/syllabus-llb-5year-2017.pdf' },
    { title: 'PO/PSO/CO', file: '/pdfs/po-pso-co-5year.pdf' },
  ];

  const llb3YearDocs = [
    { title: 'SYLLABUS LLB 3 YEAR', file: '/pdfs/syllabus-llb-3year.pdf' },
    { title: 'SYLLABUS LLB 3 YEAR 2018', file: '/pdfs/syllabus-llb-3year-2018.pdf' },
    { title: 'SYLLABUS LLB 3 YEAR 2021', file: '/pdfs/syllabus-llb-3year-2021.pdf' },
    { title: 'PO/PSO/CO', file: '/pdfs/po-pso-co-3year.pdf' },
  ];

  const addOnCourse = [
    { title: 'ADD ON COURSE', file: '/pdfs/add-on-course.pdf' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Details Of Academic Programs</h1>
          <div className="flex items-center justify-center mt-4 text-sm">
            <span className="text-blue-200">Home</span>
            <span className="mx-2">/</span>
            <span className="text-blue-200">Academics</span>
            <span className="mx-2">/</span>
            <span>Academic Programs</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Syllabus & Program Outcomes</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Access comprehensive syllabi, ordinances, and program outcomes for all our law programs. 
              These documents provide detailed information about course structures, learning outcomes, and academic guidelines.
            </p>
          </div>

          {/* LL.B 5 Years Program */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="border-l-4 border-blue-700 pl-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800">LL.B 5 Years (Integrated Program)</h3>
              <p className="text-gray-600 mt-2">Bachelor of Laws - Five Year Integrated Course</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {llb5YearDocs.map((doc, index) => (
                <a
                  key={index}
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-700 transition-all duration-300 group"
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

          {/* LL.B 3 Years Program */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="border-l-4 border-blue-700 pl-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800">LL.B 3 Years</h3>
              <p className="text-gray-600 mt-2">Bachelor of Laws - Three Year Course</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {llb3YearDocs.map((doc, index) => (
                <a
                  key={index}
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-700 transition-all duration-300 group"
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

          {/* ADD ON Courses */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="border-l-4 border-blue-700 pl-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800">ADD ON Courses</h3>
              <p className="text-gray-600 mt-2">Additional Skill Development Programs</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {addOnCourse.map((doc, index) => (
                <a
                  key={index}
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-700 transition-all duration-300 group"
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

          {/* Note */}
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
            <p className="text-gray-700">
              <span className="font-semibold">Note:</span> All documents are in PDF format. 
              Please ensure you have a PDF reader installed to view these documents. 
              For any queries regarding the syllabus, please contact the academic office.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicPrograms;