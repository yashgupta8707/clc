import React from 'react';

const FoundersMessage = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Founder's Message</h1>
          <div className="flex justify-center items-center gap-2 text-sm">
            <a href="/" className="hover:text-yellow-300">Home</a>
            <span>/</span>
            <a href="/about" className="hover:text-yellow-300">About Us</a>
            <span>/</span>
            <span>Founder's Message</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
                A Message of Excellence and Perseverance
              </h2>

              {/* Founder Info */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-700 shadow-lg">
                    <img 
                      src="https://via.placeholder.com/200x200?text=MM+Srivastava" 
                      alt="Mr. M.M. Srivastava" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-xl font-bold text-gray-800">Mr. M.M. Srivastava</h3>
                    <p className="text-blue-700 font-semibold">Founder</p>
                    <p className="text-gray-600 text-sm">City Group of Colleges</p>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      I congratulate you on stepping into the portals of City Group of Colleges, an institution 
                      that was <strong className="text-blue-800">'Built by Excellence, Backed by Experience'</strong>. 
                      The college, in its endeavor to ensure competence at all levels of education, intends to 
                      maintain high standards in terms of teaching-learning, research, faculty and infrastructure.
                    </p>

                    <p>
                      The reputation of an institution of higher learning is based on the character and performance 
                      of individuals who work and live in it, i.e., the teachers and students. There can be 
                      distractions and setbacks in the making of an institution. There can be challenges which may 
                      appear formidable. But, those who have the will, determination and perseverance shall overcome 
                      the difficulties and attain higher levels of achievement in the pursuit of excellence.
                    </p>

                    <p className="font-semibold text-gray-900">
                      This is the lesson of history which City Group of Colleges has assimilated in its work culture.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote Section */}
              <div className="bg-blue-800 text-white p-8 rounded-lg mt-8">
                <div className="flex items-start">
                  <svg className="w-12 h-12 text-blue-300 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-lg italic">
                    "Excellence is not a destination; it is a continuous journey that never ends. At City Group 
                    of Colleges, we are committed to this journey, fostering an environment where every student 
                    can achieve greatest success and we are committed to providing them with the best possible 
                    educational infrastructure and opportunities."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
              Built by Excellence, Backed by Experience
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-blue-700 text-4xl font-bold mb-3">Excellence</div>
                <p className="text-gray-600">
                  Maintaining high standards in teaching-learning, research, faculty and infrastructure
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-blue-700 text-4xl font-bold mb-3">Perseverance</div>
                <p className="text-gray-600">
                  Overcoming difficulties and attaining higher levels of achievement through determination
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-blue-700 text-4xl font-bold mb-3">Character</div>
                <p className="text-gray-600">
                  Building reputation through the character and performance of teachers and students
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the City Group of Colleges Family</h2>
          <p className="text-lg mb-8">
            Embark on a journey of excellence, integrity, and service that define the foundation.
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

export default FoundersMessage;