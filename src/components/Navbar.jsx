import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaBars,
  FaTimes,
  FaMapMarkerAlt,
  FaPhone,
  FaChevronDown,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenMobileDropdown(null);
  };

  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleMobileDropdown = (menu) => {
    setOpenMobileDropdown(openMobileDropdown === menu ? null : menu);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex gap-6 text-gray-600 font-light">
              Empowering Future Legal Professionals
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-700 transition-colors"
                >
                  <FaFacebookF size={14} />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-700 transition-colors"
                >
                  <FaTwitter size={14} />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-700 transition-colors"
                >
                  <FaInstagram size={14} />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-700 transition-colors"
                >
                  <FaLinkedinIn size={14} />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-700 transition-colors"
                >
                  <FaYoutube size={14} />
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://www.cgclko.com/pages/OnlineRegistration"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white px-4 py-1 rounded text-xs font-medium hover:bg-blue-800 transition-colors"
              >
                ADMISSIONS OPEN 2025-26
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Location */}
            <a
              href="https://maps.app.goo.gl/f5Go1CQTocZDmqfAA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-700 transition-colors"
            >
              <FaMapMarkerAlt
                className="text-gray-400 group-hover:text-blue-700"
                size={20}
              />
              <div>
                <div className="text-sm font-semibold text-gray-700 group-hover:text-blue-700">
                  OUR LOCATION
                </div>
                <div className="text-xs text-gray-500">Jankipuram, Lucknow</div>
              </div>
            </a>

            {/* Logo */}
            <div className="text-center">
              <img
                src="https://i.ibb.co/tw0CNYQH/clc.png"
                alt="City Law College"
                className="h-16 w-16 mx-auto mb-2"
              />
              <h1 className="text-2xl font-bold text-blue-800">
                CITY LAW COLLEGE
              </h1>
              <p className="text-xs text-gray-500 tracking-wider">
                BEST LAW COLLEGE IN LUCKNOW
              </p>
            </div>

            {/* Contact */}
            <div className="flex items-center gap-2">
              <FaPhone className="text-gray-400" size={20} />
              <div>
                <div className="text-sm font-semibold text-gray-700">
                  CONTACT US
                </div>
                <div className="text-xs text-gray-500">Call Us: 8127701081</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-blue-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center w-full justify-between">
              <div className="flex items-center">
                <Link
                  to="/"
                  className="text-white px-4 py-4 hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  HOME
                </Link>

                {/* About Us Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setOpenDropdown("about")}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="text-white px-4 py-4 hover:bg-blue-700 transition-colors text-sm font-medium flex items-center">
                    ABOUT US
                    <FaChevronDown className="ml-1" size={12} />
                  </button>

                  {openDropdown === "about" && (
                    <div className="absolute left-0 top-full w-72 bg-white shadow-xl rounded-b-lg z-50">
                      <Link
                        to="/about/clc"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        About CLC
                      </Link>
                      <Link
                        to="/about/founders-message"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Founder's Message
                      </Link>
                      <Link
                        to="/about/directors-message"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Director's Message
                      </Link>
                      <Link
                        to="/about/principals-message"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Principal's Message
                      </Link>
                      <Link
                        to="/about/vision-mission"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Vision & Mission / IDP
                      </Link>
                      <Link
                        to="/about/ranking-status"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Ranking Status/Recognition/Approval
                      </Link>
                      <Link
                        to="/about/college-magazine"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        College Magazine
                      </Link>
                      <Link
                        to="/about/annual-reports"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Annual Reports
                      </Link>
                      <Link
                        to="/about/acts-regulations"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm rounded-b-lg"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Acts & Regulations
                      </Link>
                    </div>
                  )}
                </div>

                {/* Administration Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setOpenDropdown("administration")}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="text-white px-4 py-4 hover:bg-blue-700 transition-colors text-sm font-medium flex items-center">
                    ADMINISTRATION
                    <FaChevronDown className="ml-1" size={12} />
                  </button>

                  {openDropdown === "administration" && (
                    <div className="absolute left-0 top-full w-72 bg-white shadow-xl rounded-b-lg z-50">
                      <Link
                        to="/administration/organogram"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Organogram
                      </Link>
                      <a
                        href="https://www.lkouniv.ac.in/en/page/chancellor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                      >
                        Chancellor ↗
                      </a>
                      <a
                        href="https://www.lkouniv.ac.in/en/page/vice-chancellor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                      >
                        Vice Chancellor ↗
                      </a>
                      <a
                        href="https://www.lkouniv.ac.in/en/page/pro-vice-chancellor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                      >
                        Pro Vice Chancellor ↗
                      </a>
                      <a
                        href="https://www.lkouniv.ac.in/en/page/registrar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                      >
                        Registrar ↗
                      </a>
                      <a
                        href="https://www.lkouniv.ac.in/en/page/finance-officer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                      >
                        Finance Officer ↗
                      </a>
                      <a
                        href="https://www.lkouniv.ac.in/en/page/controller-of-examination"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                      >
                        Controller Of Examination ↗
                      </a>
                      <Link
                        to="/administration/anti-ragging"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Anti Ragging Committee
                      </Link>
                      <Link
                        to="/administration/faculty"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Faculty
                      </Link>
                      <Link
                        to="/administration/non-teaching-staff"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Non Teaching Staff
                      </Link>
                      <Link
                        to="/administration/management-committee"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Management Committee
                      </Link>
                      <Link
                        to="/administration/code-of-conduct"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Code of Conduct
                      </Link>
                      <Link
                        to="/administration/grievance"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Grievance Redressal
                      </Link>
                      <Link
                        to="/administration/internal-complaint-committee"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Internal Complaint Committee
                      </Link>
                      <a
                        href="https://www.lkouniv.ac.in/en/page/deans-of-faculties"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm rounded-b-lg"
                      >
                        Academic Leadership Dean ↗
                      </a>
                    </div>
                  )}
                </div>

                {/* Academics Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setOpenDropdown("academics")}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="text-white px-4 py-4 hover:bg-blue-700 transition-colors text-sm font-medium flex items-center">
                    ACADEMICS
                    <FaChevronDown className="ml-1" size={12} />
                  </button>

                  {openDropdown === "academics" && (
                    <div className="absolute left-0 top-full w-80 bg-white shadow-xl rounded-b-lg z-50">
                      <Link
                        to="/academics/programs"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Details Of Academic Programs
                      </Link>
                      <Link
                        to="/academics/iqac"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Internal Quality Assurance Cell (IQAC)
                      </Link>
                      <Link
                        to="/academics/collaborations"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Academic Collaborations
                      </Link>
                      <Link
                        to="/academics/seminars-workshops"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Seminars/Workshops/Project Work
                      </Link>
                      <Link
                        to="/academics/faculty"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Faculty
                      </Link>
                      <Link
                        to="/academics/department"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Department
                      </Link>
                      <Link
                        to="/academics/examination"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Examination
                      </Link>
                      <Link
                        to="/academics/calendar"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Academic Calendar
                      </Link>
                      <Link
                        to="/academics/timetable"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Time Table
                      </Link>
                      <Link
                        to="/academics/nep"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm rounded-b-lg"
                        onClick={() => setOpenDropdown(null)}
                      >
                        NEP (National Education Policy)
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/research"
                  className="text-white px-4 py-4 hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  RESEARCH
                </Link>
                {/* Admissions Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setOpenDropdown("admissions")}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="text-white px-4 py-4 hover:bg-blue-700 transition-colors text-sm font-medium flex items-center">
                    ADMISSIONS
                    <FaChevronDown className="ml-1" size={12} />
                  </button>

                  {openDropdown === "admissions" && (
                    <div className="absolute left-0 top-full w-72 bg-white shadow-xl rounded-b-lg z-50">
                      <Link
                        to="/admissions/process"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Admission Process & Guidelines
                      </Link>
                      <Link
                        to="/admissions/refund-policy"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border-b border-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Fee Refund Policy
                      </Link>
                      <a
                      href="/pdfs/prospectus.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm rounded-b-lg"
                      onClick={toggleMenu}
                    >
                      Prospectus ↗
                    </a>
                    </div>
                  )}
                </div>

                {/* Students Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setOpenDropdown("students")}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="text-white px-4 py-4 hover:bg-blue-700 transition-colors text-sm font-medium flex items-center">
                    STUDENTS
                    <FaChevronDown className="ml-1" size={12} />
                  </button>

                  {openDropdown === "students" && (
                    <div className="absolute left-0 top-full w-80 bg-white shadow-xl rounded-b-lg z-50 overflow-y-auto max-h-[80vh]">
                      <Link
                        to="/students/list"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Student List
                      </Link>
                      <Link
                        to="/students/sports"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Sports Facilities
                      </Link>
                      <Link
                        to="/students/ncc-icc"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b"
                        onClick={() => setOpenDropdown(null)}
                      >
                        NCC / NSS / ICC
                      </Link>
                      <Link
                        to="/students/anti-ragging"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Anti-Ragging Cell
                      </Link>
                      <Link
                        to="/students/facilities-divyang"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Facilities for Differently-Abled
                      </Link>
                      <Link
                        to="/students/mentor-knowledge"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Mentor & Knowledge Center
                      </Link>
                      <Link
                        to="/students/addon-courses"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Add-On Courses
                      </Link>
                      <Link
                        to="/students/achievements"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Achievements
                      </Link>
                      <Link
                        to="/students/placement-cell"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Placement Cell
                      </Link>
                      <Link
                        to="/students/equal-opportunity"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Equal Opportunity Cell
                      </Link>
                      <Link
                        to="/students/health-sedg"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Health Facilities & SEDG
                      </Link>
                      <a
                        href="/pdfs/QUESTION PAPER.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Model Question Paper ↗
                      </a>
                      <a
                        href="/pdfs/GRIVANCE REDRESSAL minutes.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Grievance Redressal Committee ↗
                      </a>
                      <a
                        href="/pdfs/coc.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-b-lg"
                        onClick={toggleMenu}
                      >
                        Code of Conduct for Students ↗
                      </a>
                    </div>
                  )}
                </div>

                {/* Campus Dropdown */}
                <div className="flex items-center">
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown("campus")}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="text-white px-4 py-4 hover:bg-blue-700 transition-colors text-sm font-medium flex items-center">
                      CAMPUS
                      <FaChevronDown className="ml-1" size={12} />
                    </button>

                    {openDropdown === "campus" && (
                      <div className="absolute left-0 top-full w-80 bg-white shadow-xl rounded-b-lg z-50 overflow-y-auto max-h-[80vh]">
                        <Link
                          to="/campus"
                          className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b"
                          onClick={() => setOpenDropdown(null)}
                        >
                          CLC Campus
                        </Link>
                        <Link
                          to="/campus/security"
                          className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b"
                          onClick={() => setOpenDropdown(null)}
                        >
                          Campus Security
                        </Link>
                        <Link
                          to="/campus/common-rooms"
                          className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b"
                          onClick={() => setOpenDropdown(null)}
                        >
                          Common Rooms
                        </Link>
                        <Link
                          to="/campus/legal-aid-mootcourt"
                          className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b"
                          onClick={() => setOpenDropdown(null)}
                        >
                          Legal Aid Clinic & Moot Court
                        </Link>
                        <Link
                          to="/campus/infrastructure"
                          className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b"
                          onClick={() => setOpenDropdown(null)}
                        >
                          Infrastructure
                        </Link>
                        <Link
                          to="/campus/sustainability"
                          className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b"
                          onClick={() => setOpenDropdown(null)}
                        >
                          Sustainability & Green Campus
                        </Link>
                        <Link
                          to="/campus/canteen-complaints"
                          className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-b-lg"
                          onClick={() => setOpenDropdown(null)}
                        >
                          Complaint Box & Canteen
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* NAAC Dropdown */}
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown("naac")}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="text-white px-4 py-4 hover:bg-blue-700 transition-colors text-sm font-medium flex items-center">
                      NAAC
                      <FaChevronDown className="ml-1" size={12} />
                    </button>

                    {openDropdown === "naac" && (
                      <div className="absolute left-0 top-full w-80 bg-white shadow-xl rounded-b-lg z-50 overflow-y-auto max-h-[80vh]">
                        <Link
                          to="/naac/feedbacks"
                          className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b"
                          onClick={() => setOpenDropdown(null)}
                        >
                          Feedbacks (2018–23)
                        </Link>
                        <Link
                          to="/naac/policies"
                          className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b"
                          onClick={() => setOpenDropdown(null)}
                        >
                          Policies & Working Committees
                        </Link>
                        <Link
                          to="/naac/financials"
                          className="block px-4 py-3 text-gray-700 hover:bg-blue-50 border-b"
                          onClick={() => setOpenDropdown(null)}
                        >
                          Financials & IQAC
                        </Link>
                        <Link
                          to="/naac/mous-reports"
                          className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-b-lg"
                          onClick={() => setOpenDropdown(null)}
                        >
                          MOUs & Reports
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    to="/library"
                    className="text-white px-4 py-4 hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    LIBRARY
                  </Link>
                  <Link
                    to="/gallery"
                    className="text-white px-4 py-4 hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    GALLERY
                  </Link>
                  <Link
                    to="/alumni"
                    className="text-white px-4 py-4 hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    ALUMNI
                  </Link>
                  <Link
                    to="/contact"
                    className="text-white px-4 py-4 hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    CONTACT
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="lg:hidden text-white p-2">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden bg-blue-800 pb-4">
              <Link
                to="/"
                className="block text-white py-3 px-4 hover:bg-blue-700 transition-colors text-sm font-medium"
                onClick={toggleMenu}
              >
                HOME
              </Link>

              {/* Mobile About Us */}
              <div>
                <button
                  onClick={() => handleMobileDropdown("about")}
                  className="w-full text-left text-white py-3 px-4 hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-between"
                >
                  ABOUT US
                  <FaChevronDown
                    className={`transform transition-transform ${
                      openMobileDropdown === "about" ? "rotate-180" : ""
                    }`}
                    size={12}
                  />
                </button>
                {openMobileDropdown === "about" && (
                  <div className="bg-blue-900">
                    <Link
                      to="/about/clc"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      About CLC
                    </Link>
                    <Link
                      to="/about/founders-message"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Founder's Message
                    </Link>
                    <Link
                      to="/about/directors-message"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Director's Message
                    </Link>
                    <Link
                      to="/about/principals-message"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Principal's Message
                    </Link>
                    <Link
                      to="/about/vision-mission"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Vision & Mission / IDP
                    </Link>
                    <Link
                      to="/about/ranking-status"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Ranking Status
                    </Link>
                    <Link
                      to="/about/college-magazine"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      College Magazine
                    </Link>
                    <Link
                      to="/about/annual-reports"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Annual Reports
                    </Link>
                    <Link
                      to="/about/acts-regulations"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Acts & Regulations
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Administration */}
              <div>
                <button
                  onClick={() => handleMobileDropdown("administration")}
                  className="w-full text-left text-white py-3 px-4 hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-between"
                >
                  ADMINISTRATION
                  <FaChevronDown
                    className={`transform transition-transform ${
                      openMobileDropdown === "administration"
                        ? "rotate-180"
                        : ""
                    }`}
                    size={12}
                  />
                </button>
                {openMobileDropdown === "administration" && (
                  <div className="bg-blue-900">
                    <Link
                      to="/administration/organogram"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Organogram
                    </Link>
                    <a
                      href="https://www.lkouniv.ac.in/en/page/chancellor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                    >
                      Chancellor ↗
                    </a>
                    <a
                      href="https://www.lkouniv.ac.in/en/page/vice-chancellor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                    >
                      Vice Chancellor ↗
                    </a>
                    <a
                      href="https://www.lkouniv.ac.in/en/page/pro-vice-chancellor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                    >
                      Pro Vice Chancellor ↗
                    </a>
                    <a
                      href="https://www.lkouniv.ac.in/en/page/registrar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                    >
                      Registrar ↗
                    </a>
                    <a
                      href="https://www.lkouniv.ac.in/en/page/finance-officer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                    >
                      Finance Officer ↗
                    </a>
                    <a
                      href="https://www.lkouniv.ac.in/en/page/controller-of-examination"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                    >
                      Controller Of Examination ↗
                    </a>
                    <Link
                      to="/administration/anti-ragging"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Anti Ragging Committee
                    </Link>
                    <Link
                      to="/administration/faculty"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Faculty
                    </Link>
                    <Link
                      to="/administration/non-teaching-staff"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Non Teaching Staff
                    </Link>
                    <Link
                      to="/administration/management-committee"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Management Committee
                    </Link>
                    <Link
                      to="/administration/code-of-conduct"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Code of Conduct
                    </Link>
                    <Link
                      to="/administration/grievance"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Grievance
                    </Link>
                    <Link
                      to="/administration/internal-complaint-committee"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Internal Complaint Committee
                    </Link>
                    <a
                      href="https://www.lkouniv.ac.in/en/page/deans-of-faculties"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                    >
                      Academic Leadership Dean ↗
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Academics */}
              <div>
                <button
                  onClick={() => handleMobileDropdown("academics")}
                  className="w-full text-left text-white py-3 px-4 hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-between"
                >
                  ACADEMICS
                  <FaChevronDown
                    className={`transform transition-transform ${
                      openMobileDropdown === "academics" ? "rotate-180" : ""
                    }`}
                    size={12}
                  />
                </button>
                {openMobileDropdown === "academics" && (
                  <div className="bg-blue-900">
                    <Link
                      to="/academics/programs"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Academic Programs
                    </Link>
                    <Link
                      to="/academics/iqac"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      IQAC
                    </Link>
                    <Link
                      to="/academics/collaborations"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Collaborations
                    </Link>
                    <Link
                      to="/academics/seminars-workshops"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Seminars/Workshops
                    </Link>
                    <Link
                      to="/academics/faculty"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Faculty
                    </Link>
                    <Link
                      to="/academics/department"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Department
                    </Link>
                    <Link
                      to="/academics/examination"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Examination
                    </Link>
                    <Link
                      to="/academics/calendar"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Academic Calendar
                    </Link>
                    <Link
                      to="/academics/timetable"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Time Table
                    </Link>
                    <Link
                      to="/academics/nep"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      NEP
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/research"
                className="block text-white py-3 px-4 hover:bg-blue-700 transition-colors text-sm font-medium"
                onClick={toggleMenu}
              >
                RESEARCH
              </Link>
              {/* Mobile Admissions */}
              <div>
                <button
                  onClick={() => handleMobileDropdown("admissions")}
                  className="w-full text-left text-white py-3 px-4 hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-between"
                >
                  ADMISSIONS
                  <FaChevronDown
                    className={`transform transition-transform ${
                      openMobileDropdown === "admissions" ? "rotate-180" : ""
                    }`}
                    size={12}
                  />
                </button>

                {openMobileDropdown === "admissions" && (
                  <div className="bg-blue-900">
                    <Link
                      to="/admissions/process"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Admission Process & Guidelines
                    </Link>
                    <Link
                      to="/admissions/refund-policy"
                      className="block text-white py-2 px-8 hover:bg-blue-700 transition-colors text-sm"
                      onClick={toggleMenu}
                    >
                      Fee Refund Policy
                    </Link>
                    <a
                      href="/pdfs/prospectus.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm rounded-b-lg"
                      onClick={toggleMenu}
                    >
                      Prospectus ↗
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Students */}
              <div>
                <button
                  onClick={() => handleMobileDropdown("students")}
                  className="w-full text-left text-white py-3 px-4 hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-between"
                >
                  STUDENTS
                  <FaChevronDown
                    className={`transform transition-transform ${
                      openMobileDropdown === "students" ? "rotate-180" : ""
                    }`}
                    size={12}
                  />
                </button>

                {openMobileDropdown === "students" && (
                  <div className="bg-blue-900">
                    <Link
                      to="/students/list"
                      className="block text-white py-2 px-8 hover:bg-blue-700 text-sm"
                      onClick={toggleMenu}
                    >
                      Student List
                    </Link>
                    <Link
                      to="/students/sports"
                      className="block text-white py-2 px-8 hover:bg-blue-700 text-sm"
                      onClick={toggleMenu}
                    >
                      Sports Facilities
                    </Link>
                    <Link
                      to="/students/ncc-icc"
                      className="block text-white py-2 px-8 hover:bg-blue-700 text-sm"
                      onClick={toggleMenu}
                    >
                      NCC / NSS / ICC
                    </Link>
                    <Link
                      to="/students/anti-ragging"
                      className="block text-white py-2 px-8 hover:bg-blue-700 text-sm"
                      onClick={toggleMenu}
                    >
                      Anti-Ragging Cell
                    </Link>
                    <Link
                      to="/students/facilities-divyang"
                      className="block text-white py-2 px-8 hover:bg-blue-700 text-sm"
                      onClick={toggleMenu}
                    >
                      Facilities for Differently-Abled
                    </Link>
                    <Link
                      to="/students/mentor-knowledge"
                      className="block text-white py-2 px-8 hover:bg-blue-700 text-sm"
                      onClick={toggleMenu}
                    >
                      Mentor & Knowledge Center
                    </Link>
                    <Link
                      to="/students/addon-courses"
                      className="block text-white py-2 px-8 hover:bg-blue-700 text-sm"
                      onClick={toggleMenu}
                    >
                      Add-On Courses
                    </Link>
                    <Link
                      to="/students/achievements"
                      className="block text-white py-2 px-8 hover:bg-blue-700 text-sm"
                      onClick={toggleMenu}
                    >
                      Achievements
                    </Link>
                    <Link
                      to="/students/health-sedg"
                      className="block text-white py-2 px-8 hover:bg-blue-700 text-sm"
                      onClick={toggleMenu}
                    >
                      Health & SEDG
                    </Link>
                    <Link
                      to="/students/equal-opportunity"
                      className="block text-white py-2 px-8 hover:bg-blue-700 text-sm"
                      onClick={toggleMenu}
                    >
                      Equal Opportunity Cell
                    </Link>
                    <Link
                      to="/students/model-question-paper"
                      className="block text-white py-2 px-8 hover:bg-blue-700 text-sm"
                      onClick={toggleMenu}
                    >
                      Model Question Paper ↗
                    </Link>
                    <Link
                      to="/students/grievance"
                      className="block text-white py-2 px-8 hover:bg-blue-700 text-sm"
                      onClick={toggleMenu}
                    >
                      Grievance Redressal ↗
                    </Link>
                    <a
                      href="/pdfs/coc.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-b-lg"
                      onClick={toggleMenu}
                    >
                      Code of Conduct for Students ↗
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Campus */}
              <div>
                <button
                  onClick={() => handleMobileDropdown("campus")}
                  className="w-full text-left text-white py-3 px-4 hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-between"
                >
                  CAMPUS
                  <FaChevronDown
                    className={`transform transition-transform ${
                      openMobileDropdown === "campus" ? "rotate-180" : ""
                    }`}
                    size={12}
                  />
                </button>

                {openMobileDropdown === "campus" && (
                  <div className="bg-blue-900">
                    <Link
                      to="/campus"
                      className="block text-white py-2 px-8 hover:bg-blue-700 text-sm"
                      onClick={toggleMenu}
                    >
                      CLC Campus
                    </Link>
                    <Link
                      to="/campus/security"
                      className="block text-white py-2 px-8 hover:bg-blue-700 text-sm"
                      onClick={toggleMenu}
                    >
                      Campus Security
                    </Link>
                    <Link
                      to="/campus/common-rooms"
                      className="block text-white py-2 px-8 hover:bg-blue-700 text-sm"
                      onClick={toggleMenu}
                    >
                      Common Rooms
                    </Link>
                    <Link
                      to="/campus/legal-aid-mootcourt"
                      className="block text-white py-2 px-8 hover:bg-blue-700 text-sm"
                      onClick={toggleMenu}
                    >
                      Legal Aid Clinic & Moot Court
                    </Link>
                    <Link
                      to="/campus/infrastructure"
                      className="block text-white py-2 px-8 hover:bg-blue-700 text-sm"
                      onClick={toggleMenu}
                    >
                      Infrastructure
                    </Link>
                    <Link
                      to="/campus/sustainability"
                      className="block text-white py-2 px-8 hover:bg-blue-700 text-sm"
                      onClick={toggleMenu}
                    >
                      Sustainability & Green Campus
                    </Link>
                    <Link
                      to="/campus/canteen-complaints"
                      className="block text-white py-2 px-8 hover:bg-blue-700 text-sm"
                      onClick={toggleMenu}
                    >
                      Complaint Box & Canteen
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile NAAC */}
              <div>
                <button
                  onClick={() => handleMobileDropdown("naac")}
                  className="w-full text-left text-white py-3 px-4 hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-between"
                >
                  NAAC
                  <FaChevronDown
                    className={`transform transition-transform ${
                      openMobileDropdown === "naac" ? "rotate-180" : ""
                    }`}
                    size={12}
                  />
                </button>

                {openMobileDropdown === "naac" && (
                  <div className="bg-blue-900">
                    <Link
                      to="/naac/feedbacks"
                      className="block text-white py-2 px-8 hover:bg-blue-700 text-sm"
                      onClick={toggleMenu}
                    >
                      Feedbacks (2018–23)
                    </Link>
                    <Link
                      to="/naac/policies"
                      className="block text-white py-2 px-8 hover:bg-blue-700 text-sm"
                      onClick={toggleMenu}
                    >
                      Policies & Working Committees
                    </Link>
                    <Link
                      to="/naac/financials"
                      className="block text-white py-2 px-8 hover:bg-blue-700 text-sm"
                      onClick={toggleMenu}
                    >
                      Financials & IQAC
                    </Link>
                    <Link
                      to="/naac/mous-reports"
                      className="block text-white py-2 px-8 hover:bg-blue-700 text-sm"
                      onClick={toggleMenu}
                    >
                      MOUs & Reports
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/library"
                className="block text-white py-3 px-4 hover:bg-blue-700 transition-colors text-sm font-medium"
                onClick={toggleMenu}
              >
                LIBRARY
              </Link>
              <Link
                to="/gallery"
                className="block text-white py-3 px-4 hover:bg-blue-700 transition-colors text-sm font-medium"
                onClick={toggleMenu}
              >
                GALLERY
              </Link>
              <Link
                to="/alumni"
                className="block text-white py-3 px-4 hover:bg-blue-700 transition-colors text-sm font-medium"
                onClick={toggleMenu}
              >
                ALUMNI
              </Link>
              <Link
                to="/contact"
                className="block text-white py-3 px-4 hover:bg-blue-700 transition-colors text-sm font-medium"
                onClick={toggleMenu}
              >
                CONTACT
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
