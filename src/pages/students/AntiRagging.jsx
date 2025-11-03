import React from "react";

const AntiRagging = () => {
  const members = [
    { no: 1, name: "Dr. BASEERAT FATIMA", designation: "PRINCIPAL", position: "CHAIRPERSON" },
    { no: 2, name: "Mr. NITISH TIWARY", designation: "ASSISTANT PROFESSOR", position: "CONVENER" },
    { no: 3, name: "Dr. AMITA ASTHANA", designation: "ASSISTANT PROFESSOR", position: "MEMBER" },
    { no: 4, name: "Mr. NISHANT SRIVASTAVA", designation: "ASSISTANT PROFESSOR", position: "MEMBER" },
    { no: 5, name: "Mr. AWDHESH YADAV", designation: "ADMIN REPRESENTATIVE", position: "MEMBER" },
    { no: 6, name: "Ms. PRIYA RAWAT", designation: "LIBRARIAN", position: "MEMBER" },
    { no: 7, name: "Mr. ANANYA CHANDRA", designation: "STUDENT REPRESENTATIVE", position: "MEMBER" },
    { no: 8, name: "Ms. EVA ADHIKARI", designation: "STUDENT REPRESENTATIVE", position: "MEMBER" },
  ];

  const pdfs = [
    { label: "UGC Anti Ragging Draft Regulations", href: "/pdfs/ugc anti ragging draft regulations.pdf" },
    { label: "UGC Anti Ragging Regulation 2009 (Hindi)", href: "/pdfs/ugc anti ragging regulation 2009 hindi.pdf" },
    { label: "Anti-Ragging Committee Minutes", href: "/pdfs/sexual harashment minutes.pdf" },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Banner */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60" />
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Anti-Ragging Committee
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* Intro / About */}
        <section className="space-y-4">
          <p>
            Ragging is a heinous crime and a criminal offence as declared by the Supreme Court of
            India. <strong>CITY LAW COLLEGE</strong> has been successful in creating a ragging-free
            campus. We foster a harmonious relationship among students and strictly condemn ragging.
          </p>
          <p>
            Our Anti-Ragging Cell comprises the Principal and staff members. Students are sensitized
            on the ill-effects of ragging and the legal proceedings to curb the practice through
            orientation programmes in the first semester and before each academic year. Hostel areas
            are under strict vigilance to ensure students respect and accept peers beyond cultural
            and regional differences.
          </p>

          {/* Online form */}
          <div className="pt-2">
            <a
              href="https://www.antiragging.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-700 text-white font-medium hover:bg-blue-800 transition"
            >
              ONLINE ANTI-RAGGING FORM ↗
            </a>
          </div>
        </section>

        {/* Committee Table */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Anti-Ragging Committee</h2>
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="min-w-full text-left">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="py-3 px-4">S No.</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Designation</th>
                  <th className="py-3 px-4">Position</th>
                </tr>
              </thead>
              <tbody>
                {members.map((m) => (
                  <tr key={m.no} className="border-t">
                    <td className="py-2 px-4">{m.no}</td>
                    <td className="py-2 px-4">{m.name}</td>
                    <td className="py-2 px-4">{m.designation}</td>
                    <td className="py-2 px-4">{m.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Regulations / ICC Note */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-blue-800">
            Regulations Related to Anti-Ragging Committee
          </h3>
          <p>
            Issues related to ragging are heard and scrutinized by the{" "}
            <strong>Internal Complaints Committee (ICC)</strong>. Awareness is created via
            orientation programmes and campus-wide communication.
          </p>

          {/* PDF Links */}
          <div className="mt-4 grid sm:grid-cols-2 gap-3">
            {pdfs.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 rounded-xl border hover:shadow font-medium text-blue-700"
              >
                {p.label} (PDF) ↗
              </a>
            ))}
          </div>
        </section>

        {/* Helpline */}
        <section className="rounded-2xl bg-blue-50 p-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Helpline</h3>
          <p className="text-gray-700">
            In case of any complaint please feel free to contact:
            <br />
            <span className="font-medium">Mobile:</span>{" "}
            <a href="tel:+918177001081" className="text-blue-700 hover:underline">
              +91-8177001081
            </a>
            <br />
            <span className="font-medium">Email:</span>{" "}
            <a href="mailto:complain@cgclko.com" className="text-blue-700 hover:underline">
              complain@cgclko.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default AntiRagging;
