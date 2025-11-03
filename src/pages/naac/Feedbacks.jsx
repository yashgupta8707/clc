import React from "react";

const Feedbacks = () => {
  const basePath = "/pdfs";
  const toLink = (file) => `${basePath}/${encodeURIComponent(file)}`;

  // Forms & Minutes (local files)
  const feedbackReports = [
    { name: "Teacher Feedback 2018-23", file: "TEACHER FEEDBACK FORM.pdf" },
    { name: "Employer Feedback 2018-23", file: "EMPLOYER FEEDBACK FORM.pdf" },
    { name: "Alumni Feedback 2018-23", file: "ALUMINI FEEDBACK FORM.pdf" }, // filename as-is
    { name: "Student Feedback 2018-23", file: "STUDENT FEEDBACK FORM.pdf" },
    { name: "Minutes 2023", file: "CLC FEEDBACK MINUTES.pdf" },
  ];

  // Reports & ATR (local files)
  const atrReports = [
    { name: "Teacher Feedback 2018-23", file: "TEACHER FEEDBACK report.pdf" },
    { name: "Employer Feedback 2018-23", file: "Employer Feedback Report.pdf  " },
    { name: "Alumni Feedback 2018-23", file: "ALUMNI FEEDBACK REPORT.pdf" },
    { name: "Student Feedback 2018-23", file: "Student feedback report 0.pdf" },
    { name: "Action Taken Report (ATR) 2018-23", file: "CLC ATR.pdf" },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Banner */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Feedback Forms & Reports
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Feedback Section */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            Feedback Forms & Minutes
          </h2>
          <ul className="space-y-3">
            {feedbackReports.map((f, i) => (
              <li key={i}>
                <a
                  href={toLink(f.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline font-medium"
                >
                  {f.name} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Feedback Reports */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            Feedback Reports (2018–23)
          </h2>
          <ul className="space-y-3">
            {atrReports.map((f, i) => (
              <li key={i}>
                <a
                  href={toLink(f.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline font-medium"
                >
                  {f.name} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Feedbacks;
