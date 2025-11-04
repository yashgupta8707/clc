import React from 'react';
import { FaExclamationCircle, FaDownload } from 'react-icons/fa';

const GrievanceRedressal = () => {
  const members = [
    { sno: 1, name: 'Ms. VIVEK KUMAR SHUKLA', designation: 'ASSISTANT PROFESSOR', position: 'CONVENER' },
    { sno: 2, name: 'Ms. PRIYA', designation: 'CHIEF LIBRARIAN', position: 'CO-CONVENER' },
    { sno: 3, name: 'Dr. MEENA MISHRA', designation: 'ASSISTANT PROFESSOR', position: 'MEMBER' },
    { sno: 4, name: 'Mrs. SHIKHA SHARMA', designation: 'ASSISTANT PROFESSOR', position: 'MEMBER' },
    { sno: 5, name: 'Mr. VIJAY BHARTI', designation: 'ASSISTANT PROFESSOR', position: 'MEMBER' },
    { sno: 6, name: 'Mr. AQUIB HASAN', designation: 'STUDENT REPRESENTATIVE LLB. THREE YEAR SEM 5', position: 'MEMBER' },
    { sno: 7, name: 'ANJALI SHUKLA', designation: 'STUDENT REPRESENTATIVE LLB. (INTEGRATED) SEM 9', position: 'MEMBER' }
  ];

  const externalLinks = [
    { title: 'Higher Education Department', url: 'https://highereducation.up.gov.in/' },
    { title: 'Samaj Kalyan', url: 'https://socialwelfare.up.gov.in/' },
    { title: 'NAAC', url: 'https://www.naac.gov.in/' },
    { title: 'BCI', url: 'https://www.barcouncilofindia.org/' },
    { title: 'MoE', url: 'https://www.education.gov.in/' },
    { title: 'UGC', url: 'https://www.ugc.gov.in/' },
    { title: 'LU', url: 'https://www.lkouniv.ac.in/' },
    { title: 'UGC Online Grievance Redressal Portal', url: 'https://ugcgrievance.in/' },
    { title: 'Academic and Administrative Audit', url: '#' },
    { title: 'ERP Login', url: '#' },
    { title: 'CLC at a Glance', url: '#' }
  ];

  return (
    <div className="w-full">
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Grievance Redressal Cell</h1>
          <div className="flex justify-center items-center gap-2 text-sm">
            <a href="/" className="hover:text-yellow-300">Home</a>
            <span>/</span>
            <a href="/administration" className="hover:text-yellow-300">Administration</a>
            <span>/</span>
            <span>Grievance</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                <FaExclamationCircle className="text-blue-700" size={64} />
              </div>
              <h2 className="text-3xl font-bold text-blue-800 mb-4">GRIEVANCE REDRESSAL CELL</h2>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-lg mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                The Grievance Redressal Cell of CITY LAW COLLEGE was formally constituted in July 2018 with 
                seven members to probe or to act into the grievances which comprises of the Principal, Heads 
                of the department and Class Teachers. It redresses the grievances at an individual as well as 
                the class level and grievances of common interest.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Cell maintains a conducive and unprejudiced educational environment. Complaints of students 
                and parents are redressed within 7 working days since they are received. All complaints are 
                scrutinized by the management and the grievance redressal cell and the resolutions are recorded.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
                GRIEVANCE REDRESSAL COMMITTEE
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
                    {members.map((member, index) => (
                      <tr key={member.sno} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 border-b">{member.sno}</td>
                        <td className="px-6 py-4 border-b font-semibold">{member.name}</td>
                        <td className="px-6 py-4 border-b">{member.designation}</td>
                        <td className="px-6 py-4 border-b">
                          <span className={`px-3 py-1 rounded text-sm font-semibold ${
                            member.position === 'CONVENER' ? 'bg-blue-100 text-blue-800' :
                            member.position === 'CO-CONVENER' ? 'bg-green-100 text-green-800' :
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

            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">PROCEDURE TO REGISTER GRIEVANCE</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-bold text-gray-800 mb-3">Step 1: Departmental Level</h4>
                  <p className="text-gray-700">
                    The departmental level grievances are attended by the concerned class teachers who are 
                    mentors along with the department heads. The student coordinators and staff coordinators 
                    act as facilitators to communicate and sort out the grievances.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-bold text-gray-800 mb-3">Step 2: Cell Level</h4>
                  <p className="text-gray-700">
                    Unresolved grievances at the departmental level and association level are referred to as 
                    the Grievance Redressal Cell of the institution. The students can approach the Grievance 
                    Redressal Cell of the institution with their complaints of common interest too. They can 
                    directly communicate them to the Principal or Management representatives.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-bold text-gray-800 mb-3">Step 3: Resolution</h4>
                  <p className="text-gray-700">
                    Depending on the seriousness of the problem, the issues are settled by the Cell or by the 
                    Principal in consultation with other members of the management, parents, and faculty. With 
                    the collective efforts of all the stakeholders - the management, Class Teachers, staff 
                    coordinator, the Grievance Redressal Cell resolves the complaints promptly and efficiently.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <a 
                href="/pdfs/GRIVANCE REDRESSAL.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">GRIEVANCE MINUTES</h4>
                  <p className="text-sm text-gray-600">Meeting records and resolutions</p>
                </div>
                <FaDownload className="text-blue-700" size={24} />
              </a>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Important Hyperlinks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {externalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-4 rounded shadow hover:shadow-md transition-shadow text-blue-700 hover:text-blue-900 font-medium"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GrievanceRedressal;