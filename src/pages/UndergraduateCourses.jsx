import React from "react";
import { FaCheckCircle, FaQuestionCircle } from "react-icons/fa";

const UG_NOTE =
  "Admissions and rules are governed by City Law College and applicable University/Regulatory guidelines. Please refer to official notifications for any updates.";

const UndergradCard = ({ title, subtitle, bullets, applyLink, extra }) => (
  <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
    <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
    {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
    <ul className="mt-4 space-y-2">
      {bullets.map((b, i) => (
        <li key={i} className="flex items-start gap-2">
          <FaCheckCircle className="mt-1 text-blue-700" />
          <span className="text-gray-700">{b}</span>
        </li>
      ))}
    </ul>
    {extra}
    <div className="mt-6">
      <a
        href={applyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-medium"
      >
        Apply Now
      </a>
    </div>
  </div>
);

const FAQ = ({ items }) => (
  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
    <h4 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
      <FaQuestionCircle /> Frequently Asked Questions
    </h4>
    <div className="mt-4 divide-y divide-blue-100">
      {items.map((f, i) => (
        <div key={i} className="py-3">
          <p className="font-semibold text-gray-900">{f.q}</p>
          <p className="text-gray-700 mt-1">{f.a}</p>
        </div>
      ))}
    </div>
  </div>
);

const UndergraduateCourses = () => {
  const applyUrl = "https://www.cgclko.com/pages/OnlineRegistration";

  const baLLBPoints = [
    "5-year integrated BA LL.B program designed to build strong foundations in both Arts and Law.",
    "Balanced structure blending core legal studies with co-curricular activities, clinics, and competitions.",
    "Focus on professional skills through seminars, workshops, moot courts, debates, and internships.",
    "Admission based on merit, entrance/aptitude evaluation, and personal interview as applicable.",
    "Eligibility: Minimum 60% in 10+2 OR a valid score in a national/state entrance test (e.g., CLAT, AILET, BHU, IPU, JAMIA, AMU, etc.).",
    "Candidates appearing in 10+2 or below 60% may be considered via the College’s assessment and personal interview process.",
    "Documents at interview: 10th & 12th marksheets/certificates, residence proof, category certificate (SC/ST/OBC/EWS), six recent passport photos.",
    "Intake (indicative): 330 seats (including EWS) subject to regulatory approvals & notifications.",
  ];

  const llbPoints = [
    "3-year LL.B program covering core substantive and procedural laws along with practical training.",
    "Ideal for graduates targeting judiciary, litigation, corporate practice, public sector, and academia.",
    "Admission based on merit, entrance/aptitude evaluation, and personal interview as applicable.",
    "Eligibility: Graduation (10+2+3) with at least 50% in aggregate OR valid national/state test scores (e.g., DU-LLB/BHU/MHCET, etc.).",
    "Candidates below the minimum percentage or in final year may be considered via the College’s assessment and personal interview process.",
    "Documents at interview: 10th, 12th & Graduation documents, Transfer Certificate, residence proof, category certificate (SC/ST/OBC/EWS), six recent passport photos.",
    "Intake (indicative): 330 seats (including EWS) subject to regulatory approvals & notifications.",
    "Note: All rules are subject to University/Regulatory bodies.",
  ];

  const baFaqs = [
    { q: "What is BA LL.B?", a: "A 5-year integrated law degree combining Arts and Law with strong professional skill-building." },
    { q: "Is an entrance test mandatory?", a: "A valid national/state test score is preferred; the College may conduct its own assessment and interview as applicable." },
    { q: "What subjects are covered?", a: "Constitutional Law, Political Science, Criminal Law, Contract, and more across Arts and Law streams." },
    { q: "Does CLC offer hostels?", a: "Yes—separate hostels for boys and girls (subject to availability and rules)." },
    { q: "Are there scholarships?", a: "Merit/need-based scholarships may be available as per College policies and notifications." },
  ];

  const llbFaqs = [
    { q: "What is LL.B (3-Year)?", a: "A 3-year professional program focused on core legal subjects with practical exposure." },
    { q: "Who can apply?", a: "Graduates (10+2+3) from a recognized university meeting eligibility criteria." },
    { q: "Is distance learning allowed?", a: "No—regular classroom attendance is required to maintain academic rigor." },
    { q: "What are typical career paths?", a: "Law firms, chambers, corporate legal teams, public sector, judiciary preparation, and higher studies." },
    { q: "Class timings?", a: "The timetable is notified each term by the College; typical daytime schedules apply." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Undergraduate Courses</h1>
          <p className="mt-2 text-blue-100">BA LL.B (5-Year Integrated) & LL.B (3-Year)</p>
        </div>
      </div>

      {/* Body */}
      <div className="container mx-auto px-4 py-12 max-w-6xl space-y-10">
        <UndergradCard
          title="BA LL.B (5-Year Integrated)"
          subtitle="Build your legal career with a strong foundation in Arts + Law."
          bullets={baLLBPoints}
          applyLink={applyUrl}
          extra={<p className="text-gray-600 mt-4 text-sm">{UG_NOTE}</p>}
        />

        <UndergradCard
          title="LL.B (3-Year)"
          subtitle="A focused professional program for graduates."
          bullets={llbPoints}
          applyLink={applyUrl}
          extra={<p className="text-gray-600 mt-4 text-sm">{UG_NOTE}</p>}
        />

        {/* FAQs */}
        <div className="grid md:grid-cols-2 gap-6">
          <FAQ items={baFaqs} />
          <FAQ items={llbFaqs} />
        </div>
      </div>
    </div>
  );
};

export default UndergraduateCourses;
