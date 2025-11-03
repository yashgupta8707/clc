import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const SeminarsGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const seminarImages = [
    {
      title: 'Constitutional Law Seminar',
      date: 'March 2024',
      speaker: 'Hon. Justice Sharma',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800'
    },
    {
      title: 'Corporate Law Workshop',
      date: 'February 2024',
      speaker: 'Adv. Rajesh Kumar',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800'
    },
    {
      title: 'Cyber Law & Data Privacy',
      date: 'January 2024',
      speaker: 'Dr. Priya Mehta',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800'
    },
    {
      title: 'Moot Court Competition',
      date: 'December 2023',
      speaker: 'Multiple Judges',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800'
    },
    {
      title: 'Environmental Law Seminar',
      date: 'November 2023',
      speaker: 'Prof. Ananya Singh',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800'
    },
    {
      title: 'IPR Workshop',
      date: 'October 2023',
      speaker: 'Adv. Vikram Patel',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800'
    },
    {
      title: 'Criminal Law Analysis',
      date: 'September 2023',
      speaker: 'Retd. Judge K.S. Verma',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800'
    },
    {
      title: 'Legal Writing Skills',
      date: 'August 2023',
      speaker: 'Dr. Meera Kapoor',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800'
    },
    {
      title: 'International Law Discourse',
      date: 'July 2023',
      speaker: 'Prof. Rahul Khanna',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Seminars & Workshops</h1>
          <div className="flex items-center justify-center mt-4 text-sm">
            <span className="text-blue-200">Home</span>
            <span className="mx-2">/</span>
            <span className="text-blue-200">Academics</span>
            <span className="mx-2">/</span>
            <span className="text-blue-200">Seminars & Workshops</span>
            <span className="mx-2">/</span>
            <span>Seminars</span>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Event Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of seminars and workshops conducted throughout the year, 
              featuring renowned speakers and engaging discussions on various legal topics.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seminarImages.map((item, index) => (
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
                    <p className="text-sm text-gray-200 mb-1">{item.speaker}</p>
                    <p className="text-xs text-gray-300">{item.date}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-blue-700 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  View
                </div>
              </div>
            ))}
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
              <p className="text-gray-600 mb-1"><span className="font-semibold">Speaker:</span> {selectedImage.speaker}</p>
              <p className="text-gray-600"><span className="font-semibold">Date:</span> {selectedImage.date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeminarsGallery;