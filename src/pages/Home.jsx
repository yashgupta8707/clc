import React, { useState, useEffect } from 'react';
import {
  FaGraduationCap,
  FaBook,
  FaUsers,
  FaTrophy,
  FaUniversity,
  FaCertificate,
  FaGavel,
  FaAward,
  FaTimes,
  FaWhatsapp,
} from 'react-icons/fa';

const Home = () => {
  // ====== Form State ======
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
    website: '' // honeypot (should stay empty)
  });

  const [status, setStatus] = useState({
    loading: false,
    ok: null,     // true | false | null
    error: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.website) {
      // bot filled hidden field; silently succeed
      setStatus({ loading: false, ok: true, error: '' });
      return;
    }

    setStatus({ loading: true, ok: null, error: '' });
    try {
      const res = await fetch('/enquiry.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
          message: formData.message
        })
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Failed to send enquiry');
      }

      setStatus({ loading: false, ok: true, error: '' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: '',
        website: ''
      });
    } catch (err) {
      setStatus({ loading: false, ok: false, error: err.message || 'Something went wrong' });
    }
  };

  // ====== Hero Carousel ======
  const heroImages = [
    "https://i.ibb.co/pjWfSV0D/14.jpg",
    "https://i.ibb.co/NnWHXZtc/11.jpg",
    "https://i.ibb.co/MDyf8Zjb/CLC.png",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, [heroImages.length]);

  // ====== Admissions Popup (open instantly on page load) ======
  const [showAdmissionsPopup, setShowAdmissionsPopup] = useState(true);
  const closeAdmissionsPopup = () => setShowAdmissionsPopup(false);

  // ====== Demo Data ======
  const notices = [
    { title: 'Admission Notice for LL.B (3 Years) & LL.B (Hons) 2025-26', date: 'April 15, 2025' },
    { title: 'Revised Academic Calendar for Academic Year 2025-26', date: 'April 12, 2025' },
    { title: 'Guidelines for Upcoming VI Practical Examinations', date: 'April 10, 2025' },
    { title: 'Fee Structure and Payment Schedule 2025-26', date: 'April 8, 2025' },
    { title: 'Notice Regarding Library Timings During Examination Period', date: 'April 5, 2025' }
  ];

  const announcements = [
    { title: "NAAC Accreditation: College achieves B++ grade", date: "April 10, 2025" },
    { title: "Moot Court Competition - Registration extended till 30 Apr", date: "April 8, 2025" },
    { title: "Guest Lecture by Hon'ble Justice on Constitutional Law", date: "April 5, 2025" },
    { title: "Legal Aid Camp at Jankipuram - Students Participation Required", date: "April 3, 2025" },
    { title: "Scholarship Application Deadline - May 5, 2025", date: "April 1, 2025" }
  ];

  const events = [
    { title: 'Inter College Moot Court Competition 2025', date: 'May 2-4, 2025' },
    { title: 'Alumni Meet & Networking Session', date: 'May 8, 2025' },
    { title: 'Campus Placement Drive - Multiple Law Firms', date: 'May 15, 2025' },
    { title: 'Workshop on Corporate Law & Compliance', date: 'May 18, 2025' },
    { title: 'Constitutional Debate Competition - Final Round', date: 'May 22, 2025' }
  ];

  return (
    <div className="w-full">
      {/* ====== Hero Section (with 3-image carousel behind content) ====== */}
      <section className="relative text-white">
        {/* Carousel images */}
        <div className="absolute inset-0 overflow-hidden">
          {heroImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Campus ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
                currentSlide === idx ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          {/* Dark overlay for legibility */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero content + form */}
        <div className="relative z-10 py-28 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left text */}
              <div>
                <span className="inline-block text-xs tracking-widest bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-4">
                  NAAC B++ | Bar Council of India | Affiliated to University of Lucknow
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow">
                  City Law College
                </h1>
                <p className="text-xl md:text-2xl mb-3 font-light">
                  Shaping Tomorrow&apos;s Legal Leaders
                </p>
                <p className="text-base md:text-lg opacity-90">
                  A premier institution committed to excellence in legal education,
                  research, and community service.
                </p>

                {/* Simple slide indicators (optional) */}
                <div className="flex gap-2 mt-6">
                  {heroImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-2 w-6 rounded-full transition-all ${
                        currentSlide === i ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Right enquiry form */}
              <div className="bg-white/95 backdrop-blur rounded-lg shadow-2xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Enquire Now</h3>
                <form onSubmit={handleSubmit}>
                  {/* Honeypot (hidden) */}
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 mb-4 border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-blue-700"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 mb-4 border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-blue-700"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 mb-4 border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-blue-700"
                    required
                  />
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 mb-4 border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-blue-700"
                    required
                  >
                    <option value="">Select Course *</option>
                    <option value="llb-3">LL.B (3 Years)</option>
                    <option value="llb-5">LL.B (Hons) - 5 Years</option>
                    <option value="llm">LL.M</option>
                  </select>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 mb-4 border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-blue-700"
                  ></textarea>

                  <button
                    type="submit"
                    disabled={status.loading}
                    className="w-full bg-blue-700 text-white py-3 rounded font-semibold hover:bg-blue-800 transition-colors disabled:opacity-60"
                  >
                    {status.loading ? 'Sending…' : 'SUBMIT ENQUIRY'}
                  </button>

                  {/* Status messages */}
                  {status.ok && (
                    <p className="mt-3 text-sm text-emerald-700">
                      Thank you! Your enquiry has been sent. We’ll contact you soon.
                    </p>
                  )}
                  {status.ok === false && (
                    <p className="mt-3 text-sm text-red-600">
                      Error: {status.error}
                    </p>
                  )}

                  {/* Quick link to online registration */}
                  <a
                    href="https://www.cgclko.com/pages/OnlineRegistration"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-sm text-blue-700 hover:underline"
                  >
                    Or go directly to Online Registration ↗
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Admission Banner ====== */}
      <section className="bg-yellow-100 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-semibold text-gray-800">
            ADMISSION OPEN 2025-26: Applications for LL.B. (3 YEARS) and LL.B. (HONS) are now being accepted. | NAAC ACCREDITED: City Law College is accredited with B++ Grade
          </p>
        </div>
      </section>

      {/* ====== Info Cards Section ====== */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Notice Board */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <FaBook className="text-blue-700 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Notice Board & Circulars</h3>
              </div>
              <div className="space-y-4">
                {notices.slice(0, 5).map((notice, index) => (
                  <div key={index} className="border-b border-gray-200 pb-3">
                    <h4 className="text-sm font-semibold text-gray-800 hover:text-blue-700 cursor-pointer mb-1">
                      {notice.title}
                    </h4>
                    <p className="text-xs text-gray-500">Posted on: {notice.date}</p>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full bg-blue-700 text-white py-2 rounded font-semibold hover:bg-blue-800 transition-colors">
                VIEW ALL NOTICES
              </button>
            </div>

            {/* Important Announcements */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-blue-700 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Important Announcements</h3>
              </div>
              <div className="space-y-4">
                {announcements.slice(0, 5).map((announcement, index) => (
                  <div key={index} className="border-b border-gray-200 pb-3">
                    <h4 className="text-sm font-semibold text-gray-800 hover:text-blue-700 cursor-pointer mb-1">
                      {announcement.title}
                    </h4>
                    <p className="text-xs text-gray-500">Announced on: {announcement.date}</p>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full bg-blue-700 text-white py-2 rounded font-semibold hover:bg-blue-800 transition-colors">
                VIEW ALL ANNOUNCEMENTS
              </button>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <FaTrophy className="text-blue-700 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Upcoming Events</h3>
              </div>
              <div className="space-y-4">
                {events.slice(0, 5).map((event, index) => (
                  <div key={index} className="border-b border-gray-200 pb-3">
                    <h4 className="text-sm font-semibold text-gray-800 hover:text-blue-700 cursor-pointer mb-1">
                      {event.title}
                    </h4>
                    <p className="text-xs text-gray-500">Date: {event.date}</p>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full bg-blue-700 text-white py-2 rounded font-semibold hover:bg-blue-800 transition-colors">
                VIEW ALL EVENTS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Why Choose Section ====== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-yellow-600 font-light tracking-widest mb-2">EXCELLENCE IN LEGAL EDUCATION</p>
            <h2 className="text-4xl font-bold text-blue-800">WHY CHOOSE CITY LAW COLLEGE?</h2>
            <div className="flex justify-center mt-4">
              <div className="w-24 h-1 bg-yellow-500" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <FaUniversity className="text-blue-700" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Affiliated with LU</h3>
              <p className="text-sm text-gray-600">
                Recognized by University of Lucknow and approved by Bar Council of India
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <FaCertificate className="text-blue-700" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">NAAC Accredited</h3>
              <p className="text-sm text-gray-600">
                Achieved B++ Grade by NAAC, Ensuring quality education
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <FaUsers className="text-blue-700" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Faculty</h3>
              <p className="text-sm text-gray-600">
                Experienced and dedicated faculty committed to student success
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <FaGavel className="text-blue-700" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Moot Court</h3>
              <p className="text-sm text-gray-600">
                State of the art Moot Court Hall for practical legal training
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Admissions Popup Modal ====== */}
      {showAdmissionsPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={closeAdmissionsPopup}
          />
          {/* Modal */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-[92%] max-w-lg p-6 md:p-7 z-10">
            <button
              onClick={closeAdmissionsPopup}
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-800"
              aria-label="Close popup"
              title="Close"
            >
              <FaTimes size={18} />
            </button>

            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-blue-800">
                Admissions Open 2025–26
              </h3>

              <p className="text-gray-700">
                Apply now for{" "}
                <strong>LL.B (3 Years)</strong>,{" "}
                <strong>LL.B (Hons)</strong> &amp;{" "}
                <strong>LL.M (Post-Graduate)</strong>. Limited seats — proceed to
                online registration or chat with us on WhatsApp.
              </p>

              <p className="text-gray-700">
                Address: City Law College, Sector 9, Jankipuram Vistar, Khargapur
                Jagir, Lucknow, Uttar Pradesh 226021
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://www.cgclko.com/pages/OnlineRegistration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors"
                >
                  Register Now ↗
                </a>

                <a
                  href="https://wa.me/918177001081?text=Hello%20City%20Law%20College%2C%20I%27m%20interested%20in%20Admissions%202025%E2%80%9326%20(LL.B%20%7C%20LL.M)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                  aria-label="Chat on WhatsApp"
                  title="Chat on WhatsApp"
                >
                  <FaWhatsapp size={18} />
                  Chat on WhatsApp
                </a>

                <button
                  onClick={closeAdmissionsPopup}
                  className="inline-flex items-center justify-center px-5 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Not now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
