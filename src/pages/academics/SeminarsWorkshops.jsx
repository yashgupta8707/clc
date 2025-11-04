import React, { useState, useEffect, useCallback } from "react";

const SeminarsWorkshops = () => {
  const sections = [
    {
      title: "Career Counselling Seminor",
      images: [
        "https://i.ibb.co/fGPQkf3C/3007.jpg",
        "https://i.ibb.co/pBFg0rkX/3008.jpg",
        "https://i.ibb.co/F4Cmzn8h/3009.jpg",
        "https://i.ibb.co/mF0CJFYn/3010.jpg",
      ],
    },
    {
      title: "Civil Services Exam",
      images: [
        "https://i.ibb.co/q3n6hwz4/3031.jpg",
        "https://i.ibb.co/HfRrQ1qK/3030.jpg",
      ],
    },
    {
      title: "Communication Skills",
      images: [
        "https://i.ibb.co/hxjnhhpy/3033.jpg",
        "https://i.ibb.co/pvrhTqT6/3032.jpg",
      ],
    },
    {
      title: "Company Secratry Exam",
      images: [
        "https://i.ibb.co/ZQ6jsYq/3035.jpg",
        "https://i.ibb.co/4gPBwCgF/3034.jpg",
      ],
    },
    {
      title: "Intellectual Property Law",
      images: [
        "https://i.ibb.co/mCtZ9H7H/3037.jpg",
        "https://i.ibb.co/QFPJKBhx/3036.jpg",
        "https://i.ibb.co/Q3xrf4K4/3039.jpg",
        "https://i.ibb.co/cSJcxV0t/3038.jpg",
      ],
    },
    {
      title: "Interview Skills",
      images: [
        "https://i.ibb.co/RGD3pV3W/3055.jpg",
        "https://i.ibb.co/Q3R3m09z/3054.jpg",
      ],
    },
    {
      title: "Motivational Talk Goal Setting",
      images: [
        "https://i.ibb.co/Q3VgHmx4/3056.jpg",
        "https://i.ibb.co/qYDXPbx9/3057.jpg",
      ],
    },
    {
      title: "Paper Publication",
      images: [
        "https://i.ibb.co/n8qjP1xj/3059.jpg",
        "https://i.ibb.co/fYJ9fSdh/3058.jpg",
      ],
    },
    {
      title: "Seminor on Mental Welness",
      images: [
        "https://i.ibb.co/Mk36R3Pp/3061.jpg",
        "https://i.ibb.co/C4nP4BK/3060.jpg",
      ],
    },
    {
      title: "Stress Managment",
      images: [
        "https://i.ibb.co/R4Y3vHJj/3064.jpg",
        "https://i.ibb.co/Kc3ZPWyH/3063.jpg",
      ],
    },
    {
      title: "Time Managment Skills",
      images: [
        "https://i.ibb.co/SwvvWMSd/3066.jpg",
        "https://i.ibb.co/7JMpkkdB/3065.jpg",
      ],
    },
    {
      title: "Wealth Managment",
      images: [
        "https://i.ibb.co/pjL0nZNW/3070.jpg",
        "https://i.ibb.co/zHWg1V4d/3069.jpg",
      ],
    },
    {
      title: "Workshop in Computer Lab",
      images: [
        "https://i.ibb.co/r2yDcSYC/3086.jpg",
        "https://i.ibb.co/7t831jbF/3085.jpg",
      ],
    },
    {
      title: "Workshop on English Speaking",
      images: [
        "https://i.ibb.co/MDGP9VWy/3092.jpg",
        "https://i.ibb.co/hJmB55r0/3091.jpg",
      ],
    },
    {
      title: "Workshop on first aid",
      images: [
        "https://i.ibb.co/zTm3XsMj/3088.jpg",
        "https://i.ibb.co/3tH67gW/3087.jpg",
      ],
    },
    {
      title: "Workshop on Hygine",
      images: [
        "https://i.ibb.co/zVvfD0Xm/3090.jpg",
        "https://i.ibb.co/fGTk8Gwd/3089.jpg",
      ],
    },
    {
      title: "Workshop on Nutrition",
      images: [
        "https://i.ibb.co/MDGP9VWy/3092.jpg",
        "https://i.ibb.co/hJmB55r0/3091.jpg",
      ],
    },
    {
      title: "Workshop on Personality Development",
      images: [
        "https://i.ibb.co/0R0V59GY/3094.jpg",
        "https://i.ibb.co/fd3h8zr7/3093.jpg",
      ],
    },
    {
      title: "FDP",
      images: [
        "https://i.ibb.co/HfVBSJpY/3097.jpg",
        "https://i.ibb.co/rW04nBh/3098.jpg",
        "https://i.ibb.co/G4ksjJ1Y/3099.jpg",
        "https://i.ibb.co/qMQ30F2r/4000.jpg",
        "https://i.ibb.co/v4HWZLh0/4001.jpg",
        "https://i.ibb.co/9mpGnJk7/4002.jpg",
        "https://i.ibb.co/GQ3DWnTs/4003.jpg",
        "https://i.ibb.co/TBFC3BCQ/4004.jpg",
        "https://i.ibb.co/hxRHjf57/4005.jpg",
        "https://i.ibb.co/HfYGgF2b/4006.jpg",
        "https://i.ibb.co/k2w8DnM4/4007.jpg",
        "https://i.ibb.co/1tJ0PpMN/4008.jpg",
        "https://i.ibb.co/V0ygnD18/4009.jpg",
        "https://i.ibb.co/gLJvbxMG/4010.jpg",
      ],
    },
    {
      title: "STAFF TRAING PROGRAMES",
      images: [
        "https://i.ibb.co/C3d908KC/5138.jpg",
        "https://i.ibb.co/5xLjJtRP/5139.jpg",
        "https://i.ibb.co/0yXykwWf/5140.jpg",
        "https://i.ibb.co/WWfhpy39/5141.jpg",
        "https://i.ibb.co/XfnnNv79/5143.jpg",
        "https://i.ibb.co/DDT06Byz/5142.jpg",
        "https://i.ibb.co/hpbyXcQ/5145.jpg",
        "https://i.ibb.co/s4Dgrh8/5144.jpg",
        "https://i.ibb.co/N2sTf96W/5147.jpg",
        "https://i.ibb.co/cKkNM14L/5148.jpg",
        "https://i.ibb.co/FkwXmNG2/5151.jpg",
        "https://i.ibb.co/fGXY5QRf/5150.jpg",
        "https://i.ibb.co/DP63KdFY/5153.jpg",
      ],
    },
    {
      title: "Awareness Programm",
      images: [
        "https://i.ibb.co/60BfqmyV/5065.jpg",
        "https://i.ibb.co/NdZMxMKJ/5066.jpg",
      ],
    },
  ];

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

  const current = sections[sectionIdx]?.images || [];
  const title = sections[sectionIdx]?.title || "";

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
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60" />
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Seminars & Workshops
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((sec, sIdx) => (
            <div key={sec.title} className="bg-white shadow rounded-2xl p-4">
              <h3 className="font-semibold text-blue-800 mb-3">{sec.title}</h3>
              <div className="grid grid-cols-2 gap-3">
                {sec.images.map((src, i) => (
                  <button
                    key={src + i}
                    type="button"
                    onClick={() => openLightbox(sIdx, i)}
                    className="relative group rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-700"
                  >
                    <img
                      src={src}
                      alt={`${sec.title} ${i + 1}`}
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

      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/80" onClick={closeLightbox} />
          <div className="relative max-w-6xl w-full px-4">
            <div className="flex items-center justify-between mb-4 text-white">
              <div className="text-sm md:text-base">
                <span className="font-semibold">{title}</span>{" "}
                <span className="opacity-80">
                  ({imageIdx + 1}/{current.length || 1})
                </span>
              </div>
              <button
                onClick={closeLightbox}
                className="rounded-full p-2 bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              >
                ✕
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
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white"
                  >
                    ‹
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {current.length > 1 && (
              <div className="flex gap-2 mt-3 overflow-x-auto">
                {current.map((thumb, idx) => (
                  <button
                    key={thumb + idx}
                    onClick={() => setImageIdx(idx)}
                    className={`h-16 w-24 flex-shrink-0 rounded-md overflow-hidden border ${
                      idx === imageIdx ? "border-white" : "border-white/30"
                    }`}
                  >
                    <img
                      src={thumb}
                      alt={`Thumbnail ${idx + 1}`}
                      className="h-full w-full object-cover"
                    />
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

export default SeminarsWorkshops;
