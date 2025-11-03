import React from 'react';
import { FaBook, FaUsers, FaGavel, FaHandsHelping } from 'react-icons/fa';

const PrincipalsMessage = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Principal's Message</h1>
          <div className="flex justify-center items-center gap-2 text-sm">
            <a href="/" className="hover:text-yellow-300">Home</a>
            <span>/</span>
            <a href="/about" className="hover:text-yellow-300">About Us</a>
            <span>/</span>
            <span>Principal's Message</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
                Greetings from the Principal, City Law College
              </h2>

              {/* Principal Info */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-700 shadow-lg">
                    <img 
                      src="https://via.placeholder.com/200x200?text=Dr+Azad" 
                      alt="Dr. Azad Dwivedi" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-xl font-bold text-gray-800">Dr. Azad Dwivedi</h3>
                    <p className="text-blue-700 font-semibold">Principal</p>
                    <p className="text-gray-600 text-sm">City Law College</p>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-lg font-semibold text-gray-900">
                      We, the members of City Law College, established with the capable leadership of the 
                      Founder M.M. Srivastava Sir, endeavour our best to make the students of City Law College 
                      socially significant and professionally competent.
                    </p>

                    <p>
                      We are fully aware of the interdependence and relationship between law and society as well 
                      as the importance of law in the context of globalization. As a result, the students are 
                      raised with a professional mindset and curriculum to help them become the best legal minds.
                    </p>

                    <p>
                      The college is committed to developing in its students the self-assurance and boldness they 
                      need to face the challenges of their profession, as well as the professional culture of 
                      advocacy and a sense of loyalty to help those in need in society.
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Content */}
              <div className="space-y-6 text-gray-700 leading-relaxed mt-8">
                <p>
                  The college has a staff of committed and experienced faculty who are always prepared to mentor 
                  students in both academic and extracurricular activities. The institution also includes a library 
                  with a substantial collection of textbooks, legal journals, and magazines to meet the requirements 
                  of students.
                </p>

                <p>
                  The college organizes guest lectures by renowned figures from academia and other sectors in addition 
                  to the regular class lectures that follow the approved curriculum. In order to familiarize the 
                  students with the client-counselor interaction process, the institution also encourages students to 
                  take part in academic activities like moot courts, legal quizzes, etc.
                </p>

                <p>
                  The college also runs a free legal aid clinic.
                </p>

                <p className="font-semibold text-gray-900 text-lg">
                  I undertake the cooperation and guidance to all on behalf of college and once more cordially 
                  welcome you to City Law College and wish your alliance with the college a beneficial, success. 
                  Wish you all Good luck….
                </p>
              </div>

              {/* Signature Style Quote */}
              <div className="bg-blue-800 text-white p-8 rounded-lg mt-8">
                <div className="text-center">
                  <p className="text-xl italic mb-4">
                    "Our mission is to create socially significant and professionally competent legal professionals 
                    who can make a positive impact on society."
                  </p>
                  <p className="font-semibold">- Dr. Azad Dwivedi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
              Our Commitment to Students
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaUsers className="text-blue-700" size={32} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Experienced Faculty
                    </h3>
                    <p className="text-gray-600">
                      A staff of committed and experienced faculty who are always prepared to mentor students 
                      in both academic and extracurricular activities
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaBook className="text-blue-700" size={32} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Comprehensive Library
                    </h3>
                    <p className="text-gray-600">
                      Substantial collection of textbooks, legal journals, and magazines to meet the 
                      requirements of students
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaGavel className="text-blue-700" size={32} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Practical Training
                    </h3>
                    <p className="text-gray-600">
                      Regular moot courts, legal quizzes, and guest lectures by renowned figures from 
                      academia to enhance practical knowledge
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaHandsHelping className="text-blue-700" size={32} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Free Legal Aid Clinic
                    </h3>
                    <p className="text-gray-600">
                      Providing students with real-world experience while helping those in need in society 
                      through our legal aid clinic
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Focus Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
              Our Educational Approach
            </h2>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-700">
                <h3 className="font-bold text-gray-800 mb-2 text-lg">Professional Mindset</h3>
                <p className="text-gray-700">
                  Students are raised with a professional mindset and curriculum to help them become the 
                  best legal minds
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-700">
                <h3 className="font-bold text-gray-800 mb-2 text-lg">Self-Assurance & Boldness</h3>
                <p className="text-gray-700">
                  Developing the self-assurance and boldness needed to face the challenges of the legal 
                  profession
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-700">
                <h3 className="font-bold text-gray-800 mb-2 text-lg">Professional Culture of Advocacy</h3>
                <p className="text-gray-700">
                  Building a professional culture of advocacy and a sense of loyalty to help those in need 
                  in society
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-700">
                <h3 className="font-bold text-gray-800 mb-2 text-lg">Client-Counselor Interaction</h3>
                <p className="text-gray-700">
                  Familiarizing students with the client-counselor interaction process through practical 
                  academic activities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to City Law College</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            We cordially welcome you to City Law College and wish your alliance with the college a beneficial 
            success. Join us in our mission to create socially significant and professionally competent legal 
            professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/admissions" 
              className="inline-block bg-white text-blue-800 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply for Admission
            </a>
            <a 
              href="/contact" 
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-blue-800 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrincipalsMessage;