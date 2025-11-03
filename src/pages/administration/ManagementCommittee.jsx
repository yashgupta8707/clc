import React from 'react';
import { FaUsers } from 'react-icons/fa';

const ManagementCommittee = () => {
  const members = [
    { sno: 1, name: 'Dr. Mamta Srivastava', designation: 'CHAIRMAN' },
    { sno: 2, name: 'Mr. Amrit Srivastava', designation: 'MANAGER' },
    { sno: 3, name: 'Dr. Aishwarya Singh', designation: 'VICE PRESIDENT' },
    { sno: 4, name: 'Mrs. Shanti Devi', designation: 'MEMBER' },
    { sno: 5, name: 'Mr. P. K. Verma', designation: 'MEMBER' },
    { sno: 6, name: 'Mr. Salik Ram Mishra', designation: 'MEMBER' },
    { sno: 7, name: 'Mrs. Voila Gomes', designation: 'MEMBER' },
    { sno: 8, name: 'Mr. Siyaram Yadav', designation: 'MEMBER' },
    { sno: 9, name: 'Dr. Baseerat Fatima', designation: 'Ex. OFFICIO MEMBER (PRINCIPAL)' },
    { sno: 10, name: 'Mr. Nitish Kr. Tiwary', designation: 'TEACHER REPRESENTATIVE (TEACHER)' },
    { sno: 11, name: 'Mr. Vivek Kumar Shukla', designation: 'TEACHER REPRESENTATIVE (TEACHER)' },
    { sno: 12, name: 'Mr. Awdhesh Yadav', designation: 'NON TEACHING STAFF REPRESENTATIVE (THIRD CLASS EMPLOYEE)' }
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Management Committee</h1>
          <div className="flex justify-center items-center gap-2 text-sm">
            <a href="/" className="hover:text-yellow-300">Home</a>
            <span>/</span>
            <a href="/administration" className="hover:text-yellow-300">Administration</a>
            <span>/</span>
            <span>Management Committee</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                <FaUsers className="text-blue-700" size={64} />
              </div>
              <h2 className="text-3xl font-bold text-blue-800 mb-4">MANAGEMENT COMMITTEE</h2>
              <p className="text-gray-600 text-lg">
                The Management Committee of City Law College oversees the strategic direction, 
                administration, and overall development of the institution.
              </p>
            </div>

            {/* Committee Table */}
            <div className="overflow-x-auto shadow-lg rounded-lg mb-8">
              <table className="w-full bg-white">
                <thead className="bg-blue-800 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">S.No.</th>
                    <th className="px-6 py-4 text-left">NAME</th>
                    <th className="px-6 py-4 text-left">DESIGNATION</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member, index) => (
                    <tr 
                      key={member.sno}
                      className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                    >
                      <td className="px-6 py-4 border-b">{member.sno}</td>
                      <td className="px-6 py-4 border-b font-semibold text-gray-800">{member.name}</td>
                      <td className="px-6 py-4 border-b text-gray-700">{member.designation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Responsibilities */}
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Key Responsibilities</h3>
              
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <span className="text-blue-700 mr-3 mt-1">•</span>
                  <p>Strategic planning and policy formulation for the college</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-3 mt-1">•</span>
                  <p>Oversight of financial management and resource allocation</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-3 mt-1">•</span>
                  <p>Ensuring quality of education and academic standards</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-3 mt-1">•</span>
                  <p>Infrastructure development and facility management</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-3 mt-1">•</span>
                  <p>Faculty and staff welfare and development</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-3 mt-1">•</span>
                  <p>Student welfare and grievance redressal</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-700 mr-3 mt-1">•</span>
                  <p>Compliance with regulatory requirements and accreditation standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagementCommittee;