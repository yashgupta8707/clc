import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Banner */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Contact Us
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Address */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Campus Address
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <FaMapMarkerAlt className="text-blue-700 text-3xl mt-1" />
            <div>
              <p className="text-gray-700">
                Sector 9, Jankipuram Vistar, Khargapur Jagir,  
                Lucknow, Uttar Pradesh 226021
              </p>
              <p className="text-gray-700">📍 Jankipuram Campus</p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Contact Information
          </h2>
          <p className="flex items-center gap-3 text-gray-700 mb-2">
            <FaPhone className="text-blue-700" /> 8177001081
          </p>
          <p className="flex items-center gap-3 text-gray-700">
            <FaEnvelope className="text-blue-700" /> 
            <a href="mailto:cgclko.com@gmail.com" className="hover:underline">
              cgclko.com@gmail.com
            </a>
          </p>
        </section>

        {/* Google Map */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Find Us on Map
          </h2>
          <iframe
            title="City Law College Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.809312899785!2d80.9471153!3d26.8322443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be29c8b23ebad%3A0x1f2ecbaf0f8e8a7b!2sCity%20Law%20College%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1709734834000!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-md border-0"
          ></iframe>
        </section>
      </div>
    </div>
  );
};

export default Contact;
