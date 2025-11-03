import React from 'react';
import { FaEye, FaBullseye, FaChartLine, FaUsers, FaBuilding, FaHandsHelping } from 'react-icons/fa';

const VisionMission = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Vision & Mission / IDP</h1>
          <div className="flex justify-center items-center gap-2 text-sm">
            <a href="/" className="hover:text-yellow-300">Home</a>
            <span>/</span>
            <a href="/about" className="hover:text-yellow-300">About Us</a>
            <span>/</span>
            <span>Vision & Mission</span>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                <FaEye className="text-blue-700" size={48} />
              </div>
              <h2 className="text-4xl font-bold text-blue-800 mb-6">Vision</h2>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-lg shadow-xl">
              <p className="text-xl text-gray-700 leading-relaxed text-center mb-6">
                City Law College imparts deep knowledge to lawyers, advocate & Leaders of the future who are 
                ready for the challenges of an ever changing profession.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-center font-semibold">
                Our Commitment is to be recognized for excellence in the professional higher education relevant 
                to the society needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                <FaBullseye className="text-blue-700" size={48} />
              </div>
              <h2 className="text-4xl font-bold text-blue-800 mb-6">Mission</h2>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                To achieve this vision, the college strives to impart comprehensive education in the legal field 
                by creating an environment in which every student discovers and realizes his potential to the 
                fullest extent.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 mt-1">
                    <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To enable students to grow morally intellectually fit through concerted and conscious efforts 
                    in a vibrant learning environment.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 mt-1">
                    <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To prepare lawyers of tomorrow for handling contemporary legal issues.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 mt-1">
                    <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To increase legal awareness in the community and further the cause of social justice by 
                    providing legal aid to the sections of the society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Development Plan (IDP) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
              Institutional Development Plan (IDP)
            </h2>

            {/* A. Academic Excellence */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-blue-700 p-3 rounded-full mr-4">
                  <FaChartLine className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">A. Academic Excellence</h3>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-blue-800 mb-3">Curriculum Enhancement</h4>
                    <p className="text-gray-700 text-sm">
                      Regularly revise and upgrade LL.B. curricula in consultation with industry experts and 
                      academic bodies to align with global legal trends.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-blue-800 mb-3">Faculty Development</h4>
                    <p className="text-gray-700 text-sm">
                      Organize regular FDPs, seminars, and workshops to enhance faculty teaching and research 
                      capabilities.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-blue-800 mb-3">Research Promotion</h4>
                    <p className="text-gray-700 text-sm">
                      Establish a Research & Publication Cell to encourage scholarly writing, publications, and 
                      participation in national/international conferences.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-blue-800 mb-3">Interdisciplinary Learning</h4>
                    <p className="text-gray-700 text-sm">
                      Introduce certificate courses in cyber law, IPR, environmental law, arbitration, and 
                      international trade law.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* B. Student Development */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-blue-700 p-3 rounded-full mr-4">
                  <FaUsers className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">B. Student Development</h3>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-blue-800 mb-3">Skill-Based Learning</h4>
                    <p className="text-gray-700 text-sm">
                      Expand practical training through regular moot courts, legal aid camps, mock trials, debates, 
                      internships, and client counseling competitions.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-blue-800 mb-3">Career Development Cell</h4>
                    <p className="text-gray-700 text-sm">
                      Establish a Placement & Internship Cell to connect students with top law firms, corporates, 
                      NGOs, and government institutions.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-blue-800 mb-3">Mentorship Programs</h4>
                    <p className="text-gray-700 text-sm">
                      Initiate faculty-student mentorship for academic guidance, personal growth, and career 
                      planning.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-blue-800 mb-3">Alumni Engagement</h4>
                    <p className="text-gray-700 text-sm">
                      Create an Alumni Association to support students through mentorship, internships, guest 
                      lectures, and fundraising.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* C. Infrastructure & Facilities */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-blue-700 p-3 rounded-full mr-4">
                  <FaBuilding className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">C. Infrastructure & Facilities</h3>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-blue-800 mb-3">Smart Classrooms</h4>
                    <p className="text-gray-700 text-sm">
                      Upgrade classrooms with smart boards, projectors, and Wi-Fi connectivity.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-blue-800 mb-3">Library Expansion</h4>
                    <p className="text-gray-700 text-sm">
                      Enrich the Digital Library with access to legal databases like SCC Online, Manupatra, 
                      JSTOR, and HeinOnline.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-blue-800 mb-3">Moot Court Complex</h4>
                    <p className="text-gray-700 text-sm">
                      Enhance the existing moot court with upgraded facilities for simulated court proceedings.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-blue-800 mb-3">Green Campus Initiative</h4>
                    <p className="text-gray-700 text-sm">
                      Implement energy-efficient systems, rainwater harvesting, and waste management.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* D. Governance and Administration */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-blue-700 p-3 rounded-full mr-4">
                  <FaBullseye className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">D. Governance and Administration</h3>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-blue-800 mb-3">Institutional Autonomy</h4>
                    <p className="text-gray-700 text-sm">
                      Work towards greater academic and financial autonomy in line with UGC and University of 
                      Lucknow norms.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-blue-800 mb-3">Quality Assurance</h4>
                    <p className="text-gray-700 text-sm">
                      Establish an Internal Quality Assurance Cell (IQAC) to monitor academic standards and 
                      administrative efficiency.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-blue-800 mb-3">NAAC Accreditation</h4>
                    <p className="text-gray-700 text-sm">
                      Prepare for NAAC accreditation to benchmark quality and attract better funding and 
                      recognition.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* E. Community Engagement & Social Responsibility */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-blue-700 p-3 rounded-full mr-4">
                  <FaHandsHelping className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  E. Community Engagement & Social Responsibility
                </h3>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-blue-800 mb-3">Legal Aid Clinic</h4>
                    <p className="text-gray-700 text-sm">
                      Strengthen legal outreach by organizing regular legal literacy drives, free legal 
                      counseling camps, and collaboration with local bar associations.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-blue-800 mb-3">Social Justice Programs</h4>
                    <p className="text-gray-700 text-sm">
                      Partner with NGOs and government bodies on issues like human rights, gender justice, and 
                      environmental protection.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-blue-800 mb-3">Rural Engagement</h4>
                    <p className="text-gray-700 text-sm">
                      Launch rural legal awareness programs in nearby villages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey Towards Excellence</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Be part of an institution committed to excellence in professional higher education relevant to 
            society's needs
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

export default VisionMission;