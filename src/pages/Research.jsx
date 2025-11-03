import React from "react";

const Research = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Banner Section */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Research and Development Cell
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12 leading-relaxed">
        {/* Intro */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">
            City Law College – Research and Development Cell
          </h2>
          <p className="text-gray-700">
            At City Law College, we are committed to promoting academic
            excellence, practical legal training, and meaningful community
            engagement. The Research and Development (R&D) Cell plays a pivotal
            role in this mission by fostering a culture of inquiry, innovation,
            and interdisciplinary learning among our students and faculty.
          </p>
        </section>

        {/* Key Activities */}
        <section>
          <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">
            Key Activities of the R&D Cell
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">Court Visits</h4>
                <p className="text-gray-700">
                  Organized visits to courts allow students to witness live
                  proceedings and understand the workings of the judicial system
                  firsthand.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Village Legal Awareness Visits
                </h4>
                <p className="text-gray-700">
                  Outreach programs to educate rural populations about their
                  legal rights while giving students exposure to real-world
                  legal issues.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Student Research Projects
                </h4>
                <p className="text-gray-700">
                  Encouraging students to undertake research on contemporary
                  legal and socio-legal issues under expert guidance.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Seminars, Conferences & Legal Workshops
                </h4>
                <p className="text-gray-700">
                  Regular events including moot courts, client counselling
                  competitions, debate contests, and development programs.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=80"
                alt="Research"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section>
          <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">
            Research Philosophy and Scope
          </h3>
          <p className="text-gray-700 mb-4">
            The Research and Development Cell is responsible for setting
            guidelines related to research and publication, and it undertakes
            projects focused on socio-legal aspects. Its aim is to advance
            education, research, and outreach in key legal domains.
          </p>
          <p className="text-gray-700">
            We provide a platform for collaboration between academicians, legal
            professionals, and students, enabling the exchange of ideas and
            insights. The Cell fosters an environment for continuous legal
            research that influences policy, legal practice, and social
            progress.
          </p>
        </section>

        {/* Collaboration */}
        <section>
          <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">
            Collaboration with LBS Centre for Innovation and Incubation
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Innovation"
                className="rounded-lg shadow-lg w-full h-72 object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                City Law College collaborates with its sister concern, the LBS
                Centre for Innovation and Incubation, to enhance the innovation
                ecosystem. This partnership provides:
              </p>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Expert mentorship</li>
                <li>Incubation opportunities for legal-tech and social entrepreneurship</li>
                <li>
                  Cross-disciplinary collaboration with professionals and startups
                </li>
              </ul>
              <p className="mt-4">
                🔗{" "}
                <a
                  href="https://www.lbscentreforinnovationandincubation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline font-medium"
                >
                  Learn more at www.lbscentreforinnovationandincubation.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Central Facility */}
        <section>
          <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">
            Central Facility Center
          </h3>
          <p className="text-gray-700 mb-4">
            The college houses a Central Facility Center that supports academic
            development, collaborative research, legal aid services, and
            student-led projects. It acts as a hub for resources, training, and
            institutional support.
          </p>
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
            alt="Facility"
            className="rounded-lg shadow-md w-full h-72 object-cover"
          />
        </section>

        {/* Objectives */}
        <section>
          <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">
            Objectives of the R&D Cell
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>Ensure smooth and effective functioning of all R&D activities</li>
            <li>
              Provide a central point for coordination among faculty, students,
              and legal professionals
            </li>
            <li>Promote socio-legal research with real-world impact</li>
          </ul>
        </section>

        {/* Vision */}
        <section className="bg-blue-50 p-6 rounded-xl shadow-inner">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-3">
            Vision Statement
          </h3>
          <blockquote className="italic text-gray-700 border-l-4 border-blue-700 pl-4">
            “To become a centre of excellence in socio-legal education through
            focused research pursuits and continuous interface with lawyers,
            academicians, and other legal experts.”
          </blockquote>
        </section>
      </div>
    </div>
  );
};

export default Research;
