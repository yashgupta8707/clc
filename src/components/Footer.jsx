import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* College Address */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 tracking-wide">COLLEGE ADDRESS</h3>
            <div className="text-sm leading-relaxed">
              <p>Sector 7, Jankipuram Vistar</p>
              <p>Near Lucknow-Hardoi, Lucknow</p>
              <p>Uttar Pradesh - 226021</p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 tracking-wide">CONTACT INFORMATION</h3>
            <div className="text-sm leading-relaxed">
              <p>Phone: 8127701081</p>
              <p>Email: citylawclc@gmail.com</p>
            </div>
          </div>

          {/* Office Timings */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 tracking-wide">OFFICE TIMINGS</h3>
            <div className="text-sm leading-relaxed">
              <p>Monday - Friday: 10:00 AM - 4:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">CITY LAW COLLEGE</h3>
              <p className="text-sm leading-relaxed mb-4">
                Leading law college in Lucknow providing quality legal education and practical training to aspiring lawyers.
              </p>
              <div>
                <p className="text-sm font-semibold mb-2">Office Hours:</p>
                <p className="text-xs">Monday - Friday: 10:00 - 16:00</p>
                <p className="text-xs">Saturday: 10:00 - 14:00</p>
                <p className="text-xs">Sunday: Closed</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">QUICK LINKS</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">› About Us</Link>
                </li>
                <li>
                  <Link to="/faculty" className="hover:text-white transition-colors">› Faculty</Link>
                </li>
                <li>
                  <Link to="/campus-facilities" className="hover:text-white transition-colors">› Campus Facilities</Link>
                </li>
                <li>
                  <Link to="/bar-council" className="hover:text-white transition-colors">› The Council Of India</Link>
                </li>
                <li>
                  <Link to="/llc" className="hover:text-white transition-colors">› LLC</Link>
                </li>
                <li>
                  <Link to="/programs" className="hover:text-white transition-colors">› Programs Offered</Link>
                </li>
                <li>
                  <Link to="/admissions" className="hover:text-white transition-colors">› Admissions</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">› Contact Us</Link>
                </li>
                <li>
                  <Link to="/lucknow-university" className="hover:text-white transition-colors">› Lucknow University</Link>
                </li>
                <li>
                  <Link to="/naac" className="hover:text-white transition-colors">› NAAC</Link>
                </li>
              </ul>
            </div>

            {/* Connect With Us */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">CONNECT WITH US</h3>
              <p className="text-sm mb-4">
                Stay updated with latest news, events, and admission notifications from City Law College.
              </p>
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">FOLLOW US</p>
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
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-xs text-gray-500">
            © 2025 City Law College. All Rights Reserved. | Part Of City Group Of Colleges
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;