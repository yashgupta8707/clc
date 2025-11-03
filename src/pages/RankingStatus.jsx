import React from 'react';
import { FaCertificate, FaAward, FaUniversity, FaCheckCircle } from 'react-icons/fa';

const RankingStatus = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Ranking Status / Recognition / Approval</h1>
          <div className="flex justify-center items-center gap-2 text-sm">
            <a href="/" className="hover:text-yellow-300">Home</a>
            <span>/</span>
            <a href="/about" className="hover:text-yellow-300">About Us</a>
            <span>/</span>
            <span>Ranking Status</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                Recognition & Accreditation
              </h2>
              <p className="text-gray-600 text-lg">
                City Law College is proud to be recognized and accredited by prestigious educational bodies
              </p>
            </div>

            {/* Recognition Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Affiliation */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-xl text-center">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                  <FaUniversity className="text-blue-700" size={48} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Affiliation</h3>
                <p className="text-gray-700 mb-4">University of Lucknow</p>
                <div className="text-sm text-gray-600">
                  Recognized by University of Lucknow and approved by the Bar Council of India
                </div>
              </div>

              {/* Bar Council Approval */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-xl text-center">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                  <FaCheckCircle className="text-blue-700" size={48} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Approval</h3>
                <p className="text-gray-700 mb-4">Bar Council of India (BCI)</p>
                <div className="text-sm text-gray-600">
                  Approved by the Bar Council of India for offering legal education programs
                </div>
              </div>

              {/* NAAC Accreditation */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-xl text-center">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                  <FaCertificate className="text-blue-700" size={48} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Accreditation</h3>
                <p className="text-gray-700 mb-4">NAAC B++ Grade</p>
                <div className="text-sm text-gray-600">
                  Achieved B++ Grade by NAAC, ensuring quality education standards
                </div>
              </div>
            </div>

            {/* Recognition Images Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
                Recognition Certificates
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Certificate 1 */}
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <div className="h-96 flex items-center justify-center bg-gradient-to-br from-blue-100 to-gray-100">
                    <img 
                      src="https://via.placeholder.com/600x400?text=University+of+Lucknow+Affiliation+Certificate" 
                      alt="University of Lucknow Affiliation"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h4 className="font-bold text-gray-800">University of Lucknow Affiliation</h4>
                    <p className="text-sm text-gray-600">Official affiliation certificate</p>
                  </div>
                </div>

                {/* Certificate 2 */}
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <div className="h-96 flex items-center justify-center bg-gradient-to-br from-blue-100 to-gray-100">
                    <img 
                      src="https://via.placeholder.com/600x400?text=Bar+Council+of+India+Approval+Certificate" 
                      alt="Bar Council of India Approval"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h4 className="font-bold text-gray-800">Bar Council of India Approval</h4>
                    <p className="text-sm text-gray-600">BCI approval certificate</p>
                  </div>
                </div>

                {/* Certificate 3 */}
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <div className="h-96 flex items-center justify-center bg-gradient-to-br from-blue-100 to-gray-100">
                    <img 
                      src="https://via.placeholder.com/600x400?text=NAAC+Accreditation+Certificate" 
                      alt="NAAC Accreditation"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h4 className="font-bold text-gray-800">NAAC B++ Grade Accreditation</h4>
                    <p className="text-sm text-gray-600">NAAC quality assessment certificate</p>
                  </div>
                </div>

                {/* Certificate 4 */}
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <div className="h-96 flex items-center justify-center bg-gradient-to-br from-blue-100 to-gray-100">
                    <img 
                      src="https://via.placeholder.com/600x400?text=Recognition+Certificate" 
                      alt="Additional Recognition"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h4 className="font-bold text-gray-800">Additional Recognition</h4>
                    <p className="text-sm text-gray-600">Other recognitions and awards</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What This Means */}
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
                What This Means For Students
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <FaAward className="text-blue-700 mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Quality Assurance</h4>
                    <p className="text-gray-700 text-sm">
                      NAAC accreditation ensures high standards of education and infrastructure
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaAward className="text-blue-700 mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Recognized Degree</h4>
                    <p className="text-gray-700 text-sm">
                      Your LL.B. degree is recognized by University of Lucknow and BCI
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaAward className="text-blue-700 mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Practice Ready</h4>
                    <p className="text-gray-700 text-sm">
                      BCI approval ensures you can practice law in India after graduation
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaAward className="text-blue-700 mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Career Opportunities</h4>
                    <p className="text-gray-700 text-sm">
                      Accreditation opens doors to better career prospects and higher studies
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
          <h2 className="text-3xl font-bold mb-4">Study at a Recognized Institution</h2>
          <p className="text-lg mb-8">
            Join City Law College - Affiliated with University of Lucknow & Approved by BCI
          </p>
          <a 
            href="/admissions" 
            className="inline-block bg-white text-blue-800 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default RankingStatus;