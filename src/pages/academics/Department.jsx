import React from 'react';

const Department = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Department</h1>
          <div className="flex items-center justify-center mt-4 text-sm">
            <span className="text-blue-200">Home</span>
            <span className="mx-2">/</span>
            <span className="text-blue-200">Academics</span>
            <span className="mx-2">/</span>
            <span>Department</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* About Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-blue-700 pl-4">
              About City Law College
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              City Law College is a distinguished institution committed to providing high-quality legal education, 
              fostering academic excellence, and nurturing professional development in a conducive learning environment.
            </p>
          </div>

          {/* Brief History */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-700 pl-4">
              Brief History
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Established in 2016, City Law College was founded with the vision of creating a center of excellence in 
              legal education. Since its inception, the college has steadily built a reputation for academic rigor, 
              practical training, and institutional integrity. It has produced a distinguished alumni base that includes 
              practicing advocates, judicial officers, academicians, and civil servants. With its student-centric approach 
              and modern legal pedagogy, City Law College stands as a trusted name in the field of legal studies in the region.
            </p>
          </div>

          {/* Law Programs */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-700 pl-4">
              Law Programs Offered
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="font-bold text-gray-800 text-lg mb-2">LL.B. (3-Year Course)</h3>
                <p className="text-gray-600">
                  For graduates seeking a professional law degree and career in legal practice, judiciary, or corporate law.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-gray-800 text-lg mb-2">LL.B. (5-Year Integrated Course)</h3>
                <p className="text-gray-600">
                  For students who have completed higher secondary education and wish to pursue a comprehensive and 
                  foundational legal education directly after school.
                </p>
              </div>
            </div>
          </div>

          {/* Campus Overview */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-700 pl-4">
              Campus Overview
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <span className="text-2xl">📏</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Campus Area</h3>
                  <p className="text-gray-600">50,000 sq. ft.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
                  <p className="text-gray-600">Urban</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Type of Institution</h3>
                  <p className="text-gray-600">Co-Educational</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <span className="text-2xl">📅</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Year of Establishment</h3>
                  <p className="text-gray-600">2016</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <span className="text-2xl">📹</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">CCTV Surveillance</h3>
                  <p className="text-gray-600">24/7 coverage across the entire campus</p>
                </div>
              </div>
            </div>
          </div>

          {/* Faculty and Staff */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-700 pl-4">
              Faculty and Staff
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-5xl font-bold text-blue-700 mb-2">57</div>
                <p className="text-gray-700 font-semibold">Total Teaching Staff</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-5xl font-bold text-green-700 mb-2">31</div>
                <p className="text-gray-700 font-semibold">Total Non-Teaching Staff</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Faculty Members</h3>
                <p className="text-gray-700 leading-relaxed">
                  City Law College boasts a dedicated and experienced faculty committed to delivering quality legal 
                  education. The faculty members are actively involved in various academic and research activities, 
                  contributing to the institution's reputation. For a detailed list of faculty members, please visit 
                  the Faculty List page.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Non-Teaching Staff</h3>
                <p className="text-gray-700 leading-relaxed">
                  The non-teaching staff at City Law College plays a crucial role in supporting the administrative 
                  and operational functions of the institution. Their dedication ensures the smooth running of daily 
                  activities and provides essential services to students and faculty alike. A comprehensive list of 
                  non-teaching and technical staff can be found on the Non-Teaching & Technical Staff page.
                </p>
              </div>
            </div>
          </div>

          {/* Collaborations */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg shadow-md p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Collaborations</h2>
            <p className="leading-relaxed text-blue-100">
              City Law College actively collaborates with various legal, academic, and social organizations to enhance 
              student exposure to real-world practices, internships, legal aid, and research opportunities. These 
              collaborations aim to bridge the gap between theoretical knowledge and practical application, preparing 
              students for successful careers in the legal field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;