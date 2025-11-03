import React from 'react';
import { FaUniversity, FaGavel, FaBook, FaLaptop } from 'react-icons/fa';

const AboutCLC = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">About City Law College</h1>
          <div className="flex justify-center items-center gap-2 text-sm">
            <a href="/" className="hover:text-yellow-300">Home</a>
            <span>/</span>
            <a href="/about" className="hover:text-yellow-300">About Us</a>
            <span>/</span>
            <span>About CLC</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              Welcome to City Law College, Jankipuram
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                City Law College, Jankipuram was established with a clear mission – to impart high-quality 
                legal education with a missionary zeal, nurturing young minds into competent and ethical legal 
                professionals. Our goal goes far beyond the mere conferral of degrees. We focus on instilling 
                a deep sense of responsibility, professionalism, and ethical commitment so that our students 
                can uphold the dignity of the legal profession in its truest sense.
              </p>

              <p>
                Affiliated with the prestigious <strong>University of Lucknow</strong> and approved by the{' '}
                <strong>Bar Council of India (BCI)</strong>, City Law College offers a wide spectrum of legal 
                programs including the 3-year LL.B., 5-year integrated LL.B. These courses are designed to 
                cater to the diverse academic and professional aspirations of law students, preparing them 
                not only for national legal practice but also to be competent in a transnational legal system.
              </p>

              <p>
                Our teaching methodology emphasizes both theoretical knowledge and practical skill-building, 
                enabling students to develop independent thinking, critical analysis, and the confidence to 
                tackle the complex legal and business challenges of today's dynamic world. We believe legal 
                education must evolve with changing corporate and societal demands, placing a strong emphasis 
                on social values, ethics, and justice alongside academic excellence.
              </p>

              <p>
                Located in the peaceful and well-connected area of Jankipuram, the college boasts modern 
                infrastructure, eco-friendly surroundings, and smart classrooms that foster a conducive 
                environment for academic and personal growth. Our digital library offers vast resources, 
                including legal databases, journals, and research tools to support continuous learning.
              </p>

              <p>
                A highlight of our institution is the state-of-the-art <strong>Moot Court Hall</strong>, 
                where students gain real-time exposure to courtroom dynamics through regular moot court 
                sessions, debates, and legal aid activities – ensuring they are well-prepared for 
                professional advocacy.
              </p>

              <p className="font-semibold text-gray-900">
                At City Law College, we are committed to shaping not just lawyers, but principled leaders 
                and socially responsible citizens ready to make meaningful contributions to the legal field 
                and society at large.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-blue-700 mb-4">
                <FaBook size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">LL.B (3 Years)</h3>
              <p className="text-gray-600">
                Bachelor of Laws - 3 year integrated program for graduates seeking to pursue a career in law.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-blue-700 mb-4">
                <FaGavel size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">LL.B (Hons) - 5 Years</h3>
              <p className="text-gray-600">
                Integrated 5-year honors program combining undergraduate education with legal studies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Teaching Methodology</h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
              Our teaching methodology emphasizes both theoretical knowledge and practical, skill-building, 
              enabling students to develop independent thinking, critical analysis, and the confidence to tackle 
              the complex legal and business challenges of today's dynamic world while upholding social values, 
              ethics, and justice alongside academic excellence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  <FaUniversity className="text-blue-700" size={40} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Modern Smart Classrooms</h3>
                <p className="text-gray-600 text-sm">
                  Digital rooms with Infrastructure, eco-friendly surroundings, and smart classrooms
                </p>
              </div>

              <div className="text-center">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  <FaLaptop className="text-blue-700" size={40} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Digital Library with Resources</h3>
                <p className="text-gray-600 text-sm">
                  Vast resources including legal databases, journals and research tools
                </p>
              </div>

              <div className="text-center">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  <FaGavel className="text-blue-700" size={40} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">State-of-art Moot Court Hall</h3>
                <p className="text-gray-600 text-sm">
                  Real-time exposure through regular sessions, debates and legal aid activities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Campus Highlights</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-700 mr-3 mt-1">✓</span>
                  <span>Modern Smart Classrooms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-3 mt-1">✓</span>
                  <span>Digital Library with Remote Legal Resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-3 mt-1">✓</span>
                  <span>State of the art Moot Court Hall</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-3 mt-1">✓</span>
                  <span>Eco-friendly Campus Environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-3 mt-1">✓</span>
                  <span>Accessible Campus Convenience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-3 mt-1">✓</span>
                  <span>Wi-Fi Equipped Campus Labs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-3 mt-1">✓</span>
                  <span>Peaceful Study Environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-3 mt-1">✓</span>
                  <span>Student-Centric Learning Spaces</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Moot Court Excellence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Moot Court Excellence</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              A highlight of our institution is the state-of-the-art Moot Court Hall, where students gain 
              real-time exposure to courtroom dynamics through regular moot court sessions, debates, and legal 
              aid activities – ensuring they are well-prepared for professional advocacy.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
            <p className="text-lg leading-relaxed">
              At City Law College, we are committed to shaping not just lawyers, but principled leaders and 
              socially responsible citizens ready to make meaningful contributions to the legal field and 
              society at large.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCLC;