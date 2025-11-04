import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* College Address */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 tracking-wide">
            COLLEGE ADDRESS
          </h3>
          <div className="text-sm space-y-2">
            <p>Sector 9, Jankipuram Vistar,</p>
            <p>Khargapur Jagir, Lucknow</p>
            <p>Uttar Pradesh – 226021</p>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-500" />
            <a
              href="https://maps.app.goo.gl/f5Go1CQTocZDmqfAA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 text-sm"
            >
              View on Google Maps ↗
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 tracking-wide">
            CONTACT INFORMATION
          </h3>
          <div className="text-sm space-y-3">
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-500" /> 8177001081
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />{" "}
              <a
                href="mailto:citylawclc@gmail.com"
                className="hover:text-blue-400"
              >
                cgclko.com@gmail.com
              </a>
            </p>
          </div>

          <div className="mt-5">
            <h4 className="text-white text-sm font-semibold mb-2">
              OFFICE TIMINGS
            </h4>
            <p className="text-xs">Monday – Friday: 10:00 AM – 4:00 PM</p>
            <p className="text-xs">Saturday: 10:00 AM – 2:00 PM</p>
            <p className="text-xs">Sunday: Closed</p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            CONNECT WITH US
          </h3>
          <p className="text-sm mb-4">
            Stay connected with the latest updates, news, and events at City Law
            College.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="bg-gray-800 p-2 rounded hover:bg-blue-700 transition-colors"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded hover:bg-blue-700 transition-colors"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded hover:bg-blue-700 transition-colors"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded hover:bg-blue-700 transition-colors"
            >
              <FaYoutube size={16} />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded hover:bg-blue-700 transition-colors"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Middle Quick Links */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About College */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">
            CITY LAW COLLEGE
          </h3>
          <p className="text-sm leading-relaxed mb-4">
            City Law College, Lucknow is committed to delivering quality legal
            education with modern learning techniques, dedicated faculty, and a
            focus on professional excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">
            QUICK LINKS
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about/clc" className="hover:text-white transition">
                › About Us
              </Link>
            </li>
            <li>
              <Link to="/academics/programs" className="hover:text-white">
                › Academic Programs
              </Link>
            </li>
            <li>
              <Link to="/students/list" className="hover:text-white">
                › Student Lists
              </Link>
            </li>
            <li>
              <Link to="/campus/infrastructure" className="hover:text-white">
                › Infrastructure
              </Link>
            </li>
            <li>
              <Link to="/campus/sustainability" className="hover:text-white">
                › Sustainability
              </Link>
            </li>
            <li>
              <Link to="/naac/policies" className="hover:text-white">
                › NAAC Policies
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                › Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Important PDFs */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">
            IMPORTANT DOCUMENTS
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/pdfs/QUESTION PAPER.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                › Model Question Paper ↗
              </a>
            </li>
            <li>
              <a
                href="/pdfs/GRIVANCE REDRESSAL minutes.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                › Grievance Redressal Committee ↗
              </a>
            </li>
            <li>
              <a
                href="/pdfs/code-of-conduct-for-students.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                › Code of Conduct for Students ↗
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-4">
        <p className="text-center text-xs text-gray-500">
          © 2025 City Law College. All Rights Reserved. | Part of City Group of
          Colleges
        </p>
      </div>
    </footer>
  );
};

export default Footer;
