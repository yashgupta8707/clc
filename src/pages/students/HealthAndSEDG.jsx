import React from "react";

const HealthAndSEDG = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Banner */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1580281657521-26d7f97b94e9?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Health & SEDG Cell
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Health Facilities Section */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Health Facilities at City Law College, Jankipuram
          </h2>
          <p className="text-gray-700 mb-4">
            City Law College, Jankipuram, provides comprehensive healthcare
            facilities for students, faculty, and staff members on campus. A
            dedicated <strong>Medical Care Room</strong> is available to address
            minor health issues and provide prompt first aid services.
          </p>
          <p className="text-gray-700 mb-4">
            For more serious medical concerns, the College coordinates with its
            sister campus,{" "}
            <strong>City Hospital Institute of Paramedical Science</strong> — a
            well-equipped hospital offering a wide range of healthcare services.
            While not formally affiliated, the hospital supports the college
            community and participates in government healthcare schemes such as{" "}
            <strong>Ayushman Bharat</strong>, ensuring accessible and affordable
            medical care.
          </p>
          <p className="text-gray-700">
            Additionally, all faculty and staff members are covered under a{" "}
            <strong>General Health Insurance policy</strong>, offering financial
            protection and support in case of medical emergencies.
          </p>
        </section>

        {/* SEDG Cell Section */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Socio-Economically Disadvantaged Groups (SEDG) Cell
          </h2>

          {/* Introduction */}
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Introduction
          </h3>
          <p className="text-gray-700 mb-4">
            City Law College recognizes the need for an inclusive academic
            environment that addresses the challenges faced by students and
            staff belonging to socio-economically disadvantaged groups (SEDG).
            In adherence to the principles of equity, justice, and inclusivity
            enshrined in the{" "}
            <strong>
              UGC (Establishment of Equal Opportunity Cell) Guidelines, 2012
            </strong>
            , this statutory body aims to empower individuals from
            underprivileged sections, ensuring they have equal opportunities to
            thrive academically, socially, and professionally.
          </p>

          {/* Establishment */}
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Establishment and Legal Framework
          </h3>
          <p className="text-gray-700 mb-4">
            The SEDG Cell enables the College to establish committees for
            addressing specific institutional objectives. The cell operates in
            compliance with the UGC regulations and functions as a pivotal body
            to mitigate systemic barriers faced by disadvantaged groups,
            ensuring equitable access to education and resources.
          </p>

          {/* Objectives */}
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Objectives and Mandate
          </h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
            <li>
              <strong>Inclusive Participation:</strong> Ensuring equitable
              representation of disadvantaged groups in academic and
              co-curricular activities.
            </li>
            <li>
              <strong>Capacity Building:</strong> Organizing workshops,
              skill-building programs, and career counseling sessions to empower
              students and staff from marginalized communities.
            </li>
            <li>
              <strong>Financial Assistance:</strong> Facilitating access to
              scholarships, grants, and other financial aids for economically
              weaker sections.
            </li>
            <li>
              <strong>Policy Advocacy:</strong> Advising the College on policies
              to eliminate socio-economic disparities and promote affirmative
              action.
            </li>
            <li>
              <strong>Grievance Redressal:</strong> Addressing complaints of
              discrimination or inequitable treatment faced by members of the
              SEDG.
            </li>
          </ul>

          {/* Constitution */}
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Constitution of the Socio-Economically Disadvantaged Groups Cell
          </h3>
          <div className="overflow-x-auto border border-gray-200 rounded-lg mb-6">
            <table className="min-w-full text-left">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="py-3 px-4">Designation</th>
                  <th className="py-3 px-4">Eligibility</th>
                  <th className="py-3 px-4">Name of Member</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-t">
                  <td className="py-2 px-4">Chairperson</td>
                  <td className="py-2 px-4">
                    Senior faculty member with experience in social justice
                    initiatives.
                  </td>
                  <td className="py-2 px-4">Dr. Amita Asthana</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 px-4">Faculty Representative</td>
                  <td className="py-2 px-4">
                    Faculty member with expertise in educational access and
                    equity programs.
                  </td>
                  <td className="py-2 px-4">Mr. Nitish Kumar Tiwary</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 px-4">Administrative Representative</td>
                  <td className="py-2 px-4">
                    Officer managing welfare schemes for underprivileged groups.
                  </td>
                  <td className="py-2 px-4">Mr. Awdhesh Kumar Yadava</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 px-4">Student Representative</td>
                  <td className="py-2 px-4">
                    Member from socio-economically disadvantaged sections.
                  </td>
                  <td className="py-2 px-4">Mr. Alok Kumar Dixit</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Key Functions */}
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Key Functions and Responsibilities
          </h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
            <li>
              <strong>Awareness Campaigns:</strong> Conducting awareness drives
              to highlight socio-economic equity and available support systems.
            </li>
            <li>
              <strong>Support Programs:</strong> Initiating mentorship, peer
              support, and academic assistance programs to enhance participation
              of SEDG students.
            </li>
            <li>
              <strong>Data Collection and Analysis:</strong> Maintaining records
              to monitor the impact of interventions and recommend improvements.
            </li>
            <li>
              <strong>Outreach Activities:</strong> Partnering with communities
              and organizations to identify potential students and aid
              enrollment.
            </li>
            <li>
              <strong>Policy Implementation:</strong> Monitoring implementation
              of diversity and inclusion policies within the College.
            </li>
          </ul>

          {/* Procedures */}
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Procedures and Mechanisms
          </h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
            <li>
              <strong>Identification of Beneficiaries:</strong> Through
              applications, surveys, and referrals.
            </li>
            <li>
              <strong>Grievance Redressal:</strong> Complaints are resolved
              within 30 working days.
            </li>
            <li>
              <strong>Collaboration:</strong> Coordinating with government and
              NGOs for welfare schemes and capacity-building programs.
            </li>
            <li>
              <strong>Monitoring and Reporting:</strong> Regular assessments and
              annual reporting to the College administration and UGC.
            </li>
          </ul>

          {/* Reporting */}
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Reporting and Compliance
          </h3>
          <p className="text-gray-700 mb-4">
            The SEDG Cell prepares an annual report summarizing its activities,
            outcomes, and policy recommendations. Key aspects include:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
            <li>Number and demographic details of beneficiaries.</li>
            <li>Summary of financial assistance and capacity-building programs.</li>
            <li>Recommendations for enhancing equity and inclusivity.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            This report is reviewed by the Academic Council and the Board of
            Governors before being submitted to the UGC, ensuring transparency
            and accountability.
          </p>

          {/* Significance */}
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Significance and Impact
          </h3>
          <p className="text-gray-700 mb-4">
            The SEDG Cell is instrumental in realizing City Law College’s vision
            of inclusive education. By addressing challenges faced by
            socio-economically disadvantaged groups, the cell creates pathways
            for upward mobility, empowerment, and holistic development.
          </p>
          <p className="text-gray-700 mb-4">
            Its initiatives foster a culture of equality, respect, and
            opportunity within the College.
          </p>

          {/* Conclusion */}
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Conclusion
          </h3>
          <p className="text-gray-700">
            The Socio-Economically Disadvantaged Groups (SEDG) Cell represents
            City Law College's commitment to social justice and educational
            equity. Through targeted interventions and inclusive policies, it
            empowers individuals from marginalized sections to achieve their
            full potential and contributes to a more equitable academic
            ecosystem.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HealthAndSEDG;
