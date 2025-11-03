import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

const AcademicFaculty = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Faculty</h1>
          <div className="flex items-center justify-center mt-4 text-sm">
            <span className="text-blue-200">Home</span>
            <span className="mx-2">/</span>
            <span className="text-blue-200">Academics</span>
            <span className="mx-2">/</span>
            <span>Faculty</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Banner Image */}
          <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=400&fit=crop" 
              alt="Faculty Members"
              className="w-full h-96 object-cover"
            />
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Dedicated Academic Excellence</h2>
              <p className="text-blue-100">
                Our distinguished faculty brings together expertise, experience, and passion for legal education
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-700 pl-4">
              About Our Faculty
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              City Law College boasts a dedicated and experienced faculty committed to delivering quality legal 
              education. Our faculty members are actively involved in various academic and research activities, 
              contributing to the institution's reputation for excellence. With a diverse range of specializations 
              and years of experience, our faculty members ensure that students receive comprehensive and 
              up-to-date legal education.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The faculty members engage in regular workshops, seminars, and conferences to stay updated with 
              the latest developments in law and pedagogy. They mentor students not only in academics but also 
              in their overall personality development and career planning.
            </p>
          </div>

          {/* Faculty Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-md p-6 text-center text-white">
              <div className="text-4xl font-bold mb-2">57</div>
              <p className="text-sm text-blue-100">Teaching Faculty</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-lg shadow-md p-6 text-center text-white">
              <div className="text-4xl font-bold mb-2">20+</div>
              <p className="text-sm text-green-100">PhD Holders</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg shadow-md p-6 text-center text-white">
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-sm text-purple-100">Years Avg Experience</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg shadow-md p-6 text-center text-white">
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-sm text-orange-100">Research Publications</p>
            </div>
          </div>

          {/* Faculty Documents */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Faculty List */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-blue-100 p-6 rounded-full">
                  <FaFileDownload className="text-blue-700 text-5xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Faculty List</h3>
              <p className="text-gray-600 text-center mb-6">
                Complete list of all teaching faculty members with their qualifications, specializations, 
                and contact information.
              </p>
              <div className="text-center">
                <a
                  href="/pdfs/faculty-list.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium"
                >
                  <FaFileDownload />
                  View Faculty List
                </a>
              </div>
            </div>

            {/* PhD List */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-green-100 p-6 rounded-full">
                  <FaFileDownload className="text-green-700 text-5xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">PhD List</h3>
              <p className="text-gray-600 text-center mb-6">
                List of faculty members holding PhD degrees, their research areas, and academic contributions 
                to legal scholarship.
              </p>
              <div className="text-center">
                <a
                  href="/pdfs/phd-list.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors font-medium"
                >
                  <FaFileDownload />
                  View PhD List
                </a>
              </div>
            </div>
          </div>

          {/* Faculty Expertise */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Areas of Expertise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-3">⚖️</div>
                <h4 className="font-semibold text-gray-800 mb-2">Constitutional Law</h4>
                <p className="text-sm text-gray-600">Fundamental rights, governance structures</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-3">🏢</div>
                <h4 className="font-semibold text-gray-800 mb-2">Corporate Law</h4>
                <p className="text-sm text-gray-600">Business regulations, compliance</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-3">🔐</div>
                <h4 className="font-semibold text-gray-800 mb-2">Criminal Law</h4>
                <p className="text-sm text-gray-600">IPC, CrPC, evidence law</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-3">👨‍👩‍👧</div>
                <h4 className="font-semibold text-gray-800 mb-2">Family Law</h4>
                <p className="text-sm text-gray-600">Marriage, inheritance, succession</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-3">🌐</div>
                <h4 className="font-semibold text-gray-800 mb-2">International Law</h4>
                <p className="text-sm text-gray-600">Treaties, diplomatic relations</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-3">💼</div>
                <h4 className="font-semibold text-gray-800 mb-2">Commercial Law</h4>
                <p className="text-sm text-gray-600">Contracts, sales, negotiable instruments</p>
              </div>
            </div>
          </div>

          {/* Faculty Development */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg shadow-md p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Commitment to Excellence</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Regular Training</h4>
                  <p className="text-blue-100 text-sm">
                    Participation in FDPs and professional development workshops
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Research Focus</h4>
                  <p className="text-blue-100 text-sm">
                    Active research and publications in reputed journals
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Student Mentorship</h4>
                  <p className="text-blue-100 text-sm">
                    Personalized guidance and career counseling
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Innovation</h4>
                  <p className="text-blue-100 text-sm">
                    Modern teaching methods and technology integration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicFaculty;