import React, { useState, useEffect, useCallback } from "react";

const AddOnCourses = () => {
  const items = [
    {
      title: "Basic of Computer and Cyber",
      images: [
        "https://i.ibb.co/xSx6MLnK/2070.jpg",
        "https://i.ibb.co/ymxgqRhV/2069.jpg",
      ],
    },
    {
      title: "Basic of Enterprenurship",
      images: [
        "https://i.ibb.co/tw0vSjKq/2071.jpg",
        "https://i.ibb.co/RGBFyQwn/2072.jpg",
      ],
    },
    {
      title: "Basic of Hindi Language",
      images: [
        "https://i.ibb.co/MDZXSqzr/2074.jpg",
        "https://i.ibb.co/8nTC207Y/2073.jpg",
      ],
    },
    {
      title: "Basic of Mathematics",
      images: [
        "https://i.ibb.co/mVcYtNrH/2075.jpg",
        "https://i.ibb.co/fdGT2tQ8/2076.jpg",
      ],
    },
    {
      title: "Basic of Python",
      images: [
        "https://i.ibb.co/xcYnfHL/2078.jpg",
        "https://i.ibb.co/20GCJqRP/2077.jpg",
      ],
    },
    {
      title: "Certificate in Advance Computing",
      images: [
        "https://i.ibb.co/Nd8T1Gwb/2080.jpg",
        "https://i.ibb.co/xtwBRFRh/2079.jpg",
      ],
    },
    {
      title: "CREATIVE WRITE",
      images: [
        "https://i.ibb.co/zhxFfzV3/2082.jpg",
        "https://i.ibb.co/nHg5n27/2081.jpg",
      ],
    },
    {
      title: "Enviornmental Studies",
      images: [
        "https://i.ibb.co/ZpBZM4m4/2084.jpg",
        "https://i.ibb.co/HTwMLv6D/2083.jpg",
      ],
    },
    {
      title: "First Aid",
      images: [
        "https://i.ibb.co/23Hd9ZdD/2086.jpg",
        "https://i.ibb.co/MkDfQTYs/2085.jpg",
      ],
    },
    {
      title: "HUMAN VALUES",
      images: [
        "https://i.ibb.co/8LGmsShN/2088.jpg",
        "https://i.ibb.co/BV0NtSct/2087.jpg",
      ],
    },
    {
      title: "Indian Economy",
      images: [
        "https://i.ibb.co/DDGN6q8Q/2090.jpg",
        "https://i.ibb.co/zhkj08WK/2089.jpg",
      ],
    },
    {
      title: "Know Your UP",
      images: [
        "https://i.ibb.co/Z6Z7fKV8/2091.jpg",
        "https://i.ibb.co/N6zfWRhr/2092.jpg",
      ],
    },
    {
      title: "Know Your India",
      images: [
        "https://i.ibb.co/mVkYj2bP/2093.jpg",
        "https://i.ibb.co/JwDy2CcT/2094.jpg",
      ],
    },
    {
      title: "Nutritiona and Hygine",
      images: [
        "https://i.ibb.co/kVBmX6h0/2096.jpg",
        "https://i.ibb.co/4wXgyrBV/2095.jpg",
      ],
    },
    {
      title: "Perosonality Devlopment",
      images: [
        "https://i.ibb.co/DHsxg8Nt/2099.jpg",
        "https://i.ibb.co/M5nXjQm8/3000.jpg",
      ],
    },
    {
      title: "Star Health",
      images: [
        "https://i.ibb.co/xQrVt7c/3001.jpg",
        "https://i.ibb.co/5hPnNxmj/3002.jpg",
      ],
    },
    {
      title: "UNDERSTANDING HUMAN RIGHTS",
      images: [
        "https://i.ibb.co/fY4SdxmS/3003.jpg",
        "https://i.ibb.co/RGJYW2vz/3004.jpg",
      ],
    },
    {
      title: "Yoga",
      images: [
        "https://i.ibb.co/jPZPcTMR/3005.jpg",
        "https://i.ibb.co/5g2rR0tH/3006.jpg",
      ],
    },
    {
      title: "UNDERSTANDING HUMAN RIGHTS (Set 2)",
      images: [
        "https://i.ibb.co/Ngbf5jWy/UNDERSTANDING-HUMAN-RIGHTS-4.jpg",
        "https://i.ibb.co/7tDC2vr3/UNDERSTANDING-HUMAN-RIGHTS-6.jpg",
      ],
    },
    {
      title: "Enrolled Student in Addon Course",
      images: [
        "https://i.ibb.co/KcsG2tNx/UNDERSTANDING-HUMAN-RIGHTS.jpg",
        "https://i.ibb.co/NgW7PnTN/UNDERSTANDING-HUMAN-RIGHTS5.jpg",
      ],
    },
  ];

  // Lightbox state
  const [isOpen, setIsOpen] = useState(false);
  const [sectionIdx, setSectionIdx] = useState(0);
  const [imageIdx, setImageIdx] = useState(0);

  const openLightbox = (s, i) => {
    setSectionIdx(s);
    setImageIdx(i);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const current = items[sectionIdx]?.images || [];
  const title = items[sectionIdx]?.title || "";

  const prev = useCallback(() => {
    if (!current.length) return;
    setImageIdx((x) => (x - 1 + current.length) % current.length);
  }, [current.length]);

  const next = useCallback(() => {
    if (!current.length) return;
    setImageIdx((x) => (x + 1) % current.length);
  }, [current.length]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, prev, next]);

  return (
    <div className="bg-white text-gray-800">
      {/* Banner */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60" />
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Add-On Courses
        </h1>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, sIdx) => (
            <div key={item.title} className="bg-white shadow rounded-2xl p-4">
              <h3 className="font-semibold text-blue-800 mb-3">{item.title}</h3>
              <div className="grid grid-cols-2 gap-3">
                {item.images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => openLightbox(sIdx, i)}
                    className="relative group rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-700"
                    aria-label={`Open ${item.title} image ${i + 1}`}
                    title="Click to preview"
                  >
                    <img
                      src={src}
                      alt={`${item.title} ${i + 1}`}
                      className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/80" onClick={closeLightbox} />
          <div className="relative max-w-6xl w-full px-4">
            <div className="flex items-center justify-between mb-4 text-white">
              <div className="text-sm md:text-base">
                <span className="font-semibold">{title}</span>{" "}
                <span className="opacity-80">({imageIdx + 1}/{current.length || 1})</span>
              </div>
              <button
                onClick={closeLightbox}
                className="rounded-full p-2 bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="relative bg-black/40 rounded-2xl overflow-hidden">
              <img
                src={current[imageIdx]}
                alt={`${title} ${imageIdx + 1}`}
                className="max-h-[80vh] w-full object-contain"
                draggable={false}
              />

              {current.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/20 hover:bg-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Previous image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/20 hover:bg-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Next image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="m10 6 1.41 1.41L7.83 11H20v2H7.83l3.58 3.59L10 18l-6-6z" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            <div className="flex gap-2 mt-3 overflow-x-auto">
              {current.map((thumb, idx) => (
                <button
                  key={thumb + idx}
                  onClick={() => setImageIdx(idx)}
                  className={`h-16 w-24 flex-shrink-0 rounded-md overflow-hidden border ${idx === imageIdx ? "border-white" : "border-white/30"} focus:outline-none`}
                  aria-label={`Go to image ${idx + 1}`}
                >
                  <img src={thumb} alt={`Thumbnail ${idx + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddOnCourses;
