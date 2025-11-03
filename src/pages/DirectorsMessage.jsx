import React from 'react';

const DirectorsMessage = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Director's Message</h1>
          <div className="flex justify-center items-center gap-2 text-sm">
            <a href="/" className="hover:text-yellow-300">Home</a>
            <span>/</span>
            <a href="/about" className="hover:text-yellow-300">About Us</a>
            <span>/</span>
            <span>Director's Message</span>
          </div>
        </div>
      </section>

      {/* Director 1 - Dr. Aishwarya Singh */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-lg shadow-xl mb-16">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-700 shadow-lg">
                    <img 
                      src="https://via.placeholder.com/200x200?text=Dr+Aishwarya" 
                      alt="Dr. Aishwarya Singh" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-xl font-bold text-gray-800">Dr. Aishwarya Singh</h3>
                    <p className="text-blue-700 font-semibold text-sm">Director</p>
                    <p className="text-gray-600 text-xs">(Public Relation, Operations)</p>
                  </div>
                </div>

                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-blue-800 mb-6">
                    Empowering Students for Tomorrow
                  </h2>
                  
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                      We are living in an age of uncertainty, change and competition. Today's environment moves 
                      fast and modern systems have to encourage flexibility, initiative and empowerment. City 
                      Group of Colleges emphasizes the all-round development of its students. It aims at producing 
                      not only good professionals, teachers, but worthy citizens of a great Country, aiding in its 
                      overall progress and development.
                    </p>

                    <p>
                      I am proud to introduce these premier institutions of learning where we endeavor to equip 
                      our students with the knowledge and skills that lead to graduate employability.
                    </p>

                    <p>
                      We are committed to delivering an outstanding learning experience to our Students such that 
                      the value add is maximized from their entry to exit. The programs are based on the state of 
                      art theory and contemporary practices to enable the students to face the challenges of the 
                      future.
                    </p>

                    <p className="font-semibold text-gray-900">
                      The is thus designed to impart knowledge and skills, both functional and integrative, to 
                      the Students to make them leaders in the upcoming years.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Focus Areas */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-100 p-6 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">All-Round Development</h4>
                  <p className="text-sm text-gray-700">
                    Producing good professionals and worthy citizens
                  </p>
                </div>
                <div className="bg-blue-100 p-6 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">Graduate Employability</h4>
                  <p className="text-sm text-gray-700">
                    Knowledge and skills that lead to career success
                  </p>
                </div>
                <div className="bg-blue-100 p-6 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">Future Ready</h4>
                  <p className="text-sm text-gray-700">
                    Contemporary practices for tomorrow's challenges
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director 2 - Amrit Srivastava */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-white to-blue-50 p-8 md:p-12 rounded-lg shadow-xl">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex-shrink-0 md:order-2">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-700 shadow-lg">
                    <img 
                      src="https://via.placeholder.com/200x200?text=Amrit+S" 
                      alt="Amrit Srivastava" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-xl font-bold text-gray-800">Amrit Srivastava</h3>
                    <p className="text-blue-700 font-semibold text-sm">Director</p>
                    <p className="text-gray-600 text-xs">(Strategy, Finance)</p>
                  </div>
                </div>

                <div className="flex-1 md:order-1">
                  <h2 className="text-3xl font-bold text-blue-800 mb-6">
                    A Platform for Growth and Excellence
                  </h2>
                  
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-lg font-semibold text-gray-900">
                      Welcome to the City Group of Colleges.
                    </p>

                    <p>
                      Whether you are a prospective student, parent, recruiter colleague or alumnus or interested 
                      to know more about City Group. We are keen to provide information on all that we offer. You 
                      can find information about our post-graduate and fellow programmes, placements and research, 
                      events, news and more on this page.
                    </p>

                    <p>
                      Management education is a long, steep and rewarding climb. We believe that the journey begins 
                      with an individual's confidence and self-awareness but to be on top of the game, you need a 
                      team that works as hard as you do.
                    </p>

                    <p>
                      At City College, we believe in giving every student a chance to achieve their own potential.
                    </p>

                    <p className="font-semibold text-gray-900 text-lg">
                      I welcome you to a platform that nurtures, challenges, inspire and transforms you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Pillars */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-blue-700">
                  <h4 className="font-bold text-blue-800 mb-2">Nurture</h4>
                  <p className="text-sm text-gray-700">
                    Supporting growth and development
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-blue-700">
                  <h4 className="font-bold text-blue-800 mb-2">Challenge</h4>
                  <p className="text-sm text-gray-700">
                    Pushing boundaries and limits
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-blue-700">
                  <h4 className="font-bold text-blue-800 mb-2">Inspire</h4>
                  <p className="text-sm text-gray-700">
                    Motivating excellence and innovation
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-blue-700">
                  <h4 className="font-bold text-blue-800 mb-2">Transform</h4>
                  <p className="text-sm text-gray-700">
                    Creating future leaders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Vision */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Shared Vision</h2>
            <p className="text-lg leading-relaxed mb-8">
              Together, our directors are committed to providing a learning environment that encourages 
              flexibility, initiative, and empowerment while nurturing, challenging, inspiring, and 
              transforming students into leaders of tomorrow.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-700 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Strategic Excellence</h3>
                <p className="text-sm">
                  Long-term vision combined with operational excellence for sustainable growth
                </p>
              </div>
              <div className="bg-blue-700 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Student-Centric Approach</h3>
                <p className="text-sm">
                  Every decision focused on maximizing student success and employability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join us at City Group of Colleges and unlock your potential
          </p>
          <a 
            href="/admissions" 
            className="inline-block bg-blue-700 text-white px-8 py-3 rounded font-semibold hover:bg-blue-800 transition-colors"
          >
            Apply for Admission
          </a>
        </div>
      </section>
    </div>
  );
};

export default DirectorsMessage;