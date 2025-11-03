import React from "react";

const MentorAndKnowledgeCenter = () => {
  const mentorPDFs = [
    { name: "Teacher Mentor", link: "https://example.com/teacher-mentor.pdf" },
    { name: "Student Mentor", link: "https://example.com/student-mentor.pdf" },
    { name: "Mentor Diary", link: "https://example.com/mentor-diary.pdf" },
  ];

  const eContent = [
    "DPC Complete",
    "Environmental Law",
    "IPC",
    "Jurisprudence Unit 1",
    "Contract-II All Units",
  ];

  const videos = [
    "IPC Lecture 10 by Dr. Azad Dwivedi",
    "Revocation of Offer | Dept. of Law",
    "Law of Torts, Unit 2, Lecture 6",
    "LLB 3 Year | Company Law | Lecture 1",
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Banner */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Mentor & Knowledge Center
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Mentor PDFs */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Mentor Documents
          </h2>
          <ul className="space-y-3">
            {mentorPDFs.map((m, i) => (
              <li key={i}>
                <a
                  href={m.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline font-medium"
                >
                  {m.name} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* E-Content */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            E-Content
          </h2>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
            {eContent.map((item, i) => (
              <li
                key={i}
                className="bg-blue-50 p-3 rounded-md shadow hover:bg-blue-100 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Video Lectures */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Video Lectures
          </h2>
          <ul className="space-y-2">
            {videos.map((v, i) => (
              <li key={i} className="text-gray-700">
                🎥 {v}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default MentorAndKnowledgeCenter;
