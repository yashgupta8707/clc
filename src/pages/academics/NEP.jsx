import React from 'react';
import { FaFileDownload, FaGraduationCap } from 'react-icons/fa';

const NEP = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">National Education Policy (NEP)</h1>
          <div className="flex items-center justify-center mt-4 text-sm">
            <span className="text-blue-200">Home</span>
            <span className="mx-2">/</span>
            <span className="text-blue-200">Academics</span>
            <span className="mx-2">/</span>
            <span>NEP</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-blue-700 pl-4">
              About NEP 2020
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The National Education Policy (NEP) 2020 is a comprehensive framework for transforming India's 
              education system. It aims to make education more holistic, flexible, multidisciplinary, aligned 
              to the needs of the 21st century, and to bring out the unique capabilities of each student.
            </p>
            <p className="text-gray-700 leading-relaxed">
              City Law College is committed to implementing the NEP 2020 guidelines to ensure that our students 
              receive a world-class legal education that prepares them for the challenges of the modern legal 
              profession while maintaining the flexibility to explore interdisciplinary subjects.
            </p>
          </div>

          {/* Key Features */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-700 pl-4">
              Key Features of NEP in Legal Education
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📚</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Multidisciplinary Approach</h3>
                  <p className="text-gray-600 text-sm">
                    Integration of legal studies with other disciplines for comprehensive learning
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Flexible Learning</h3>
                  <p className="text-gray-600 text-sm">
                    Multiple entry and exit options with appropriate certification
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Skill Development</h3>
                  <p className="text-gray-600 text-sm">
                    Focus on practical skills, vocational training, and internships
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔬</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Research Focus</h3>
                  <p className="text-gray-600 text-sm">
                    Emphasis on research and innovation in legal studies
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Technology Integration</h3>
                  <p className="text-gray-600 text-sm">
                    Use of technology for enhanced teaching and learning experiences
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌐</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Global Outlook</h3>
                  <p className="text-gray-600 text-sm">
                    Internationalization of curriculum and student exchange programs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* NEP Document */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-xl p-12 text-center text-white mb-8">
            <FaGraduationCap className="text-7xl mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">NEP 2020 - Complete Document</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Download the official National Education Policy 2020 document to learn more about the 
              comprehensive reforms in Indian education system and their implementation at City Law College.
            </p>
            <a
              href="/pdfs/nep-final-english.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-blue-800 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-lg"
            >
              <FaFileDownload className="text-2xl" />
              Download NEP Document
            </a>
          </div>

          {/* Implementation at CLC */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-700 pl-4">
              NEP Implementation at City Law College
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                City Law College has taken proactive steps to align its curriculum and teaching methodologies 
                with the NEP 2020 guidelines. We are committed to providing a flexible, multidisciplinary, and 
                holistic education that prepares our students for the evolving legal landscape.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Our Initiatives Include:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-700 mt-1">✓</span>
                    <span>Introduction of interdisciplinary courses and electives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-700 mt-1">✓</span>
                    <span>Enhanced focus on practical training and internships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-700 mt-1">✓</span>
                    <span>Integration of technology in teaching and assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-700 mt-1">✓</span>
                    <span>Promotion of research culture among students and faculty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-700 mt-1">✓</span>
                    <span>Continuous faculty development programs aligned with NEP goals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NEP;