import React, { useState, useEffect, useCallback } from "react";

const Sustainability = () => {
  const sustainabilitySections = [
    {
      title: "Generator",
      images: ["https://i.ibb.co/99mMMM4p/92.jpg"],
    },
    {
      title: "Energy Conservation Measures",
      images: [
        "https://i.ibb.co/rR05qfcP/211.jpg",
        "https://i.ibb.co/svt3gYb7/2052.jpg",
        "https://i.ibb.co/wNPwwX7J/208-2.jpg",
        "https://i.ibb.co/WpkcktxK/5198.jpg",
        "https://i.ibb.co/9H59rPG6/2068-1.jpg",
        "https://i.ibb.co/WN74KyDz/2066-1.jpg",
        "https://i.ibb.co/99qDZF7k/2065-1.jpg",
        "https://i.ibb.co/hxMpbvxZ/208-1.jpg",
        "https://i.ibb.co/3mCNzMSm/207-1.jpg",
      ],
    },
    {
      title: "Water Conservation Facilities",
      images: [
        "https://i.ibb.co/qM3jwMnW/217.jpg",
        "https://i.ibb.co/F4Q9cTk9/216.jpg",
        "https://i.ibb.co/rRm3CsyY/2059.jpg",
        "https://i.ibb.co/S4DwfLr1/2058.jpg",
        "https://i.ibb.co/DPdFhQ6S/211-1.jpg",
        "https://i.ibb.co/Ps5qYwPW/210.jpg",
        "https://i.ibb.co/BK2qxRFv/2054.jpg",
        "https://i.ibb.co/TDb4tbvh/2053.jpg",
        "https://i.ibb.co/v6PCfT6x/2056-1.jpg",
        "https://i.ibb.co/mC0Zg5jM/2055-1.jpg",
      ],
    },
    {
      title: "Green Campus Initiatives",
      images: [
        "https://i.ibb.co/RG65Z0jx/220.jpg",
        "https://i.ibb.co/YBnYB2cd/2008.jpg",
        "https://i.ibb.co/hF7KHysc/2007.jpg",
        "https://i.ibb.co/C5mJCN7c/241.jpg",
        "https://i.ibb.co/84RLMBd2/235.jpg",
        "https://i.ibb.co/zHjgM3M9/242.jpg",
        "https://i.ibb.co/cKrYpRL9/222.jpg",
        "https://i.ibb.co/WWdd1DZ0/236.jpg",
        "https://i.ibb.co/9k8snB6p/239.jpg",
        "https://i.ibb.co/SDfJmbCF/75.jpg",
      ],
    },
    {
      title: "Disabled-Friendly Barrier-Free Environment",
      images: [
        "https://i.ibb.co/BHrRY5hP/130.jpg",
        "https://i.ibb.co/S7672NsG/234-1.jpg",
        "https://i.ibb.co/Jj9wyTSH/252.jpg",
        "https://i.ibb.co/j9QQ3Gfx/232.jpg",
        "https://i.ibb.co/RdRmXC9/230.jpg",
        "https://i.ibb.co/HfLyBB80/136.jpg",
        "https://i.ibb.co/Fq7MZyWf/135.jpg",
        "https://i.ibb.co/S7672NsG/234-1.jpg",
        "https://i.ibb.co/7xLjRkWS/219.jpg",
        "https://i.ibb.co/n8m2WwqC/224.jpg",
      ],
    },
  ];

  // Lightbox state
  const [isOpen, setIsOpen] = useState(false);
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const openLightbox = (sectionIdx, imageIdx) => {
    setActiveSectionIdx(sectionIdx);
    setActiveImageIdx(imageIdx);
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // prevent background scroll
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const currentImages = sustainabilitySections[activeSectionIdx]?.images || [];
  const currentTitle = sustainabilitySections[activeSectionIdx]?.title || "";

  const prevImage = useCallback(() => {
    setActiveImageIdx((idx) => (idx - 1 + currentImages.length) % currentImages.length);
  }, [currentImages.length]);

  const nextImage = useCallback(() => {
    setActiveImageIdx((idx) => (idx + 1) % currentImages.length);
  }, [currentImages.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, prevImage, nextImage]);

  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('https://i.ibb.co/RG65Z0jx/220.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-green-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Sustainability & Eco Initiatives
        </h1>
      </div>

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {sustainabilitySections.map((section, sIdx) => (
          <section key={sIdx}>
            <h2 className="text-2xl font-semibold text-green-800 mb-6">
              {section.title}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.images.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => openLightbox(sIdx, i)}
                  className="group relative rounded-lg overflow-hidden shadow-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  aria-label={`Open ${section.title} image ${i + 1}`}
                >
                  <img
                    src={src}
                    alt={`${section.title} ${i + 1}`}
                    className="object-cover w-full h-60 transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </button>
              ))}
            </div>
          </section>
        ))}

        {/* Policy Links */}
        <div className="text-center space-y-4 mt-12">
          <a
            href="/pdfs/policy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-3 rounded-2xl shadow-sm bg-white border hover:shadow transition font-medium text-blue-700"
          >
            Divyang Policy (PDF) ↗
          </a>
          <a
            href="/pdfs/CLC GREEN POLICY.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-3 rounded-2xl shadow-sm bg-white border hover:shadow transition font-medium text-green-700 ml-3"
          >
            Green Policy (PDF) ↗
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80"
            onClick={closeLightbox}
          />

          {/* Content */}
          <div className="relative max-w-6xl w-full px-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 text-white">
              <div className="text-sm md:text-base">
                <span className="font-semibold">{currentTitle}</span>{" "}
                <span className="opacity-80">
                  ({activeImageIdx + 1}/{currentImages.length})
                </span>
              </div>
              <button
                onClick={closeLightbox}
                className="rounded-full p-2 bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close"
                title="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
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
                    <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
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
                    <path d="m10 6 1.41 1.41L7.83 11H20v2H7.83l3.58 3.59L10 18l-6-6z"/>
                  </svg>
                </button>
              )}
            </div>

            {/* Thumbnails (optional) */}
            {currentImages.length > 1 && (
              <div className="flex gap-2 mt-3 overflow-x-auto">
                {currentImages.map((thumb, idx) => (
                  <button
                    key={thumb + idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`h-16 w-20 flex-shrink-0 rounded-md overflow-hidden border ${idx === activeImageIdx ? "border-white" : "border-white/30"} focus:outline-none`}
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

export default Sustainability;
