import React from "react";

const EqualOpportunityCell = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Banner */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Equal Opportunity Cell (EOC)
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* About Section */}
        <section>
          <p className="text-gray-700 mb-4">
            The <strong>Equal Opportunity Cell (EOC)</strong> at CLC was constituted to
            address issues relating to marginalisation and exclusion of minority
            groups — including those based on caste, creed, religion, language,
            ethnicity, sexual orientation, gender, and disability — amongst students,
            faculty, and staff of the CLC community.
          </p>
          <p className="text-gray-700 mb-4">
            The EOC proactively works on discrimination policies, grievance
            redressal procedures, and sensitization programmes to ensure that every
            individual is treated with dignity and fairness.
          </p>
          <p className="text-gray-700">
            To report grievances, please write to:{" "}
            <a
              href="mailto:citylawjnk@cgclko.com"
              className="text-blue-700 hover:underline font-medium"
            >
              citylawjnk@cgclko.com
            </a>
          </p>
        </section>

        {/* Members */}
        <section>
          <h3 className="text-xl font-semibold text-blue-800 mb-3">EOC Members</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Mr. Rajeev Kumar Srivastava – Convener</li>
            <li>Mr. Nitish Kumar Tiwary – Member</li>
            <li>Dr. Meena Mishra – Member</li>
          </ul>
        </section>

        {/* Mandate */}
        <section>
          <h3 className="text-xl font-semibold text-blue-800 mb-3">Mandate</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>
              Promote equality among students, staff, and faculty from all sections of
              society.
            </li>
            <li>
              Tackle and prevent discrimination or harassment of any student, staff, or
              faculty by enforcing preventive and protective measures and recommending
              disciplinary actions against offenders.
            </li>
            <li>
              Safeguard the interests of students, staff, and faculty without prejudice
              to caste, creed, religion, language, ethnicity, sexual orientation, or
              disability (both mental and physical).
            </li>
            <li>
              Conduct mandatory orientation and sensitization programmes for students of
              the College.
            </li>
            <li>
              Ensure that such sessions are included as part of the orientation
              programmes for newly enrolled students each academic year.
            </li>
            <li>
              From the academic year commencing <strong>July 2025</strong>, EOC shall
              also organise similar orientation programmes for the faculty and staff at
              the College.
            </li>
          </ul>
        </section>

        {/* Procedure */}
        <section>
          <h3 className="text-xl font-semibold text-blue-800 mb-3">Procedure</h3>
          <p className="text-gray-700 mb-4">
            Any member of the CLC community, including students and staff, can report
            complaints by writing to{" "}
            <a
              href="mailto:citylawjnk@cgclko.com"
              className="text-blue-700 hover:underline font-medium"
            >
              citylawjnk@cgclko.com
            </a>
            .
          </p>
          <p className="text-gray-700 mb-4">
            Upon receipt of the complaint, the EOC shall conduct a preliminary inquiry
            and determine within 10 days the necessary follow-up action, following due
            process. The EOC shall consider, inter-alia, the nature of the complaint and
            the parties involved before recommending an appropriate course of action.
          </p>
          <p className="text-gray-700 mb-3">
            Pursuant to the preliminary inquiry, the EOC may recommend:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>
              (a) Referring the matter to counselling, mediation, or negotiation for an
              amicable resolution.
            </li>
            <li>
              (b) In case of a student respondent, referring the matter to a competent
              committee such as the Disciplinary Matters Advisory Review and
              Investigation Committee, Sexual Harassment Inquiry Committee, Residence
              Life Disciplinary Committee, or Anti-Ragging Squad for further inquiry and
              disciplinary action.
            </li>
            <li>
              (c) In case of a faculty or staff respondent, requesting the Registrar to
              nominate a third member to the EOC to form an Inquiry Committee empowered
              to take necessary steps to regulate and enforce discipline among employees
              and to take disciplinary measures as deemed necessary, pursuant to Clause
              5 (xii) of the National guidelines.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default EqualOpportunityCell;
