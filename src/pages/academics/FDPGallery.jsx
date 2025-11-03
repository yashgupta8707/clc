import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const FDPGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const fdpImages = [
    {
      title: 'Teaching Methodology Workshop',
      date: 'March 2024',
      participants: '35 Faculty Members',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800'
    },
    {
      title: 'Technology in Legal Education',
      date: 'February 2024',
      participants: '42 Faculty Members',
      image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800'
    },
    {
      title: 'Research Methodology FDP',
      date: 'January 2024',
      participants: '28 Faculty Members',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800'
    },
    {
      title: 'E-Learning Tools Training',
      date: 'December 2023',
      participants: '38 Faculty Members',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800'
    },
    {
      title: 'Assessment & Evaluation',
      date: 'November 2023',
      participants: '30 Faculty Members',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800'
    },
    {
      title: 'Curriculum Design Workshop',
      date: 'October 2023',
      participants: '33 Faculty Members',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Faculty Development Programs (FDP)</h1>
          <div className="flex items-center justify-center mt-4 text-sm">
            <span className="text-green-200">Home</span>
            <span className="mx-2">/</span>
            <span className="text-green-200">Academics</span>
            <span className="mx-2">/</span>
            <span className="text-green-200">Seminars & Workshops</span>
            <span className="mx-2">/</span>
            <span>FDP</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Empowering Our Faculty</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our Faculty Development Programs are designed to enhance teaching skills, update pedagogical 
              knowledge, and foster continuous professional growth. These programs cover various aspects of 
              modern education including technology integration, research methodology, and innovative teaching techniques.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">10+</div>
              <p className="text-gray-600">FDPs Conducted</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">200+</div>
              <p className="text-gray-600">Participant Hours</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">50+</div>
              <p className="text-gray-600">Faculty Benefited</p>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">FDP Gallery</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fdpImages.map((item, index) => (
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
                      <p className="text-sm text-gray-200 mb-1">{item.participants}</p>
                      <p className="text-xs text-gray-300">{item.date}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-green-700 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Areas */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Key Focus Areas</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-700 font-bold">1</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Pedagogical Innovation</h4>
                  <p className="text-gray-600 text-sm">Modern teaching methods and student-centric approaches</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-700 font-bold">2</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Technology Integration</h4>
                  <p className="text-gray-600 text-sm">E-learning tools and digital classroom management</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-700 font-bold">3</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Research Excellence</h4>
                  <p className="text-gray-600 text-sm">Research methodology and publication strategies</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-700 font-bold">4</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Professional Growth</h4>
                  <p className="text-gray-600 text-sm">Leadership skills and career advancement</p>
                </div>
              </div>
            </div>
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
              <p className="text-gray-600 mb-1"><span className="font-semibold">Participants:</span> {selectedImage.participants}</p>
              <p className="text-gray-600"><span className="font-semibold">Date:</span> {selectedImage.date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FDPGallery;