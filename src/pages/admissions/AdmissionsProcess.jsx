import React from "react";

const AdmissionsProcess = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Banner */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Admission Process & Guidelines
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 leading-relaxed">
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-6">
            Admission Process
          </h2>
          <ol className="list-decimal ml-6 space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Filling of Online Form:</span>{" "}
              Complete the application form available on the university's
              official website.
            </li>
            <li>
              <span className="font-semibold">Entrance Examination:</span> Appear
              for the entrance examination as per the scheduled date announced
              by the university.
            </li>
            <li>
              <span className="font-semibold">Merit List:</span> Check the merit
              list published by the university, listing candidates eligible
              based on their examination scores.
            </li>
            <li>
              <span className="font-semibold">Counselling:</span> Participate in
              the counselling process to select your preferred course and
              college based on merit and availability.
            </li>
            <li>
              <span className="font-semibold">Report to the College:</span>{" "}
              Report to the allotted college after selection to proceed with the
              admission formalities.
            </li>
            <li>
              <span className="font-semibold">Student Admitted:</span> Complete
              the admission formalities and become officially enrolled as a
              student.
            </li>
          </ol>
        </section>

        {/* Fees Section */}
        <section className="mt-12">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">
            Admission Fees Guidelines
          </h3>
          <p className="text-gray-700 mb-6">
            Specific details regarding admission fees are typically provided on
            the university’s official website or during the application process.
            Fees may vary based on the course and specific requirements,
            including tuition and additional charges.
          </p>
          <p className="text-gray-700 italic mb-8">
            Note: Always refer to the official university guidelines for the
            most accurate and updated information regarding fee structures and
            admission requirements.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg text-sm md:text-base">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Course</th>
                  <th className="py-3 px-4 text-left">Duration</th>
                  <th className="py-3 px-4 text-left">Fees (Per Semester)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">LL.B. (3-Year)</td>
                  <td className="py-3 px-4">3 Years</td>
                  <td className="py-3 px-4">₹15,000</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">LL.B. (5-Year Integrated)</td>
                  <td className="py-3 px-4">5 Years</td>
                  <td className="py-3 px-4">₹30,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6">
            <a
              href="#"
              className="inline-block bg-blue-700 text-white px-6 py-2 rounded-md shadow hover:bg-blue-800 transition-colors"
            >
              Know More
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdmissionsProcess;
