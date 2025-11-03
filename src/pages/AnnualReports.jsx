import React from 'react';
import { FaFileAlt, FaDownload, FaChartLine } from 'react-icons/fa';

const AnnualReports = () => {
  const reports = [
    {
      year: '2022-23',
      title: 'Financial Year 2022-23',
      file: '/pdfs/financial-report-2022-23.pdf'
    },
    {
      year: '2021-22',
      title: 'Financial Year 2021-22',
      file: '/pdfs/financial-report-2021-22.pdf'
    },
    {
      year: '2020-21',
      title: 'Financial Year 2020-21',
      file: '/pdfs/financial-report-2020-21.pdf'
    },
    {
      year: '2019-20',
      title: 'Financial Year 2019-20',
      file: '/pdfs/financial-report-2019-20.pdf'
    },
    {
      year: '2018-19',
      title: 'Financial Year 2018-19',
      file: '/pdfs/financial-report-2018-19.pdf'
    }
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Annual Reports - Income & Expenditure</h1>
          <div className="flex justify-center items-center gap-2 text-sm">
            <a href="/" className="hover:text-yellow-300">Home</a>
            <span>/</span>
            <a href="/about" className="hover:text-yellow-300">About Us</a>
            <span>/</span>
            <span>Annual Reports</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
              <FaChartLine className="text-blue-700" size={64} />
            </div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Financial Transparency & Accountability
            </h2>
            <p className="text-gray-600 text-lg">
              As part of our commitment to transparency and good governance, City Law College publishes 
              annual financial reports detailing income and expenditure for each financial year.
            </p>
          </div>

          {/* Key Features */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">100%</div>
              <p className="text-gray-700">Transparent Reporting</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">Audited</div>
              <p className="text-gray-700">Certified Accounts</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">Annual</div>
              <p className="text-gray-700">Regular Publication</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reports List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
              Download Financial Reports
            </h2>

            <div className="space-y-4">
              {reports.map((report, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col md:flex-row items-center justify-between p-6">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="bg-blue-100 p-4 rounded-lg mr-4">
                        <FaFileAlt className="text-blue-700" size={32} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{report.title}</h3>
                        <p className="text-sm text-gray-600">
                          Income & Expenditure Statement for FY {report.year}
                        </p>
                      </div>
                    </div>
                    <a 
                      href={report.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded font-semibold hover:bg-blue-800 transition-colors"
                    >
                      <FaDownload className="mr-2" />
                      Download PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
              What's Included in Our Financial Reports
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-800 text-xl mb-4">Income Sources</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">•</span>
                    Student tuition fees
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">•</span>
                    Government grants and subsidies
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">•</span>
                    Donations and endowments
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">•</span>
                    Other academic income
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-800 text-xl mb-4">Expenditure Categories</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">•</span>
                    Faculty salaries and benefits
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">•</span>
                    Infrastructure development
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">•</span>
                    Library and learning resources
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">•</span>
                    Administrative and operational costs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
              Audit & Compliance
            </h2>
            <p className="text-gray-700 mb-6">
              All financial statements are prepared in accordance with applicable accounting standards and 
              are audited by qualified chartered accountants. Our financial reports comply with:
            </p>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <span className="text-blue-700 mr-3 mt-1">✓</span>
                <span>University of Lucknow financial reporting guidelines</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-700 mr-3 mt-1">✓</span>
                <span>Bar Council of India financial regulations</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-700 mr-3 mt-1">✓</span>
                <span>NAAC accreditation financial standards</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-700 mr-3 mt-1">✓</span>
                <span>Indian Accounting Standards (Ind AS)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
          <p className="text-lg mb-8">
            For detailed inquiries about our financial reports, please contact our administration office
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-800 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Administration
          </a>
        </div>
      </section>
    </div>
  );
};

export default AnnualReports;