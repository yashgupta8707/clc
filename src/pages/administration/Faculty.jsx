import React from 'react';
import { FaUserTie, FaDownload, FaGraduationCap } from 'react-icons/fa';

const Faculty = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Faculty</h1>
          <div className="flex justify-center items-center gap-2 text-sm">
            <a href="/" className="hover:text-yellow-300">Home</a>
            <span>/</span>
            <a href="/administration" className="hover:text-yellow-300">Administration</a>
            <span>/</span>
            <span>Faculty</span>
          </div>
        </div>
      </section>

      {/* Banner Image */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0">
          <img 
            src="https://via.placeholder.com/1920x400?text=Our+Distinguished+Faculty" 
            alt="Faculty Banner"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <FaUserTie className="mx-auto mb-4" size={80} />
            <h2 className="text-5xl font-bold mb-4">Our Distinguished Faculty</h2>
            <p className="text-xl">
              Experienced educators committed to excellence in legal education
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                Meet Our Expert Faculty Members
              </h2>
              <p className="text-gray-600 text-lg">
                City Law College is proud to have a team of highly qualified, experienced, and dedicated 
                faculty members who are committed to providing quality legal education. Our faculty comprises 
                accomplished academicians, legal practitioners, and researchers who bring a wealth of knowledge 
                and practical experience to the classroom.
              </p>
            </div>

            {/* Faculty Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-700 mb-2">50+</div>
                <p className="text-gray-700">Qualified Faculty Members</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-700 mb-2">20+</div>
                <p className="text-gray-700">Ph.D. Holders</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-700 mb-2">30+</div>
                <p className="text-gray-700">Years Combined Experience</p>
              </div>
            </div>

            {/* Download Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Faculty List */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-xl">
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                    <FaUserTie className="text-blue-700" size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Faculty List</h3>
                  <p className="text-gray-600 mb-6">
                    Complete list of all faculty members with their qualifications, specializations, 
                    and contact information.
                  </p>
                </div>
                <a 
                  href="/pdfs/faculty-list.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  <FaDownload className="mr-3" size={20} />
                  Download Faculty List (PDF)
                </a>
              </div>

              {/* PhD List */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-xl">
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                    <FaGraduationCap className="text-blue-700" size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Ph.D. Faculty List</h3>
                  <p className="text-gray-600 mb-6">
                    List of faculty members with doctoral degrees, their research areas, and 
                    academic contributions.
                  </p>
                </div>
                <a 
                  href="/pdfs/phd-list.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  <FaDownload className="mr-3" size={20} />
                  Download Ph.D. List (PDF)
                </a>
              </div>
            </div>

            {/* Faculty Expertise Areas */}
            <div className="bg-blue-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
                Areas of Expertise
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-bold text-gray-800 mb-2">Constitutional Law</h4>
                  <p className="text-sm text-gray-600">Expert faculty in constitutional principles and rights</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-bold text-gray-800 mb-2">Criminal Law</h4>
                  <p className="text-sm text-gray-600">Experienced in criminal justice and procedures</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-bold text-gray-800 mb-2">Corporate Law</h4>
                  <p className="text-sm text-gray-600">Specialists in business and corporate legal matters</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-bold text-gray-800 mb-2">IPR & Cyber Law</h4>
                  <p className="text-sm text-gray-600">Experts in intellectual property and digital law</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-bold text-gray-800 mb-2">International Law</h4>
                  <p className="text-sm text-gray-600">Knowledgeable in international legal frameworks</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-bold text-gray-800 mb-2">Environmental Law</h4>
                  <p className="text-sm text-gray-600">Focus on environmental protection and regulations</p>
                </div>
              </div>
            </div>

            {/* Faculty Development */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">
                Faculty Development & Training
              </h3>
              
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <span className="text-blue-700 mr-3 mt-1">✓</span>
                  <p>Regular Faculty Development Programs (FDPs) to enhance teaching methodologies</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-3 mt-1">✓</span>
                  <p>Participation in national and international conferences and seminars</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-3 mt-1">✓</span>
                  <p>Research collaborations with leading universities and institutions</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-3 mt-1">✓</span>
                  <p>Publication support for research papers and academic journals</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-3 mt-1">✓</span>
                  <p>Workshops on modern teaching aids and technology integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Learn from the Best</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join City Law College and get mentored by experienced faculty who are dedicated 
            to your academic and professional success
          </p>
          <a 
            href="/admissions" 
            className="inline-block bg-white text-blue-800 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Apply for Admission
          </a>
        </div>
      </section>
    </div>
  );
};

export default Faculty;