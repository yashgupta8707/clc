import React, { useState } from 'react';
import { FaBook, FaDownload, FaImages, FaChevronDown } from 'react-icons/fa';

const CodeOfConduct = () => {
  const [activeTab, setActiveTab] = useState('conduct');

  // const events = [
  //   {
  //     title: 'Code of Conduct Orientation Program 2024',
  //     date: 'August 15, 2024',
  //     image: 'https://via.placeholder.com/400x300?text=Orientation+Program+2024'
  //   },
  //   {
  //     title: 'Ethics and Professional Responsibility Workshop',
  //     date: 'September 10, 2024',
  //     image: 'https://via.placeholder.com/400x300?text=Ethics+Workshop'
  //   },
  //   {
  //     title: 'Student Code of Conduct Awareness Campaign',
  //     date: 'July 20, 2024',
  //     image: 'https://via.placeholder.com/400x300?text=Awareness+Campaign'
  //   },
  //   {
  //     title: 'Faculty Training on Code of Conduct',
  //     date: 'June 5, 2024',
  //     image: 'https://via.placeholder.com/400x300?text=Faculty+Training'
  //   }
  // ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Code of Conduct</h1>
          <div className="flex justify-center items-center gap-2 text-sm">
            <a href="/" className="hover:text-yellow-300">Home</a>
            <span>/</span>
            <a href="/administration" className="hover:text-yellow-300">Administration</a>
            <span>/</span>
            <span>Code of Conduct</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                <FaBook className="text-blue-700" size={64} />
              </div>
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                Code of Conduct
              </h2>
              <p className="text-gray-600 text-lg">
                City Law College maintains high standards of professional and ethical conduct for all 
                members of the college community including students, teachers, and staff.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={() => setActiveTab('conduct')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    activeTab === 'conduct'
                      ? 'bg-blue-700 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Code of Conduct Document
                </button>
                <button
                  onClick={() => setActiveTab('minutes')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    activeTab === 'minutes'
                      ? 'bg-blue-700 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Committee Minutes
                </button>
                {/* <button
                  onClick={() => setActiveTab('events')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    activeTab === 'events'
                      ? 'bg-blue-700 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Events & Activities
                </button> */}
              </div>
            </div>

            {/* Tab Content */}
            <div className="min-h-96">
              {/* Code of Conduct Document */}
              {activeTab === 'conduct' && (
                <div className="animate-fadeIn">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-xl">
                    <h3 className="text-2xl font-bold text-blue-800 mb-6">
                      Code of Conduct for Students, Teachers, and Staff
                    </h3>
                    
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">For Students</h4>
                      <div className="space-y-3 text-gray-700">
                        <div className="flex items-start">
                          <span className="text-blue-700 mr-3 mt-1">•</span>
                          <p>Maintain discipline and decorum within the college premises</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-blue-700 mr-3 mt-1">•</span>
                          <p>Attend all classes regularly and punctually</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-blue-700 mr-3 mt-1">•</span>
                          <p>Respect teachers, staff members, and fellow students</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-blue-700 mr-3 mt-1">•</span>
                          <p>Maintain academic integrity and avoid plagiarism</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-blue-700 mr-3 mt-1">•</span>
                          <p>Dress appropriately and maintain professional appearance</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">For Teachers</h4>
                      <div className="space-y-3 text-gray-700">
                        <div className="flex items-start">
                          <span className="text-blue-700 mr-3 mt-1">•</span>
                          <p>Maintain high standards of professional ethics</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-blue-700 mr-3 mt-1">•</span>
                          <p>Be punctual and regular in conducting classes</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-blue-700 mr-3 mt-1">•</span>
                          <p>Treat all students with fairness and respect</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-blue-700 mr-3 mt-1">•</span>
                          <p>Continuously upgrade knowledge and teaching methods</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-blue-700 mr-3 mt-1">•</span>
                          <p>Maintain confidentiality of student information</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">For Staff</h4>
                      <div className="space-y-3 text-gray-700">
                        <div className="flex items-start">
                          <span className="text-blue-700 mr-3 mt-1">•</span>
                          <p>Perform duties diligently and efficiently</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-blue-700 mr-3 mt-1">•</span>
                          <p>Maintain professional conduct and courtesy</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-blue-700 mr-3 mt-1">•</span>
                          <p>Support the academic and administrative functions</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-blue-700 mr-3 mt-1">•</span>
                          <p>Respect the dignity of all members of the college</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-blue-700 mr-3 mt-1">•</span>
                          <p>Maintain confidentiality of official matters</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <a 
                        href="/pdfs/coc.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                      >
                        <FaDownload className="mr-3" size={20} />
                        Download Complete Code of Conduct (PDF)
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Committee Minutes */}
              {activeTab === 'minutes' && (
                <div className="animate-fadeIn">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-xl">
                    <h3 className="text-2xl font-bold text-blue-800 mb-6">
                      Code of Conduct Committee Minutes
                    </h3>
                    
                    <p className="text-gray-700 mb-8">
                      The Code of Conduct Committee meets regularly to review compliance, address concerns, 
                      and ensure that all members of the college community adhere to the established standards 
                      of behavior and professional ethics.
                    </p>

                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">Committee Composition</h4>
                      <div className="bg-white p-6 rounded-lg shadow">
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-blue-700 rounded-full mr-3"></span>
                            Principal (Chairperson)
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-blue-700 rounded-full mr-3"></span>
                            Faculty Representatives (2 members)
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-blue-700 rounded-full mr-3"></span>
                            Administrative Officer
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-blue-700 rounded-full mr-3"></span>
                            Student Representatives (2 members)
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="text-center">
                      <a 
                        href="/pdfs/Minutes of code.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                      >
                        <FaDownload className="mr-3" size={20} />
                        Download Committee Minutes (PDF)
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Events & Activities */}
              {/* {activeTab === 'events' && (
                <div className="animate-fadeIn">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-xl">
                    <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
                      <FaImages className="inline mr-3" />
                      Code of Conduct Events & Activities
                    </h3>
                    
                    <p className="text-gray-700 mb-8 text-center">
                      The college regularly conducts awareness programs, workshops, and orientation sessions 
                      to educate students, faculty, and staff about the Code of Conduct.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {events.map((event, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-6">
                            <h4 className="font-bold text-gray-800 mb-2">{event.title}</h4>
                            <p className="text-sm text-gray-600">
                              <span className="font-semibold">Date:</span> {event.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              Why Code of Conduct Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-blue-700 mb-3">Professional Environment</h3>
                <p className="text-sm text-gray-700">
                  Creates a professional and respectful atmosphere conducive to learning
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-blue-700 mb-3">Ethical Standards</h3>
                <p className="text-sm text-gray-700">
                  Maintains high ethical standards expected in the legal profession
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-blue-700 mb-3">Safe Campus</h3>
                <p className="text-sm text-gray-700">
                  Ensures a safe and inclusive environment for everyone
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CodeOfConduct;