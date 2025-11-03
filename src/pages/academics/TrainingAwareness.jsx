import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const TrainingAwareness = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const trainingImages = [
    {
      title: 'Women Safety Awareness Campaign',
      date: 'March 2024',
      attendees: '250+ Students',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800'
    },
    {
      title: 'Legal Aid Camp',
      date: 'February 2024',
      attendees: '300+ Beneficiaries',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800'
    },
    {
      title: 'Cyber Security Training',
      date: 'January 2024',
      attendees: '180+ Participants',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800'
    },
    {
      title: 'Environmental Awareness Drive',
      date: 'December 2023',
      attendees: '400+ Participants',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800'
    },
    {
      title: 'Consumer Rights Workshop',
      date: 'November 2023',
      attendees: '150+ Citizens',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800'
    },
    {
      title: 'Anti-Drug Campaign',
      date: 'October 2023',
      attendees: '320+ Youth',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800'
    },
    {
      title: 'Digital Literacy Program',
      date: 'September 2023',
      attendees: '200+ Seniors',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800'
    },
    {
      title: 'First Aid Training',
      date: 'August 2023',
      attendees: '120+ Students',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800'
    },
    {
      title: 'Traffic Rules Awareness',
      date: 'July 2023',
      attendees: '280+ Drivers',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Training & Awareness Programs</h1>
          <div className="flex items-center justify-center mt-4 text-sm">
            <span className="text-purple-200">Home</span>
            <span className="mx-2">/</span>
            <span className="text-purple-200">Academics</span>
            <span className="mx-2">/</span>
            <span className="text-purple-200">Seminars & Workshops</span>
            <span className="mx-2">/</span>
            <span>Training Programs</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Social Responsibility Through Education</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              City Law College believes in creating socially aware legal professionals. Our training and 
              awareness programs address contemporary social issues, legal rights, and public welfare, 
              bridging the gap between legal education and community service.
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-purple-700 mb-2">15+</div>
              <p className="text-gray-600 text-sm">Programs Organized</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-purple-700 mb-2">2000+</div>
              <p className="text-gray-600 text-sm">People Reached</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-purple-700 mb-2">10+</div>
              <p className="text-gray-600 text-sm">Partner NGOs</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-purple-700 mb-2">500+</div>
              <p className="text-gray-600 text-sm">Student Volunteers</p>
            </div>
          </div>

          {/* Program Gallery */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Program Gallery</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingImages.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="aspect-w-16 aspect-h-12">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-200 mb-1">{item.attendees}</p>
                      <p className="text-xs text-gray-300">{item.date}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-purple-700 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Program Categories */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Program Categories</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-4xl mb-3">🛡️</div>
                <h4 className="font-semibold text-gray-800 mb-2">Safety & Security</h4>
                <p className="text-sm text-gray-600">
                  Women safety, cybersecurity, personal protection awareness
                </p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-4xl mb-3">⚖️</div>
                <h4 className="font-semibold text-gray-800 mb-2">Legal Rights</h4>
                <p className="text-sm text-gray-600">
                  Consumer rights, labor laws, fundamental rights education
                </p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-4xl mb-3">🌱</div>
                <h4 className="font-semibold text-gray-800 mb-2">Social Welfare</h4>
                <p className="text-sm text-gray-600">
                  Health, environment, anti-drug campaigns
                </p>
              </div>
            </div>
          </div>

          {/* Student Involvement */}
          <div className="bg-gradient-to-r from-purple-700 to-purple-900 rounded-lg shadow-md p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Student Involvement</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Volunteer Opportunities</h4>
                  <p className="text-purple-100 text-sm">
                    Active participation in organizing and conducting awareness programs
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Community Outreach</h4>
                  <p className="text-purple-100 text-sm">
                    Direct interaction with community members and beneficiaries
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Skill Development</h4>
                  <p className="text-purple-100 text-sm">
                    Leadership, communication, and organizational skills enhancement
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Recognition</h4>
                  <p className="text-purple-100 text-sm">
                    Certificates and appreciation for active volunteers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 bg-purple-50 border-l-4 border-purple-700 p-6 rounded-r-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Get Involved</h3>
            <p className="text-gray-700">
              Interested in participating in our training and awareness programs? Whether you're a student 
              volunteer, NGO partner, or community organization, we welcome your involvement. Contact our 
              social outreach cell for more information.
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <FaTimes size={32} />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full rounded-lg"
            />
            <div className="bg-white p-6 rounded-b-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600 mb-1"><span className="font-semibold">Attendees:</span> {selectedImage.attendees}</p>
              <p className="text-gray-600"><span className="font-semibold">Date:</span> {selectedImage.date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingAwareness;