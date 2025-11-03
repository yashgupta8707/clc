import React from "react";

const AddOnCourses = () => {
  const courses = [
    "Basics of Computer & Cyber",
    "Basics of Entrepreneurship",
    "Basics of Hindi Language",
    "Basics of Mathematics",
    "Basics of Python",
    "Certificate in Advanced Computing",
    "Environmental Studies",
    "Yoga",
  ];

  return (
    <div className="bg-white text-gray-800">
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Add-On Courses
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition"
            >
              <img
                src="https://via.placeholder.com/100"
                alt={course}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold text-blue-800 text-sm">{course}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddOnCourses;
