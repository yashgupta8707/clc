import React, { useState, useEffect, useCallback } from "react";

const Placements = () => {
  const sections = [
    {
      title: "Placement Cell",
      images: [
        "https://i.ibb.co/nWsBHdK/5022.jpg",
"https://i.ibb.co/qYtLjhMF/5025.jpg",
"https://i.ibb.co/HDNj4Ltz/5024.jpg",
"https://i.ibb.co/NnxGJbj3/5026.jpg"
      ],
    }
  ];

  const pdfs = [
    {
      label: "Verified List of Students Enrolled in State Bar Council",
      href: "/pdfs/5.2.2 FOR UPLOADE.pdf",
    },
    {
      label: "Students Progressed in Higher Education – Verified List",
      href: "/pdfs/5.2.3 FOR UPLOADE.pdf",
    },
  ];

  // Lightbox state
  const [isOpen, setIsOpen] = useState(false);
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const openLightbox = (sIdx, iIdx) => {
    setActiveSectionIdx(sIdx);
    setActiveImageIdx(iIdx);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const currentImages = sections[activeSectionIdx]?.images || [];
  const currentTitle = sections[activeSectionIdx]?.title || "";

  const prevImage = useCallback(() => {
    if (!currentImages.length) return;
    setActiveImageIdx((x) => (x - 1 + currentImages.length) % currentImages.length);
  }, [currentImages.length]);

  const nextImage = useCallback(() => {
    if (!currentImages.length) return;
    setActiveImageIdx((x) => (x + 1) % currentImages.length);
  }, [currentImages.length]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, prevImage, nextImage]);

  return (
    <div className="bg-white text-gray-800">
      {/* Banner */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/dJHpQ3gz/5155.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60" />
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Placement Cell
        </h1>
      </div>

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {sections.map((section, sIdx) => (
          <section key={section.title}>
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">{section.title}</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.images.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  onClick={() => openLightbox(sIdx, i)}
                  className="group relative rounded-lg overflow-hidden shadow-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                  aria-label={`Open ${section.title} image ${i + 1}`}
                >
                  <img
                    src={src}
                    alt={`${section.title} ${i + 1}`}
                    className="object-cover w-full h-56 transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </button>
              ))}
            </div>
          </section>
        ))}

      </div>

      {/* Lightbox */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80" onClick={closeLightbox} />

          {/* Content */}
          <div className="relative max-w-6xl w-full px-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 text-white">
              <div className="text-sm md:text-base">
                <span className="font-semibold">{currentTitle}</span>{" "}
                <span className="opacity-80">({activeImageIdx + 1}/{currentImages.length || 1})</span>
              </div>
              <button
                onClick={closeLightbox}
                className="rounded-full p-2 bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close"
                title="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Image */}
            <div className="relative bg-black/40 rounded-2xl overflow-hidden">
              <img
                src={currentImages[activeImageIdx]}
                alt={`${currentTitle} ${activeImageIdx + 1}`}
                className="max-h-[80vh] w-full object-contain"
                draggable={false}
              />

              {/* Prev */}
              {currentImages.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/20 hover:bg-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Previous image"
                  title="Previous"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                </button>
              )}

              {/* Next */}
              {currentImages.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/20 hover:bg-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Next image"
                  title="Next"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="m10 6 1.41 1.41L7.83 11H20v2H7.83l3.58 3.59L10 18l-6-6z" />
                  </svg>
                </button>
              )}
            </div>

            {/* Thumbnails */}
            {currentImages.length > 1 && (
              <div className="flex gap-2 mt-3 overflow-x-auto">
                {currentImages.map((thumb, idx) => (
                  <button
                    key={thumb + idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`h-16 w-24 flex-shrink-0 rounded-md overflow-hidden border ${idx === activeImageIdx ? "border-white" : "border-white/30"} focus:outline-none`}
                    aria-label={`Go to image ${idx + 1}`}
                    title={`Go to image ${idx + 1}`}
                  >
                    <img src={thumb} alt={`Thumbnail ${idx + 1}`} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Placements;
