import React from 'react';
import { FaBook, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const CollegeMagazine = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">College Magazine</h1>
          <div className="flex justify-center items-center gap-2 text-sm">
            <a href="/" className="hover:text-yellow-300">Home</a>
            <span>/</span>
            <a href="/about" className="hover:text-yellow-300">About Us</a>
            <span>/</span>
            <span>College Magazine</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                <FaBook className="text-blue-700" size={64} />
              </div>
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                City Law College Annual Magazine
              </h2>
              <p className="text-gray-600 text-lg">
                Explore our annual magazine featuring student achievements, faculty contributions, 
                college events, and legal insights
              </p>
            </div>

            {/* Magazine Preview Card */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-xl overflow-hidden mb-8">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center p-12">
                  <img 
                    src="https://via.placeholder.com/400x600?text=College+Magazine+Cover" 
                    alt="College Magazine Cover"
                    className="max-w-full h-auto shadow-2xl rounded"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Latest Edition</h3>
                  <p className="text-gray-600 mb-6">
                    Our college magazine is a comprehensive compilation of academic achievements, student 
                    articles, research papers, event highlights, and memorable moments from the academic year.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Student achievements and success stories</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Faculty research and publications</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Legal articles and case studies</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Campus events and activities</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Alumni contributions</p>
                    </div>
                  </div>

                  <a 
                    href="/pdfs/college-magazine.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded font-semibold hover:bg-blue-800 transition-colors"
                  >
                    <FaDownload className="mr-2" />
                    Download Magazine (PDF)
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-700 mb-2">Annual</div>
                <p className="text-gray-700">Publication Frequency</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-700 mb-2">100+</div>
                <p className="text-gray-700">Pages of Content</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-700 mb-2">Digital</div>
                <p className="text-gray-700">Available in PDF Format</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Editions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
              Previous Editions
            </h2>

            <div className="space-y-4">
              <a 
                href="/pdfs/magazine-2024.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center">
                  <FaBook className="text-blue-700 mr-4" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-800">College Magazine 2024</h3>
                    <p className="text-sm text-gray-600">Academic Year 2023-24</p>
                  </div>
                </div>
                <FaExternalLinkAlt className="text-blue-700" />
              </a>

              <a 
                href="/pdfs/magazine-2023.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center">
                  <FaBook className="text-blue-700 mr-4" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-800">College Magazine 2023</h3>
                    <p className="text-sm text-gray-600">Academic Year 2022-23</p>
                  </div>
                </div>
                <FaExternalLinkAlt className="text-blue-700" />
              </a>

              <a 
                href="/pdfs/magazine-2022.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center">
                  <FaBook className="text-blue-700 mr-4" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-800">College Magazine 2022</h3>
                    <p className="text-sm text-gray-600">Academic Year 2021-22</p>
                  </div>
                </div>
                <FaExternalLinkAlt className="text-blue-700" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Contribute to Our Magazine
            </h2>
            <p className="text-gray-600 mb-8">
              Students and faculty are encouraged to submit articles, research papers, poems, and artwork 
              for inclusion in our annual magazine. Share your legal insights and creative expressions with 
              the college community.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-blue-700 text-white px-8 py-3 rounded font-semibold hover:bg-blue-800 transition-colors"
            >
              Submit Your Contribution
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegeMagazine;