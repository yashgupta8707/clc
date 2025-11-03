import React from 'react';
import { FaUsers, FaDownload } from 'react-icons/fa';

const NonTeachingStaff = () => {
  return (
    <div className="w-full">
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Non-Teaching Staff</h1>
          <div className="flex justify-center items-center gap-2 text-sm">
            <a href="/" className="hover:text-yellow-300">Home</a>
            <span>/</span>
            <a href="/administration" className="hover:text-yellow-300">Administration</a>
            <span>/</span>
            <span>Non-Teaching Staff</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
              <FaUsers className="text-blue-700" size={64} />
            </div>
            
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              Non-Teaching Staff Members
            </h2>
            
            <p className="text-gray-600 text-lg mb-8">
              Our dedicated non-teaching staff provides essential support services that contribute to the smooth 
              functioning of the college and enhance the overall learning environment.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-xl mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Staff Categories</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-4 rounded shadow">
                  <p className="font-bold text-blue-700">Administrative Staff</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <p className="font-bold text-blue-700">Library Staff</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <p className="font-bold text-blue-700">Technical Staff</p>
                </div>
              </div>
              
              <a 
                href="/pdfs/non-teaching-staff-list.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-lg"
              >
                <FaDownload className="mr-3" size={20} />
                Download Non-Teaching Staff List (PDF)
              </a>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-3 text-xl">Support Services</h3>
              <p className="text-gray-700 text-sm">
                Our non-teaching staff plays a vital role in maintaining administrative efficiency, library services, 
                technical support, and overall campus management.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NonTeachingStaff;