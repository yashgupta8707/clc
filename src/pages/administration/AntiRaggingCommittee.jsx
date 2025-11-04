import React from 'react';
import { FaShieldAlt, FaPhone, FaEnvelope, FaExclamationTriangle, FaDownload } from 'react-icons/fa';

const AntiRaggingCommittee = () => {
  const committeeMembers = [
    { sno: 1, name: 'Dr. BASEERAT FATIMA', designation: 'PRINCIPAL', position: 'CHAIRPERSON' },
    { sno: 2, name: 'Mr. NITISH TIWARY', designation: 'ASSISTANT PROFESSOR', position: 'CONVENER' },
    { sno: 3, name: 'Dr. AMITA ASTHANA', designation: 'ASSISTANT PROFESSOR', position: 'MEMBER' },
    { sno: 4, name: 'Mr. NISHANT SRIVASTAVA', designation: 'ASSISTANT PROFESSOR', position: 'MEMBER' },
    { sno: 5, name: 'Mr. AWDHESH YADAV', designation: 'ADMIN REPRESENTATIVE', position: 'MEMBER' },
    { sno: 6, name: 'Ms. PRIYA RAWAT', designation: 'LIBRARIAN', position: 'MEMBER' },
    { sno: 7, name: 'Mr. ANANYA CHANDRA', designation: 'STUDENT REPRESENTATIVE', position: 'MEMBER' },
    { sno: 8, name: 'MS. EVA ADHIKARI', designation: 'STUDENT REPRESENTATIVE', position: 'MEMBER' }
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Anti-Ragging Committee</h1>
          <div className="flex justify-center items-center gap-2 text-sm">
            <a href="/" className="hover:text-yellow-300">Home</a>
            <span>/</span>
            <a href="/administration" className="hover:text-yellow-300">Administration</a>
            <span>/</span>
            <span>Anti-Ragging Committee</span>
          </div>
        </div>
      </section>

      {/* Online Form Banner */}
      <section className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <a 
            href="https://www.antiragging.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-lg font-bold hover:text-yellow-300 transition-colors"
          >
            <FaExclamationTriangle className="mr-2" />
            ONLINE ANTI RAGGING FORM - CLICK HERE
          </a>
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
              <h2 className="text-3xl font-bold text-blue-800 mb-6">ANTI-RAGGING COMMITTEE</h2>
            </div>

            {/* Policy Statement */}
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-lg shadow-lg mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                Ragging is a <strong className="text-red-700">heinous crime and a criminal offence</strong> as 
                declared by the Supreme Court of India. <strong>CITY LAW COLLEGE</strong> has been successful 
                in creating a ragging-free campus. Our College believes in fostering a harmonious relationship 
                amongst its students and strictly condemns ragging.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We have an anti-ragging cell which comprises of the Principal and other staff members. The 
                students are sensitized on the ill effects of ragging and the legal proceedings in curbing 
                the practice.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Awareness is created via orientation programmes in the first semester as well as before the 
                commencement of each academic year. The hostel too is under strict vigilance and we ensure 
                that students learn to respect and accept peers beyond their cultural and regional differences.
              </p>
            </div>

            {/* Committee Members Table */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
                ANTI RAGGING COMMITTEE MEMBERS
              </h3>
              
              <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="w-full bg-white">
                  <thead className="bg-blue-800 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">S.No.</th>
                      <th className="px-6 py-4 text-left">NAME</th>
                      <th className="px-6 py-4 text-left">DESIGNATION</th>
                      <th className="px-6 py-4 text-left">POSITION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {committeeMembers.map((member, index) => (
                      <tr 
                        key={member.sno}
                        className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                      >
                        <td className="px-6 py-4 border-b">{member.sno}</td>
                        <td className="px-6 py-4 border-b font-semibold">{member.name}</td>
                        <td className="px-6 py-4 border-b">{member.designation}</td>
                        <td className="px-6 py-4 border-b">
                          <span className={`px-3 py-1 rounded text-sm font-semibold ${
                            member.position === 'CHAIRPERSON' ? 'bg-blue-100 text-blue-800' :
                            member.position === 'CONVENER' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {member.position}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Regulations */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mb-8">
              <h3 className="font-bold text-gray-800 mb-3 text-xl">
                REGULATION RELATED WITH ANTI-RAGGING COMMITTEE
              </h3>
              <p className="text-gray-700">
                Issues related to Ragging would be heard and scrutinized by Internal Complaint Committee (ICC).
              </p>
            </div>

            {/* Documents */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Important Documents</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a 
                  href="/pdfs/ugc anti ragging draft regulations.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">UGC Anti Ragging Draft Regulations</h4>
                    <p className="text-sm text-gray-600">Latest regulations from UGC</p>
                  </div>
                  <FaDownload className="text-blue-700" size={24} />
                </a>

                <a 
                  href="/pdfs/ugc anti ragging regulation 2009 hindi.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">UGC Anti Ragging Regulation 2009 (Hindi)</h4>
                    <p className="text-sm text-gray-600">विनियमन हिंदी में</p>
                  </div>
                  <FaDownload className="text-blue-700" size={24} />
                </a>

                <a 
                  href="/pdfs/Scanned Image.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Anti-Ragging Committee Minutes</h4>
                    <p className="text-sm text-gray-600">Meeting records and resolutions</p>
                  </div>
                  <FaDownload className="text-blue-700" size={24} />
                </a>
              </div>
            </div>

            {/* Helpline */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">HELPLINE</h3>
              <p className="text-center mb-6 text-lg">In Case Of Any Complaint Please Feel Free to Contact</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="bg-blue-500 bg-opacity-20 p-6 rounded-lg text-center">
                  <FaPhone className="mx-auto mb-3" size={32} />
                  <p className="text-sm mb-2">Mobile</p>
                  <a href="tel:+918177001081" className="text-xl font-bold hover:text-yellow-300">
                    +91-8177001081
                  </a>
                </div>
                
                <div className="bg-blue-500 bg-opacity-20 p-6 rounded-lg text-center">
                  <FaEnvelope className="mx-auto mb-3" size={32} />
                  <p className="text-sm mb-2">Email</p>
                  <a href="mailto:complain@cgclko.com" className="text-xl font-bold hover:text-yellow-300 break-all">
                    complain@cgclko.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zero Tolerance Banner */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-red-700 mb-4">
            ZERO TOLERANCE POLICY
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            City Law College maintains a strict zero-tolerance policy towards ragging. 
            Any form of ragging will result in severe disciplinary action and legal proceedings.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AntiRaggingCommittee;