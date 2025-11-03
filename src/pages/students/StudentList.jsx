import React from "react";

const StudentList = () => {
  const pdfs = [
    {
      name: "CLC FIRST YEAR STUDENT 5 YRS",
      url: "/pdfs/CLC FIRST YEAR STUDENT 5 YRS.pdf",
    },
    {
      name: "CLC PASSED STUDENT CERTIFICATE UPDATED",
      url: "/pdfs/CLC PASSED STUDENT CERTIFICATE UPDATED.pdf",
    },
    {
      name: "LIST OF ENROLLED STUDENTS IN 5 YEARS FINAL",
      url: "/pdfs/LIST OF ENROLLED STUDENTS IN 5 YEARS FINAL.pdf",
    },
    {
      name: "LIST OF RESERVED CATEGORY STUDENTS",
      url: "/pdfs/LIST OF RESERVED CATEGORY STUDENTS.pdf",
    },
    {
      name: "5 Academic yr Final List",
      url: "/pdfs/5 Academic yr Final List.pdf",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Student Lists
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">
          Download Student Lists (PDF)
        </h2>
        <ul className="space-y-3">
          {pdfs.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline font-medium"
              >
                {item.name} (PDF) ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentList;
