import React from 'react';
import { FaShieldAlt, FaDownload, FaExclamationTriangle } from 'react-icons/fa';

const InternalComplaintCommittee = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Internal Complaint Committee</h1>
          <div className="flex justify-center items-center gap-2 text-sm">
            <a href="/" className="hover:text-yellow-300">Home</a>
            <span>/</span>
            <a href="/administration" className="hover:text-yellow-300">Administration</a>
            <span>/</span>
            <span>Internal Complaint Committee</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-red-100 rounded-full mb-6">
                <FaShieldAlt className="text-red-700" size={64} />
              </div>
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                SEXUAL HARASSMENT COMMITTEE
              </h2>
              <p className="text-gray-600 text-lg">
                Zero Tolerance Policy Against Sexual Harassment
              </p>
            </div>

            {/* Policy Statement */}
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-lg shadow-lg mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                As per the guidelines of <strong>UGC, NAAC and the Supreme Court</strong>, a SEXUAL HARASSMENT 
                COMMITTEE has been established by CITY LAW COLLEGE to provide a healthy and congenial atmosphere 
                for the staff and students of the College.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The cell has well-developed guidelines and norms for a policy to uphold <strong>zero tolerance 
                towards sexual harassment</strong>. The college has entrusted the task of developing principles 
                and procedures for combating sexual harassment to this cell.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Cell promotes measures aimed at achieving gender equality, removal of gender bias or discrimination, 
                sexual harassment, and other acts of gender-based violence by organizing awareness programmes and 
                campaigns for the benefit of all members of the College.
              </p>
            </div>

            {/* Policy Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">
                SEXUAL HARASSMENT COMMITTEE : POLICY
              </h3>
              
              <div className="bg-blue-50 p-8 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  As per the guidelines of UGC, NAAC and the Supreme Court, the college has established the 
                  SEXUAL HARASSMENT COMMITTEE for effective enforcement of basic human rights of gender equality 
                  and assurance of an environment free of sexual harassment and abuse.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Objective of the ICC is to develop healthy and safe atmosphere for the faculty and students 
                  of the College and to prevent sexual harassment or exploitation of any kind. Policy measures and 
                  procedures are laid down to combat sexual harassment, if any arises, and the students are made 
                  aware of these proactive measures through seminars and outreach programmes.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The college's Internal Complaints Committee addresses the grievances filed in a confidential 
                  and sensitive manner.
                </p>
              </div>
            </div>

            {/* Procedure Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">
                Procedure, Roles and Responsibilities
              </h3>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-gray-700 leading-relaxed mb-6">
                  If any staff or student approaches a committee member either through the complaint box placed 
                  in front of the college office or by telephone, necessary action will be taken through counseling 
                  and conciliatory methods. If it requires an inquiry, it will be conducted, and the matter will be 
                  sorted within one week from the date of complaint. The Committee will take the responsibility to 
                  ensure that no such incident happens in the campus.
                </p>

                <h4 className="text-xl font-bold text-gray-800 mb-4">Procedure of Filing Complaint</h4>
                <div className="space-y-4">
                  <div className="flex items-start bg-gray-50 p-4 rounded">
                    <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
                    <p className="text-gray-700">Meeting will be held if a complaint is received by any member.</p>
                  </div>
                  <div className="flex items-start bg-gray-50 p-4 rounded">
                    <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
                    <p className="text-gray-700">The written complaint is taken and the committee prepares and submits the detailed statement of the incidents within two days.</p>
                  </div>
                  <div className="flex items-start bg-gray-50 p-4 rounded">
                    <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
                    <p className="text-gray-700">An enquiry will be held with the members of SEXUAL HARASSMENT COMMITTEE</p>
                  </div>
                  <div className="flex items-start bg-gray-50 p-4 rounded">
                    <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
                    <p className="text-gray-700">The issue will be discussed and finalized within seven days</p>
                  </div>
                  <div className="flex items-start bg-gray-50 p-4 rounded">
                    <span className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</span>
                    <p className="text-gray-700">File the minutes of the inquiry.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Plan */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Action Plan</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-3">Counseling</h4>
                  <p className="text-sm text-gray-700">
                    Counsel the affected students to overcome the trauma
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-3">Awareness</h4>
                  <p className="text-sm text-gray-700">
                    Display current laws and affairs about sexual harassment and gender discrimination in key places
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-3">Programs</h4>
                  <p className="text-sm text-gray-700">
                    Conduct awareness programs and campaigns for the benefit of students and staff
                  </p>
                </div>
              </div>
            </div>

            {/* Important Documents */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Important Documents & Guidelines</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a 
                  href="/pdfs/ugc-regulations-2015-harassment.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <FaDownload className="text-blue-700 mb-4" size={32} />
                  <h4 className="font-bold text-gray-800 mb-2 text-center">UGC Regulations 2015</h4>
                  <p className="text-sm text-gray-600 text-center">Sexual Harassment Guidelines</p>
                </a>

                <a 
                  href="/pdfs/vishaka-guidelines.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <FaDownload className="text-blue-700 mb-4" size={32} />
                  <h4 className="font-bold text-gray-800 mb-2 text-center">Vishaka Guidelines</h4>
                  <p className="text-sm text-gray-600 text-center">Supreme Court Guidelines</p>
                </a>

                <a 
                  href="/pdfs/sexual-harassment-minutes.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <FaDownload className="text-blue-700 mb-4" size={32} />
                  <h4 className="font-bold text-gray-800 mb-2 text-center">Committee Minutes</h4>
                  <p className="text-sm text-gray-600 text-center">Meeting Records</p>
                </a>
              </div>
            </div>

            {/* Complaint Box Notice */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
              <div className="flex items-start">
                <FaExclamationTriangle className="text-yellow-600 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">How to File a Complaint</h4>
                  <p className="text-gray-700">
                    Complaints can be submitted through the complaint box placed in front of the college office 
                    or by directly contacting any committee member. All complaints are handled with strict 
                    confidentiality and sensitivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            City Law College is committed to providing a safe, secure, and harassment-free environment for 
            all students, faculty, and staff. We stand firmly against any form of sexual harassment and 
            maintain a zero-tolerance policy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Confidential</h3>
              <p className="text-sm">All complaints handled with utmost confidentiality</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Swift Action</h3>
              <p className="text-sm">Complaints resolved within 7 days</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Support System</h3>
              <p className="text-sm">Counseling and support for affected individuals</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternalComplaintCommittee;