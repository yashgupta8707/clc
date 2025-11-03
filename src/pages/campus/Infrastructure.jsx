import React from "react";

const Infrastructure = () => {
  const sections = [
    {
      title: "Classrooms",
      images: [
        "https://i.ibb.co/Xr1Vtzrb/classroom.png",
        "https://i.ibb.co/MDVmNpd4/smart-class.png",
      ],
    },
    {
      title: "Seminar Hall",
      images: [
        "https://i.ibb.co/MyPb20xL/71.jpg",
        "https://i.ibb.co/ccXM6gRw/72.jpg",
        "https://i.ibb.co/k278Gpgk/68.jpg",
        "https://i.ibb.co/FLZsR9GR/69.jpg",
      ],
    },
    {
      title: "Library",
      images: [
        "https://i.ibb.co/m5dZ30Z2/2006.jpg",
        "https://i.ibb.co/LsyyQ0r/2005.jpg",
        "https://i.ibb.co/3514Yp8g/2004.jpg",
        "https://i.ibb.co/wFrrwvWQ/2003.jpg",
        "https://i.ibb.co/0p7hnBZj/2002.jpg",
        "https://i.ibb.co/7tjM5J7p/2001.jpg",
      ],
    },
    {
      title: "ICT Lab",
      images: [
        "https://i.ibb.co/bg67bKD8/91.jpg",
        "https://i.ibb.co/WNkvZ2m9/90.jpg",
        "https://i.ibb.co/KxBf7j8K/89.jpg",
        "https://i.ibb.co/7JZ3DjHn/88.jpg",
      ],
    },
    {
      title: "Sports Facilities",
      images: [
        "https://i.ibb.co/mVcGghw8/2050.jpg",
        "https://i.ibb.co/Q3k1GVHJ/2049.jpg",
        "https://i.ibb.co/0pzQGx8d/2048.jpg",
        "https://i.ibb.co/bgcMJ42N/115.jpg",
        "https://i.ibb.co/bgvc0KK3/2046.jpg",
        "https://i.ibb.co/Vc7YWSwR/2045.jpg",
        "https://i.ibb.co/yFwvdnkT/2047.jpg",
        "https://i.ibb.co/tM8CXtT8/116.jpg",
      ],
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/Xr1Vtzrb/classroom.png')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Campus Infrastructure
        </h1>
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {sections.map((section, idx) => (
          <section key={idx}>
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">
              {section.title}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${section.title} ${i + 1}`}
                  className="rounded-lg shadow-md object-cover w-full h-60"
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Infrastructure;
