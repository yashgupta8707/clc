import React from 'react';
import { FaBalanceScale, FaFileAlt, FaDownload, FaGavel } from 'react-icons/fa';

const ActsRegulations = () => {
  const documents = [
    {
      title: 'The Uttar Pradesh State Universities Act, 1973 (Act No. 10 of 1973)',
      titleHindi: 'उत्तर प्रदेश राज्य विश्वविद्यालय अधिनियम, 1973 (अधिनियम संख्या 10, 1973)',
      description: 'Latest and amended version',
      descriptionHindi: 'अद्यतित व यथा संशोधित संस्करण',
      file: '/pdfs/up-state-universities-act-1973.pdf'
    },
    {
      title: 'Ordinance - 3 Years LL.B. Course',
      titleHindi: 'अध्यादेश - 3 वर्षीय एल.एल.बी. पाठ्यक्रम',
      description: 'University ordinance for 3-year LL.B. program',
      descriptionHindi: '3 वर्षीय एल.एल.बी. कार्यक्रम के लिए विश्वविद्यालय अध्यादेश',
      file: '/pdfs/ordinance-3year-llb.pdf'
    },
    {
      title: 'Ordinance - 5 Years LL.B. Course',
      titleHindi: 'अध्यादेश - 5 वर्षीय एल.एल.बी. पाठ्यक्रम',
      description: 'University ordinance for 5-year integrated LL.B. program',
      descriptionHindi: '5 वर्षीय एकीकृत एल.एल.बी. कार्यक्रम के लिए विश्वविद्यालय अध्यादेश',
      file: '/pdfs/ordinance-5year-llb.pdf'
    }
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">
            Acts, Statuses, Regulations & Ordinance
          </h1>
          <div className="flex justify-center items-center gap-2 text-sm">
            <a href="/" className="hover:text-yellow-300">Home</a>
            <span>/</span>
            <a href="/about" className="hover:text-yellow-300">About Us</a>
            <span>/</span>
            <span>Acts & Regulations</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
              <FaBalanceScale className="text-blue-700" size={64} />
            </div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Legal Framework & Regulations
            </h2>
            <p className="text-gray-600 text-lg">
              City Law College operates under the legal framework established by the University of Lucknow 
              and the Uttar Pradesh State Universities Act. Access important acts, ordinances, and regulations 
              governing legal education in Uttar Pradesh.
            </p>
          </div>
        </div>
      </section>

      {/* Documents List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
              Download Official Documents
            </h2>

            <div className="space-y-6">
              {documents.map((doc, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                      <div className="flex items-start mb-6 lg:mb-0 flex-1">
                        <div className="bg-blue-100 p-4 rounded-lg mr-6 flex-shrink-0">
                          <FaGavel className="text-blue-700" size={40} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {doc.title}
                          </h3>
                          <p className="text-base text-gray-700 mb-3 font-hindi">
                            {doc.titleHindi}
                          </p>
                          <p className="text-sm text-gray-600 mb-1">
                            {doc.description}
                          </p>
                          <p className="text-sm text-gray-600 font-hindi">
                            {doc.descriptionHindi}
                          </p>
                        </div>
                      </div>
                      <a 
                        href={doc.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded font-semibold hover:bg-blue-800 transition-colors whitespace-nowrap"
                      >
                        <FaDownload className="mr-2" />
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
              Why These Documents Matter
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg">
                <div className="flex items-start">
                  <FaFileAlt className="text-blue-700 mr-4 mt-1 flex-shrink-0" size={32} />
                  <div>
                    <h3 className="font-bold text-gray-800 text-xl mb-3">
                      UP State Universities Act, 1973
                    </h3>
                    <p className="text-gray-700 mb-3">
                      This act governs the establishment, administration, and regulation of state universities 
                      in Uttar Pradesh, including the University of Lucknow.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="text-blue-700 mr-2">•</span>
                        University governance structure
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-700 mr-2">•</span>
                        Affiliation procedures
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-700 mr-2">•</span>
                        Academic regulations
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-lg">
                <div className="flex items-start">
                  <FaFileAlt className="text-blue-700 mr-4 mt-1 flex-shrink-0" size={32} />
                  <div>
                    <h3 className="font-bold text-gray-800 text-xl mb-3">
                      Course Ordinances
                    </h3>
                    <p className="text-gray-700 mb-3">
                      University ordinances specify the rules, regulations, and curriculum for LL.B. programs 
                      offered at affiliated colleges.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="text-blue-700 mr-2">•</span>
                        Course structure and syllabus
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-700 mr-2">•</span>
                        Examination rules
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-700 mr-2">•</span>
                        Eligibility and admission criteria
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Students Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
                For Students & Prospective Students
              </h2>
              <p className="text-gray-700 mb-6">
                Understanding these acts and ordinances helps you:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <span className="text-blue-700 mr-3 mt-1 text-xl">✓</span>
                  <span className="text-gray-700">
                    Know your rights and responsibilities as a law student
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-3 mt-1 text-xl">✓</span>
                  <span className="text-gray-700">
                    Understand the academic framework of your LL.B. program
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-3 mt-1 text-xl">✓</span>
                  <span className="text-gray-700">
                    Learn about examination and evaluation procedures
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-3 mt-1 text-xl">✓</span>
                  <span className="text-gray-700">
                    Access information about degree requirements and standards
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              Regulatory Compliance
            </h2>
            <p className="text-gray-700 mb-8">
              City Law College is fully compliant with all applicable acts, regulations, and ordinances 
              prescribed by the University of Lucknow, the Bar Council of India, and the Government of 
              Uttar Pradesh. We maintain the highest standards of legal education as mandated by these 
              governing bodies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2">University Compliance</h3>
                <p className="text-sm text-gray-600">Affiliated with University of Lucknow</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2">BCI Approved</h3>
                <p className="text-sm text-gray-600">Bar Council of India Recognition</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2">State Authorized</h3>
                <p className="text-sm text-gray-600">UP Government Approved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Regulations?</h2>
          <p className="text-lg mb-8">
            For queries regarding acts, ordinances, or regulatory compliance, contact our administration
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-800 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Administration
          </a>
        </div>
      </section>
    </div>
  );
};

export default ActsRegulations;