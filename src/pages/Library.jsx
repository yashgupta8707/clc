import React from "react";

const Library = () => {
  const images = [
    "https://i.ibb.co/m5dZ30Z2/2006.jpg",
    "https://i.ibb.co/LsyyQ0r/2005.jpg",
    "https://i.ibb.co/3514Yp8g/2004.jpg",
    "https://i.ibb.co/wFrrwvWQ/2003.jpg",
    "https://i.ibb.co/0p7hnBZj/2002.jpg",
    "https://i.ibb.co/7tjM5J7p/2001.jpg",
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Banner */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Library
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12 leading-relaxed">
        {/* Intro */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">
            The Knowledge Hub of City Law College
          </h2>
          <p className="text-gray-700">
            The Library at City Law College serves as the academic heart of the
            institution, providing access to a vast collection of legal texts,
            journals, research papers, and e-resources. It fosters a
            knowledge-rich environment for students, faculty, and researchers.
          </p>
        </section>

        {/* Image Gallery */}
        <section>
          <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-6">
            Inside the Library
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Library view ${i + 1}`}
                className="rounded-lg shadow-md object-cover w-full h-60 hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </section>

        {/* Facilities */}
        <section>
          <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">
            Facilities & Resources
          </h3>
          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            <li>
              Over 10,000 books and legal journals available for reference.
            </li>
            <li>Dedicated reading zones for students and faculty.</li>
            <li>Access to online databases, case laws, and e-journals.</li>
            <li>Digital catalogue system for quick resource tracking.</li>
            <li>Wi-Fi enabled study area with digital screens for research.</li>
          </ul>
        </section>

        {/* Study Area */}
        <section>
          <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">
            Study Environment
          </h3>
          <p className="text-gray-700 mb-4">
            Designed to promote focus and comfort, the library offers both
            individual study pods and collaborative workspaces. The
            air-conditioned reading area ensures a peaceful academic ambiance.
          </p>
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1600&q=80"
            alt="Reading Area"
            className="rounded-lg shadow-md w-full h-80 object-cover"
          />
        </section>

        {/* Library Timings */}
        <section className="bg-blue-50 p-6 rounded-xl shadow-inner">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-3">
            Library Timings
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Monday – Friday: 9:00 AM to 6:00 PM</li>
            <li>Saturday: 9:00 AM to 3:00 PM</li>
            <li>Sunday & Holidays: Closed</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Library;
