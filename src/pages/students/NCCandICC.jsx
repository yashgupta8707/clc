import React from "react";

const NCCandICC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Banner */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          NSS & Sexual Harassment Committee (ICC)
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* NSS Section */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            National Service Scheme (NSS)
          </h2>
          <h3 className="text-lg font-medium mb-2">
            Empowering Students through Community Service
          </h3>
          <p className="text-gray-700 mb-4">
            The National Service Scheme (NSS) is an Indian government-sponsored public
            service program conducted by the Department of Youth Affairs and Sports of
            the Government of India. Popularly known as NSS, the scheme was launched in
            Gandhiji’s Centenary year, 1969.
          </p>
          <p className="text-gray-700 mb-4">
            Aimed at developing students’ personalities through community service, NSS
            is a voluntary association of young people in Colleges, Universities, and at
            +2 levels, working for campus-community linkage. The programme aims to
            inculcate social welfare in students and provide service to society without
            bias.
          </p>
          <p className="text-gray-700 mb-4">
            NSS volunteers ensure that everyone who is needy gets help to enhance their
            standard of living and lead a life of dignity. In doing so, volunteers learn
            from people in villages how to lead a good life despite scarcity of
            resources. It also provides help in natural and man-made disasters by
            providing food, clothing, and first aid to disaster victims.
          </p>
          <p className="text-gray-700 font-medium">
            <strong>N.S.S. Cell Coordinator:</strong> Mr. Pradeep Kumar Tiwari <br />
            📞 <a href="tel:8177001081" className="hover:underline">8177001081</a>
          </p>
        </section>

        {/* ICC Section */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Sexual Harassment Committee (Internal Complaints Committee)
          </h2>

          <p className="text-gray-700 mb-4">
            As per the guidelines of UGC, NAAC, and the Supreme Court, a{" "}
            <strong>SEXUAL HARASSMENT COMMITTEE</strong> has been established by CITY LAW
            COLLEGE to provide a healthy and congenial atmosphere for staff and students.
            The cell upholds <strong>zero tolerance</strong> towards sexual harassment.
          </p>

          <p className="text-gray-700 mb-4">
            The college has entrusted the task of developing principles and procedures
            for combating sexual harassment to this cell. The cell promotes measures
            aimed at achieving gender equality, removal of gender bias or discrimination,
            and other acts of gender-based violence by organizing awareness programs and
            campaigns for the benefit of all members of the College.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
            Policy Objective
          </h3>
          <p className="text-gray-700 mb-4">
            The objective of the Internal Complaints Committee (ICC) is to ensure an
            environment free of sexual harassment and abuse. It develops policies,
            conducts outreach programmes, and addresses grievances in a confidential and
            sensitive manner.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
            Procedure, Roles, and Responsibilities
          </h3>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700 mb-6">
            <li>
              Complaints can be submitted through the complaint box placed in front of
              the college office or by telephone to any committee member.
            </li>
            <li>
              Written complaints are reviewed and documented within two days of
              submission.
            </li>
            <li>
              An inquiry is conducted by the Committee, and the issue is resolved within
              seven days.
            </li>
            <li>
              Minutes of the inquiry and actions taken are formally recorded.
            </li>
          </ol>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
            Action Plan
          </h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Counsel the affected students to overcome trauma.</li>
            <li>
              Display current laws and information about sexual harassment and gender
              discrimination in key campus areas.
            </li>
            <li>
              Conduct awareness programmes and workshops for students and faculty.
            </li>
          </ul>

          {/* PDF Links */}
          <div className="mt-8 space-y-3">
            <a
              href="/pdfs/UGC_regulations 2015-harassment.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-700 hover:underline font-medium"
            >
              UGC Regulations 2015 (Harassment) (PDF) ↗
            </a>

            <a
              href="/pdfs/Vishaka Guidelines.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-700 hover:underline font-medium"
            >
              Vishaka Guidelines (PDF) ↗
            </a>

            <a
              href="/pdfs/sexual harashment minutes.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-700 hover:underline font-medium"
            >
              Sexual Harassment Committee Minutes (PDF) ↗
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NCCandICC;
