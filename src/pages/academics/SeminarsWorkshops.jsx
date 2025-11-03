import React from 'react';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaGraduationCap, FaBullhorn } from 'react-icons/fa';

const SeminarsWorkshops = () => {
  const categories = [
    {
      title: 'Seminars & Workshops',
      description: 'Professional development seminars and interactive workshops conducted for students and faculty',
      icon: <FaChalkboardTeacher className="text-4xl" />,
      link: '/academics/seminars-workshops/seminars',
      count: '25+ Events',
      color: 'blue'
    },
    {
      title: 'Faculty Development Programs (FDP)',
      description: 'Continuous professional development initiatives for faculty members to enhance teaching skills',
      icon: <FaGraduationCap className="text-4xl" />,
      link: '/academics/seminars-workshops/fdp',
      count: '10+ Programs',
      color: 'green'
    },
    {
      title: 'Training & Awareness Programs',
      description: 'Specialized training sessions and awareness campaigns on contemporary legal and social issues',
      icon: <FaBullhorn className="text-4xl" />,
      link: '/academics/seminars-workshops/training',
      count: '15+ Sessions',
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Seminars, Workshops & Training Programs</h1>
          <div className="flex items-center justify-center mt-4 text-sm">
            <span className="text-blue-200">Home</span>
            <span className="mx-2">/</span>
            <span className="text-blue-200">Academics</span>
            <span className="mx-2">/</span>
            <span>Seminars & Workshops</span>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Continuous Learning & Development</h2>
          <p className="text-gray-600 leading-relaxed">
            City Law College is committed to providing holistic education beyond the classroom. We regularly 
            organize seminars, workshops, faculty development programs, and training sessions to ensure that 
            both students and faculty stay updated with the latest developments in law, technology, and pedagogy.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className={`bg-${category.color}-700 p-8 text-white text-center`}>
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <span className="text-sm font-semibold uppercase tracking-wider">{category.count}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-blue-700 font-medium text-sm group-hover:gap-3 transition-all">
                  View Gallery
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">50+</div>
              <p className="text-gray-600 text-sm">Total Events Conducted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">2000+</div>
              <p className="text-gray-600 text-sm">Students Benefited</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-700 mb-2">100+</div>
              <p className="text-gray-600 text-sm">Expert Speakers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-700 mb-2">30+</div>
              <p className="text-gray-600 text-sm">Industry Partners</p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg shadow-md p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Our Programs Stand Out</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-xl">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Expert Faculty & Guest Speakers</h3>
                <p className="text-blue-100 text-sm">Renowned legal professionals, judges, and industry experts</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-xl">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Practical Approach</h3>
                <p className="text-blue-100 text-sm">Interactive sessions with real-world case studies and examples</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-xl">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Certification</h3>
                <p className="text-blue-100 text-sm">Recognized certificates for all participants</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-xl">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Networking Opportunities</h3>
                <p className="text-blue-100 text-sm">Connect with peers, faculty, and industry professionals</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8 bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Want to Organize an Event?</h3>
          <p className="text-gray-700">
            We welcome proposals for seminars, workshops, and training programs. If you're interested in 
            conducting a session or have suggestions for topics, please contact our academic coordination office.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeminarsWorkshops;