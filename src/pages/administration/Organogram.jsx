import React from 'react';
import { FaSitemap, FaDownload } from 'react-icons/fa';

const Organogram = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Organogram</h1>
          <div className="flex justify-center items-center gap-2 text-sm">
            <a href="/" className="hover:text-yellow-300">Home</a>
            <span>/</span>
            <a href="/administration" className="hover:text-yellow-300">Administration</a>
            <span>/</span>
            <span>Organogram</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
              <FaSitemap className="text-blue-700" size={64} />
            </div>
            
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              City Law College Organizational Structure
            </h2>
            
            <p className="text-gray-600 text-lg mb-8">
              View the complete organizational structure of City Law College showing the hierarchy 
              and reporting relationships within the institution.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-xl mb-8">
              <div className="mb-6">
                <img 
                  src="https://via.placeholder.com/800x600?text=Organogram+Preview" 
                  alt="Organogram Preview"
                  className="w-full rounded shadow-lg"
                />
              </div>
              
              <a 
                href="/pdfs/Graphic1.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-lg"
              >
                <FaDownload className="mr-3" size={20} />
                Download Organogram (PDF)
              </a>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-3 text-xl">Organizational Hierarchy</h3>
              <p className="text-gray-700 text-sm">
                The organogram displays the complete administrative structure including the Management 
                Committee, Academic Leadership, Faculty, Non-Teaching Staff, and various committees that 
                govern the institution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Organogram;