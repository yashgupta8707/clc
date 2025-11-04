import React from "react";
import { FaCheckCircle, FaQuestionCircle } from "react-icons/fa";

const PG_NOTE =
  "All processes are subject to University/Regulatory notifications. Follow the latest circulars for deadlines, intake and detailed rules.";

const Bullet = ({ children }) => (
  <li className="flex items-start gap-2">
    <FaCheckCircle className="mt-1 text-blue-700" />
    <span className="text-gray-700">{children}</span>
  </li>
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

const PostGraduateCourses = () => {
  const applyUrl = "https://www.cgclko.com/pages/OnlineRegistration";

  const faqs = [
    { q: "What is the duration of LL.M?", a: "Typically a 2-year postgraduate program (as per University structure)." },
    { q: "Minimum eligibility?", a: "LL.B/BA LL.B/B.Com LL.B/BBA LL.B/B.Sc LL.B etc. with minimum 50% or equivalent CGPA from a recognized institution." },
    { q: "Is there an entrance test?", a: "Yes—candidates must follow the affiliated University’s LL.M entrance and merit process, followed by College interview where applicable." },
    { q: "Are Letters of Recommendation required?", a: "Two LORs are to be submitted (at least one from the institute where the qualifying degree was completed)." },
    { q: "How are fees paid?", a: "As per College accounts office instructions (online/offline). Next semester fee becomes due as notified after theory exams." },
    { q: "Are scholarships available?", a: "Academic scholarships may be offered as per policy and compliance with stated conditions." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Post-Graduate Courses</h1>
          <p className="mt-2 text-blue-100">LL.M (2025–27)</p>
        </div>
      </div>

      {/* Body */}
      <div className="container mx-auto px-4 py-12 max-w-5xl space-y-8">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">LL.M (Master of Laws)</h2>
          <p className="text-gray-600 mt-2">
            The LL.M program at City Law College focuses on advanced legal scholarship, research aptitude,
            and professional specialization aligned with contemporary legal practice and academia.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Eligibility & Procedure</h3>
              <ul className="space-y-2">
                <Bullet>
                  Passed LL.B (3 Years) or Integrated LL.B (5 Years) or equivalent program approved by BCI with minimum 50% or equivalent CGPA.
                </Bullet>
                <Bullet>
                  Apply through the Online Registration Process as per the affiliated University’s guidelines.
                </Bullet>
                <Bullet>
                  Appear for the University’s LL.M Entrance Test and qualify as per the official merit list.
                </Bullet>
                <Bullet>
                  Submit two Letters of Recommendation (LORs); at least one from the qualifying-degree institute.
                </Bullet>
                <Bullet>
                  Participate in the College’s personal interview process, wherever applicable.
                </Bullet>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Fee & Scholarship</h3>
              <ul className="space-y-2">
                <Bullet>First semester fee payable at admission; subsequent fees as notified post examinations.</Bullet>
                <Bullet>Fees paid only to City Law College accounts (online/offline) as instructed officially.</Bullet>
                <Bullet>Academic scholarships may be granted individually, subject to terms and compliance.</Bullet>
              </ul>
              <a
                href={applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-medium mt-4"
              >
                Apply Now
              </a>
            </div>
          </div>

          <p className="text-gray-600 mt-6 text-sm">{PG_NOTE}</p>
        </div>

        {/* Programs & Intake (clean presentation) */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800">Programs & Intake (Indicative)</h3>
          <ul className="mt-3 space-y-1 text-gray-700">
            <li>BA LL.B (5 Years): 180 + 18 EWS</li>
            <li>B.Com LL.B (5 Years): 60 + 06 EWS</li>
            <li>LL.B (3 Years): 120 + 12 EWS</li>
          </ul>
          <p className="text-gray-500 text-sm mt-2">
            Final intake and categories are subject to University/Regulatory approval and official notifications.
          </p>
        </div>

        {/* FAQs */}
        <FAQ items={faqs} />
      </div>
    </div>
  );
};

export default PostGraduateCourses;
