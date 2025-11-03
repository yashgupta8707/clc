import React from 'react';
import { FaUniversity, FaBalanceScale, FaHandsHelping, FaExternalLinkAlt } from 'react-icons/fa';

const AcademicCollaborations = () => {
  const educationalInstitutes = [
    {
      name: 'National Law University',
      location: 'Delhi',
      description: 'Academic exchange and research collaboration',
      logo: 'https://via.placeholder.com/150x150?text=NLU',
      link: '#'
    },
    {
      name: 'Lucknow University',
      location: 'Lucknow',
      description: 'Joint seminars and faculty development programs',
      logo: 'https://via.placeholder.com/150x150?text=LU',
      link: '#'
    },
    {
      name: 'NALSAR University',
      location: 'Hyderabad',
      description: 'Student exchange and research initiatives',
      logo: 'https://via.placeholder.com/150x150?text=NALSAR',
      link: '#'
    }
  ];

  const lawFirms = [
    {
      name: 'Khaitan & Co.',
      specialization: 'Corporate Law',
      description: 'Internship opportunities and guest lectures',
      logo: 'https://via.placeholder.com/150x150?text=Khaitan',
      link: '#'
    },
    {
      name: 'AZB & Partners',
      specialization: 'Commercial Litigation',
      description: 'Practical training and moot court sponsorship',
      logo: 'https://via.placeholder.com/150x150?text=AZB',
      link: '#'
    },
    {
      name: 'Trilegal',
      specialization: 'Corporate Advisory',
      description: 'Mentorship programs and career guidance',
      logo: 'https://via.placeholder.com/150x150?text=Trilegal',
      link: '#'
    }
  ];

  const ngos = [
    {
      name: 'Legal Aid Society',
      focus: 'Access to Justice',
      description: 'Legal aid clinics and community outreach',
      logo: 'https://via.placeholder.com/150x150?text=LAS',
      link: '#'
    },
    {
      name: 'Human Rights Law Network',
      focus: 'Human Rights',
      description: 'Pro bono work and advocacy training',
      logo: 'https://via.placeholder.com/150x150?text=HRLN',
      link: '#'
    },
    {
      name: 'Centre for Social Justice',
      focus: 'Social Justice',
      description: 'Research collaboration and awareness programs',
      logo: 'https://via.placeholder.com/150x150?text=CSJ',
      link: '#'
    }
  ];

  const CollaborationCard = ({ item, icon }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-700">
      <div className="flex items-start gap-4">
        <img 
          src={item.logo} 
          alt={item.name}
          className="w-20 h-20 rounded-lg object-cover flex-shrink-0 border-2 border-gray-200"
        />
        <div className="flex-grow">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h3>
              <p className="text-sm text-blue-700 font-medium mb-2">
                {item.location || item.specialization || item.focus}
              </p>
            </div>
            {icon}
          </div>
          <p className="text-gray-600 text-sm mb-4">{item.description}</p>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium text-sm transition-colors"
          >
            View MOU Details
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Academic Collaborations</h1>
          <div className="flex items-center justify-center mt-4 text-sm">
            <span className="text-blue-200">Home</span>
            <span className="mx-2">/</span>
            <span className="text-blue-200">Academics</span>
            <span className="mx-2">/</span>
            <span>Collaborations</span>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">College MOUs</h2>
          <p className="text-gray-600 leading-relaxed">
            City Law College actively collaborates with various legal, academic, and social organizations 
            to enhance student exposure to real-world practices, internships, legal aid, and research opportunities. 
            These collaborations aim to bridge the gap between theoretical knowledge and practical application, 
            preparing students for successful careers in the legal field.
          </p>
        </div>

        {/* Educational Institutes Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-700 p-3 rounded-lg">
              <FaUniversity className="text-white text-2xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Educational Institutes</h2>
              <p className="text-gray-600 text-sm">Academic partnerships for knowledge exchange</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationalInstitutes.map((institute, index) => (
              <CollaborationCard 
                key={index} 
                item={institute}
                icon={<FaUniversity className="text-blue-700 text-xl" />}
              />
            ))}
          </div>
        </div>

        {/* Law Firms Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-700 p-3 rounded-lg">
              <FaBalanceScale className="text-white text-2xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Law Firms</h2>
              <p className="text-gray-600 text-sm">Professional partnerships for practical training</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lawFirms.map((firm, index) => (
              <CollaborationCard 
                key={index} 
                item={firm}
                icon={<FaBalanceScale className="text-blue-700 text-xl" />}
              />
            ))}
          </div>
        </div>

        {/* NGOs Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-700 p-3 rounded-lg">
              <FaHandsHelping className="text-white text-2xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">NGOs & Social Organizations</h2>
              <p className="text-gray-600 text-sm">Community partnerships for social impact</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ngos.map((ngo, index) => (
              <CollaborationCard 
                key={index} 
                item={ngo}
                icon={<FaHandsHelping className="text-blue-700 text-xl" />}
              />
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Benefits of Collaborations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Practical Exposure</h3>
              <p className="text-sm text-gray-600">Real-world legal practice experience</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Internships</h3>
              <p className="text-sm text-gray-600">Quality internship opportunities</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Research</h3>
              <p className="text-sm text-gray-600">Collaborative research projects</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Networking</h3>
              <p className="text-sm text-gray-600">Professional connections</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8 bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Collaboration Opportunities</h3>
          <p className="text-gray-700">
            Interested in partnering with City Law College? We welcome collaborations that enhance our 
            academic programs and provide value to our students. Please contact our academic affairs office 
            for more information about partnership opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademicCollaborations;