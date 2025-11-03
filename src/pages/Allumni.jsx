import React from "react";

const Alumni = () => {
  const alumniImages = Array(8).fill(
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80"
  );

  const members = [
    ["Ms. Solanki Yadav", "President"],
    ["Mr. Abhishek Sharma", "Vice-President"],
    ["Mr. Avinash Srivastava", "Secretary"],
    ["Mr. Amit Gupta", "Joint-Secretary"],
    ["Mr. Ashwani Singh", "Treasurer"],
    ["Mr. Kartikey Dwivedi", "Spokesman"],
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Banner */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519455953755-af066f52f1ea?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Alumni Association
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12 leading-relaxed">
        {/* Intro */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Introduction
          </h2>
          <p className="text-gray-700">
            The alumni are among the most valued stakeholders of City Law
            College. Our past students are serving in diverse professions —
            from judiciary and legal services to business and academia. Many of
            them continue to contribute by mentoring current students and
            strengthening institutional growth.
          </p>
        </section>

        {/* Alumni Images */}
        <section>
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            Our Distinguished Alumni
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {alumniImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Alumni ${i + 1}`}
                className="rounded-lg shadow-md object-cover w-full h-56 hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </section>

        {/* Goals */}
        <section>
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            Goals & Objectives
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>Organize expert lectures and alumni interactions.</li>
            <li>Guide current students in career development and placements.</li>
            <li>Support institutional infrastructure and social initiatives.</li>
            <li>Encourage entrepreneurship and leadership among students.</li>
          </ul>
        </section>

        {/* Alumni Members */}
        <section>
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            Alumni Association Members
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg text-sm">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Designation</th>
                </tr>
              </thead>
              <tbody>
                {members.map((m, i) => (
                  <tr key={i} className="border-b border-gray-200">
                    <td className="py-2 px-4">{m[0]}</td>
                    <td className="py-2 px-4">{m[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Registration Links */}
        <section>
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            Alumni Registration & Feedback
          </h3>
          <p className="text-gray-700 mb-3">
            Stay connected! Fill out your registration and feedback forms below:
          </p>
          <ul className="list-disc ml-5 text-blue-700 font-medium space-y-2">
            <li>
              <a
                href="https://example.com/alumni-registration.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Alumni Registration Form (PDF) ↗
              </a>
            </li>
            <li>
              <a
                href="https://example.com/alumni-feedback.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Alumni Feedback Form (PDF) ↗
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Alumni;
