import React from "react";

const Alumni = () => {
  // Banner collage
  const BANNER =
    "https://i.ibb.co/QFkvjwbt/allumnicollage.png";

  // Alumni grid (names EXACT, images from your links)
  const alumni = [
    { name: "Miss. Alka Bharti – P.C.S (J) in U.P.", img: "https://i.ibb.co/996hdgWB/Miss-Alka-Bharti-P-C-S-J-in-U-P.gif" },
    { name: "Miss. Rupali Tiwari – P.C.S (J) in U.P.", img: "https://i.ibb.co/4gY7G64g/Miss-Rupali-Tiwari-P-C-S-J-in-U-P.gif" },
    { name: "Miss. Solanki Yadav – U.P. A.P.O.", img: "https://i.ibb.co/xqMCBTQy/Miss-Solanki-Yadav-UP-APO.gif" },
    { name: "Miss. Srishti Singh – P.C.S (J) in U.P.", img: "https://i.ibb.co/SwMB5NnT/Miss-Srishti-Singh-P-C-S-J-in-U-P.gif" },
    { name: "Mr. Abhishek Chaudhary – U.P. P.S.C (J)", img: "https://i.ibb.co/fVFRdddn/Mr-Abhishek-Chaudhary-UP-PSC-J.gif" },
    { name: "Mr. Anil Kumar Mishra – Jharkhand P.C.S (J) 2019", img: "https://i.ibb.co/zVQq2BdC/Mr-Anil-Kumar-Mishra-Jharkhand-PCS-J-2019.gif" },
    { name: "Mr. Avanish Kumar – Judicial Magistrate, Hardoi", img: "https://i.ibb.co/spxcRBD8/Mr-Avanish-Kumar-Judicial-Magistrate-Hardoi.gif" },
    { name: "Mr. Devesh Mishra – P.C.S (J) in M.P.", img: "https://i.ibb.co/1tkwMdbC/Mr-Devesh-Mishra-P-C-S-J-in-M-P.gif" },
    { name: "Mr. Jasveer Yadav – P.C.S (J) in U.P.", img: "https://i.ibb.co/Tx2qK2n1/Mr-Jasveer-Yadav-P-C-S-J-in-U-P.gif" },
    { name: "Mr. Praveen Malviya – P.C.S (J) in Bihar", img: "https://i.ibb.co/HD5SMFM8/Mr-Praveen-Malviya-PCS-J-in-Bihar.gif" },
    { name: "Mr. Siddharth Tripathi – Judge Advocate (Indian Army)", img: "https://i.ibb.co/N2zHSNbj/Mr-Siddharth-Tripathi-Judge-Attorney-General-with-Indian-Army.gif" },
    { name: "Mr. Srishti Tripathi – P.C.S (J) in U.P.", img: "https://i.ibb.co/GfbVVJ3s/Mr-Srishti-Tripathi-P-C-S-J-in-U-P.gif" },
    { name: "Mr. Vishnu Pratap Singh – Judicial Magistrate, Varanasi", img: "https://i.ibb.co/ccqSSwF2/Mr-Vishnu-Pratap-Singh-Judicial-Magistrate-Varanasi.gif" },
    { name: "Mr. Yogendra Pratap Singh – U.P. P.C.S (J) 2018", img: "https://i.ibb.co/Y45p2nCL/Mr-Yogendra-Pratap-Singh-UP-PCS-J-2018.gif" },
    { name: "Mr. Zeeshan Masood – P.C.S (J) in U.P.", img: "https://i.ibb.co/d0PHmzrV/Mr-Zeeshan-Masood-P-C-S-J-in-U-P.gif" },
    { name: "Mr. Manoram Tiwari – P.C.S (J) in M.P.", img: "https://i.ibb.co/zV7r4wnv/Mr-Manoram-Tiwari-P-C-S-J-in-M-P.gif" },
    { name: "Mr. Pradeep Mishra – Judicial Magistrate", img: "https://i.ibb.co/ZpLch2fX/Mr-Pradeep-Mishra-Judicial-Magistrate.gif" },
    { name: "Ms. Sashi Prabha Chaudhary – P.C.S (J) in U.P.", img: "https://i.ibb.co/gZzrLNV9/Ms-Sashi-Prabha-Chaudhary-P-C-S-J-in-U-P.gif" },
    { name: "Sonam Gautam – P.C.S (J) in U.P.", img: "https://i.ibb.co/gbKsWSBj/Sonam-Gautam-P-C-S-J-in-U-P.gif" },
    { name: "Supriya Sharma – P.C.S (J) in U.P.", img: "https://i.ibb.co/39JwqptP/Supriya-Sharma-P-C-S-J-in-U-P.gif" },
  ];

  // Alumni Association Members (exact list)
  const association = [
    ["Ms. SOLANKI YADAV", "President"],
    ["Mr. ABHISHEK SHARMA", "Vice-President"],
    ["Mr. AVINASH SRIVASTAVA", "Secretary"],
    ["Mr. AMIT GIPTA", "Joint-Secretary"],
    ["Mr. ASHWANI SINGH", "Treasurer"],
    ["Mr. KARTIKEY DWIVEDI", "Spokesman"],
    ["Mr. SOMDUTT SINGH", "Member(Elected)"],
    ["Mr. JITENDRA SINGH", "Member(Elected)"],
    ["Mr. KIJAY SINGH", "Member(Elected)"],
    ["Ms. MANTASHA SAGEER", "Member(Elected)"],
    ["Mr. VIVEK KUMAR YADAV", "Member(Elected)"],
    ["Ms. SADAF TARIQ", "Member Nominated by Ex. Committee"],
    ["Ms. SNEHA VISHWAS", "Member Nominated by Ex. Committee"],
    ["Mr. KESHAV DWIVEDI", "Member Nominated by Patron"],
    ["Mr. HIMANSHU MEGHNANI", "Member Nominated by Patron"],
    ["Mr. AVIRAL SRIVASTAVA", "Member Nominated by Patron"],
    ["Mr. ABHAY SHANKAR PANDEY", "Member Nominated by Patron"],
    ["Mr. SIDDHANT SINGH VISEN", "Member Nominated by Patron"],
    ["Mr. ASHOK MISHRA", "Member Nominated by Patron"],
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Banner */}
      <div className="relative h-64 md:h-72 lg:h-80">
        <img src={BANNER} alt="Alumni Collage" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-blue-900/60" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">Our Distinguished Alumni</h1>
        </div>
      </div>

      {/* Introduction (as provided) */}
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-6 leading-relaxed">
        <h2 className="text-2xl font-semibold text-blue-800">Introduction</h2>
        <p>
          Our college has responsibility towards its stakeholders. At the same time these stakeholders contribute
          towards the development of college. The alumni are an important stakeholder. They are valuable assets of our
          college. The past students of the college are successful in various fields like teaching, government services,
          business, professions like Judges, lawyers, company secretaries etc. the college has encouraged meritorious
          past students to work as staff members in the college. There are some students who are working as a assistant
          professor in the colleges of CITY GROUP OF INSTITUTIONS.
        </p>
        <p>
          Interactions with them have always been beneficial to college. The interaction with the past students is more
          of informal nature and mostly at departmental level. Various departments have frequent interaction with the
          past students. They are invited to share their experiences with the current students helping them getting
          exposed to the realities of world of work. They are also invited as experts at seminars, for delivering guest
          lecturers in the areas of their expertise, experts judges for competitions etc.
        </p>
        <p>
          In order to have continuous and formal interaction with the alumni college decided to form a Past Students
          Association in the name of City Law College Alumni Association.
        </p>
      </div>

      {/* Alumni Grid – placed right after intro */}
      <div className="max-w-6xl mx-auto px-6 pb-6">
        <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">OUR DISTINGUISHED ALUMNIs</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {alumni.map((a, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                <img
                  src={a.img}
                  alt={a.name}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="text-sm md:text-base font-semibold text-blue-900">{a.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Goals & Objectives */}
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-4">
        <h3 className="text-xl md:text-2xl font-semibold text-blue-800">Goals and Objectives</h3>
        <ul className="list-disc ml-5 space-y-2 text-gray-700">
          <li>
            To arrange the lectures of Honorary Members and other respectable personalities in various fields and
            encourage the students to expand their horizon while entering in the real life.
          </li>
          <li>To provide guidance to the students of the College with reference to career choice and development.</li>
          <li>To assist the College in organizing activities for the benefit of students.</li>
          <li>To help the College for strengthening its infrastructural activities.</li>
          <li>To organize activities for social awareness and social benefits.</li>
          <li>
            To encourage students to become entrepreneurs by undertaking training programs in various forms.
          </li>
          <li>
            To help the students with the help of ex-students for giving better opportunities in placements and with the
            help of ex- students exhaust the possibilities of giving practical knowledge and exposures to the students.
          </li>
        </ul>
      </div>

      {/* Alumni Association Members */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">ALUMNI ASSOCIATION</h3>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full text-sm">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left">S No.</th>
                <th className="py-3 px-4 text-left">NAME</th>
                <th className="py-3 px-4 text-left">DESIGNATION</th>
              </tr>
            </thead>
            <tbody>
              {association.map(([name, role], idx) => (
                <tr key={idx} className="border-b border-gray-200">
                  <td className="py-2 px-4">{idx + 1}.</td>
                  <td className="py-2 px-4">{name}</td>
                  <td className="py-2 px-4">{role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Registration & Feedback */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-3">NEW ALUMNI MEMBER REGISTRATION</h3>
        <p className="text-gray-700 mb-4">
          Greetings Dear Alumnus/Alumna, We are grateful to you for your login on our website. We would like to keep in
          touch with you and therefore we ask you to register on our website. Email ID and Mobile Number are a must for
          online registration.
        </p>
        <ol className="list-decimal ml-5 space-y-2 text-gray-700 mb-4">
          <li>Fill in the basic details on Alumni Registration Form and click Register.</li>
          <li>
            Once you have entered the portal, you are requested to fill in your current details along with a Testimonial
            in the form of Employee/Student ID Card / Appointment Order of your current employer.
          </li>
        </ol>

        <div className="bg-blue-50 rounded-xl p-5 space-y-3">
          <h4 className="font-semibold text-blue-900">Alumni Membership / Feedback Forms</h4>
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
        </div>
      </div>
    </div>
  );
};

export default Alumni;
