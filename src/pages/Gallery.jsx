import React from "react";

const Gallery = () => {
  const sections = [
    {
      title: "Career Counselling Session",
      images: [
        "https://i.ibb.co/ynShGN80/IMG-20240323-WA0081.jpg",
        "https://i.ibb.co/8DC3YT7n/IMG-20240323-WA0082.jpg",
        "https://i.ibb.co/hJH8vY8t/IMG-20240323-WA0083.jpg",
        "https://i.ibb.co/Y4RLjpnR/IMG-20240323-WA0084.jpg",
        "https://i.ibb.co/KjBj4V0Z/IMG-20240323-WA0085.jpg",
        "https://i.ibb.co/VpQG6Q2j/IMG-20240323-WA0086.jpg",
        "https://i.ibb.co/7tFRh1wD/IMG-20240323-WA0088.jpg",
        "https://i.ibb.co/tPhHGjhx/IMG-20240323-WA0089.jpg",
        "https://i.ibb.co/qLS6XhYT/IMG-20240323-WA0094.jpg",
        "https://i.ibb.co/6zMxJJD/IMG-20240323-WA0095.jpg",
      ],
    },
    {
      title: "Communication and Logic in Practice",
      images: [
        "https://i.ibb.co/dwmRPq6K/IMG-20240322-WA0027.jpg",
        "https://i.ibb.co/Q7syRzCQ/IMG-20240323-WA0002.jpg",
        "https://i.ibb.co/xQRWCMH/IMG-20240323-WA0003.jpg",
        "https://i.ibb.co/PZ39F8fQ/IMG-20240323-WA0004.jpg",
        "https://i.ibb.co/DDMJryHn/IMG-20240323-WA0005.jpg",
        "https://i.ibb.co/Hp3Zbdfp/IMG-20240323-WA0006.jpg",
        "https://i.ibb.co/PzmBHSXf/IMG-20240323-WA0007.jpg",
      ],
    },
    {
      title: "Court Visit",
      images: [
        "https://i.ibb.co/sdT4N5qZ/Whats-App-Image-2024-06-07-at-4-54-52-PM.jpg",
        "https://i.ibb.co/271Jy83t/Whats-App-Image-2024-06-07-at-4-54-53-PM.jpg",
        "https://i.ibb.co/Z1TVgbbm/Whats-App-Image-2024-06-07-at-4-54-54-PM-1.jpg",
        "https://i.ibb.co/ycMPBtp2/Whats-App-Image-2024-06-07-at-4-54-54-PM.jpg",
        "https://i.ibb.co/fzqnyd3C/Whats-App-Image-2024-06-07-at-4-54-55-PM.jpg",
        "https://i.ibb.co/HDhc6027/Whats-App-Image-2024-06-07-at-4-54-56-PM.jpg",
      ],
    },
    {
      title: "Farewell 2024",
      images: [
        "https://i.ibb.co/SXjMYtY9/IMG-20240506-WA0010.jpg",
        "https://i.ibb.co/HLXXxBJq/IMG-20240506-WA0013.jpg",
        "https://i.ibb.co/0ytXwnjh/IMG-20240506-WA0014.jpg",
        "https://i.ibb.co/xK1gBpSN/IMG-20240506-WA0026.jpg",
        "https://i.ibb.co/V09VZMNs/IMG-20240506-WA0032.jpg",
        "https://i.ibb.co/dwg0ck1b/IMG-20240506-WA0039.jpg",
        "https://i.ibb.co/fVV3Hmq6/IMG-20240506-WA0042.jpg",
        "https://i.ibb.co/7d880qMw/IMG-20240506-WA0049.jpg",
        "https://i.ibb.co/vFh01Sh/IMG-20240506-WA0080.jpg",
        "https://i.ibb.co/F4VpWyJ9/IMG-20240506-WA0090.jpg",
      ],
    },
    {
      title: "Guest Lecture by Vishkarma Sir",
      images: [
        "https://i.ibb.co/1fnjYsM1/Whats-App-Image-2024-06-07-at-4-42-46-PM-1.jpg",
        "https://i.ibb.co/DHL0HwHm/Whats-App-Image-2024-06-07-at-4-42-46-PM-2.jpg",
        "https://i.ibb.co/5gVhZx3j/Whats-App-Image-2024-06-07-at-4-42-46-PM-3.jpg",
        "https://i.ibb.co/xKRXjkV8/Whats-App-Image-2024-06-07-at-4-42-47-PM-1-1.jpg",
        "https://i.ibb.co/2YkVkHZC/Whats-App-Image-2024-06-07-at-4-42-47-PM.jpg",
        "https://i.ibb.co/KjCW6hkw/Whats-App-Image-2024-06-07-at-4-42-48-PM.jpg",
      ],
    },
    {
      title: "Impromptu",
      images: [
        "https://i.ibb.co/Y4NLJMfQ/IMG-3451.jpg",
        "https://i.ibb.co/C5HPDMj4/IMG-3453.jpg",
        "https://i.ibb.co/HD8G4D5P/IMG-3475.jpg",
        "https://i.ibb.co/bMtsDF7C/IMG-3492.jpg",
        "https://i.ibb.co/Jjw5rhFg/IMG-3501.jpg",
        "https://i.ibb.co/hRPhWN8z/IMG-3505.jpg",
        "https://i.ibb.co/ZRtP43Kk/IMG-3514.jpg",
        "https://i.ibb.co/twzFfgR1/IMG-3541.jpg",
      ],
    },
    {
      title: "Labour Day Debate",
      images: [
        "https://i.ibb.co/0Rr4zdZ9/Whats-App-Image-2024-06-07-at-5-08-18-PM.jpg",
        "https://i.ibb.co/qFnmjhHF/Whats-App-Image-2024-06-07-at-5-08-19-PM-1.jpg",
        "https://i.ibb.co/JWQWTzWm/Whats-App-Image-2024-06-07-at-5-08-19-PM.jpg",
        "https://i.ibb.co/Z6wjpkZN/Whats-App-Image-2024-06-07-at-5-08-28-PM.jpg",
        "https://i.ibb.co/XrTpP5Gn/Whats-App-Image-2024-06-07-at-5-08-31-PM.jpg",
        "https://i.ibb.co/DDW8G1Kr/Whats-App-Image-2024-06-07-at-5-08-32-PM.jpg",
      ],
    },
    {
      title: "Lecture on Legal Research Tools",
      images: [
        "https://i.ibb.co/kVY8Khfh/IMG-20240309-WA0005.jpg",
        "https://i.ibb.co/KjsNB1MG/IMG-20240309-WA0010.jpg",
        "https://i.ibb.co/TNpq5Nb/IMG-20240309-WA0011.jpg",
        "https://i.ibb.co/5gb4r381/IMG-20240309-WA0016.jpg",
        "https://i.ibb.co/Y7d6RjR1/IMG-20240309-WA0019.jpg",
        "https://i.ibb.co/S7Ng638G/IMG-20240322-WA0021.jpg",
        "https://i.ibb.co/PspZzDwJ/IMG-20240322-WA0023.jpg",
        "https://i.ibb.co/C3GdXPM5/IMG-20240322-WA0024.jpg",
      ],
    },
    {
      title: "Legal Aid Campaign",
      images: [
        "https://i.ibb.co/DXNg8Py/IMG-20240318-WA0031.jpg",
        "https://i.ibb.co/Gfj1JRZ7/IMG-20240318-WA0037.jpg",
        "https://i.ibb.co/S4gdjvMx/IMG-20240318-WA0038.jpg",
        "https://i.ibb.co/GzMTP9X/IMG-20240318-WA0042.jpg",
        "https://i.ibb.co/GygbWwh/IMG-20240318-WA0046.jpg",
        "https://i.ibb.co/jdFMpTC/IMG-20240318-WA0047.jpg",
        "https://i.ibb.co/8nT5mwd/IMG-20240323-WA0031.jpg",
        "https://i.ibb.co/Wv9kbRtp/IMG-20240323-WA0034.jpg",
        "https://i.ibb.co/Kcvbsx2W/IMG-20240323-WA0057.jpg",
        "https://i.ibb.co/ZzkXkfx3/IMG-20240323-WA0062.jpg",
      ],
    },
    {
      title: "Legal Aid Cell",
      images: [
        "https://i.ibb.co/gMyhZHtj/DSC01989.jpg",
        "https://i.ibb.co/NdvDRs5N/DSC01992.jpg",
        "https://i.ibb.co/D3JYMxD/DSC01997.jpg",
        "https://i.ibb.co/ynbqhZn2/DSC02000.jpg",
        "https://i.ibb.co/8Dp1KZQT/DSC02001.jpg",
        "https://i.ibb.co/v6nfHHJD/DSC02008.jpg",
        "https://i.ibb.co/q3HfYSK4/DSC02009.jpg",
        "https://i.ibb.co/DPwV9vfL/DSC02020.jpg",
        "https://i.ibb.co/Gfdzk7dv/DSC02021.jpg",
        "https://i.ibb.co/N2T6Jv59/DSC02026.jpg",
      ],
    },
    {
      title: "Moot Court 1st Inter Collegiate",
      images: [
        "https://i.ibb.co/WvYZrMWL/Whats-App-Image-2024-06-07-at-4-51-04-PM.jpg",
        "https://i.ibb.co/67d9hqQR/Whats-App-Image-2024-06-07-at-4-51-05-PM-1.jpg",
        "https://i.ibb.co/WvQP3bdV/Whats-App-Image-2024-06-07-at-4-51-05-PM.jpg",
        "https://i.ibb.co/608FcwhQ/Whats-App-Image-2024-06-07-at-4-51-06-PM-1.jpg",
        "https://i.ibb.co/yB00s8BD/Whats-App-Image-2024-06-07-at-4-51-06-PM.jpg",
        "https://i.ibb.co/40JW6Dq/Whats-App-Image-2024-06-07-at-4-51-07-PM.jpg",
      ],
    },
    {
      title: "Nukkad Natak Paigam",
      images: [
        "https://i.ibb.co/G4Dyg6WP/IMG-20231008-112412.jpg",
        "https://i.ibb.co/GvFCqB0k/IMG-20231008-112608.jpg",
        "https://i.ibb.co/s9g0Y92D/IMG-20231008-131206.jpg",
        "https://i.ibb.co/rKs29P12/Whats-App-Image-2024-06-07-at-4-46-52-PM-1.jpg",
        "https://i.ibb.co/v4LYj0C6/Whats-App-Image-2024-06-07-at-4-46-52-PM.jpg",
        "https://i.ibb.co/hJ6gZTPC/Whats-App-Image-2024-06-07-at-4-46-53-PM.jpg",
        "https://i.ibb.co/nNwnD6MZ/Whats-App-Image-2024-06-07-at-4-47-59-PM.jpg",
      ],
    },
    {
      title: "Poster Making",
      images: [
        "https://i.ibb.co/cSM4hgjV/37-CF5-EDF-A523-4144-B91-F-D2-F9-D89-CCACD.jpg",
        "https://i.ibb.co/kPL3bS9/IMG-3227.jpg",
        "https://i.ibb.co/r29x4q3n/IMG-3230.jpg",
        "https://i.ibb.co/p6w88kDQ/IMG-3599.png",
        "https://i.ibb.co/xtH4sPCP/IMG-3600.png",
      ],
    },
    {
      title: "Talent Fiesta 2k24 (04-05-2024)",
      images: [
        "https://i.ibb.co/G4qrbTDq/IMG-20240505-WA0043.jpg",
        "https://i.ibb.co/DgYpRnGL/IMG-20240505-WA0044.jpg",
        "https://i.ibb.co/bcvSybr/IMG-20240505-WA0047.jpg",
        "https://i.ibb.co/chyxN9N4/IMG-20240505-WA0048.jpg",
        "https://i.ibb.co/Y4YTH2qv/IMG-20240505-WA0049.jpg",
        "https://i.ibb.co/TD67N6qX/IMG-20240505-WA0052.jpg",
        "https://i.ibb.co/SDmgvwzV/IMG-20240505-WA0053.jpg",
        "https://i.ibb.co/FkvFKB0v/IMG-20240505-WA0056.jpg",
        "https://i.ibb.co/C5f9yvTy/IMG-20240505-WA0057.jpg",
        "https://i.ibb.co/x88tP0jS/IMG-20240505-WA0058.jpg",
        "https://i.ibb.co/G4L3mK6k/IMG-20240505-WA0061.jpg",
        "https://i.ibb.co/9mC7ShCW/IMG-20240506-WA0005.jpg",
      ],
    },
    {
      title: "Beyond Campus Outreach Activities",
      images: [
        "https://i.ibb.co/s9Q1tSJT/4013.jpg",
        "https://i.ibb.co/nqRjzWxv/4014.jpg",
        "https://i.ibb.co/4ZNs7Mr4/4015.jpg",
        "https://i.ibb.co/DH8BQ5JC/4016.jpg",
        "https://i.ibb.co/Fky5XFP4/4019.jpg",
        "https://i.ibb.co/q3HrRN7H/4020.jpg",
        "https://i.ibb.co/S7V4M7XK/4021.jpg",
        "https://i.ibb.co/G3pDhGNb/4022.jpg",
      ],
    },
    {
      title: "Yuva Shakti",
      images: [
        "https://i.ibb.co/60ZfFp8M/5105.jpg",
        "https://i.ibb.co/8n2Fbgp8/5106.jpg",
        "https://i.ibb.co/pk9LbhW/5107.jpg",
        "https://i.ibb.co/JwKRkYJB/5108.jpg",
        "https://i.ibb.co/9mR05KDR/5109.jpg",
        "https://i.ibb.co/tp9bNh2K/5110.jpg",
        "https://i.ibb.co/Z6S2kCXZ/5111.jpg",
        "https://i.ibb.co/FkMHcJZn/5112.jpg",
      ],
    },
    {
      title: "Yuva Protsahan",
      images: [
        "https://i.ibb.co/4gpqXCGK/5103.jpg",
        "https://i.ibb.co/GfG2Dr4p/5104.jpg",
      ],
    },
    {
      title: "Vidhik Sewa Divas",
      images: [
        "https://i.ibb.co/N21RShQP/5095.jpg",
        "https://i.ibb.co/r2WncpQt/5096.jpg",
        "https://i.ibb.co/qLk2FxJS/5097.jpg",
        "https://i.ibb.co/nMQDmJ7f/5098.jpg",
        "https://i.ibb.co/fGQ0d6MF/5100.jpg",
        "https://i.ibb.co/RTz6BNKG/5101.jpg",
        "https://i.ibb.co/CpvPT5vP/5102.jpg",
      ],
    },
    {
      title: "Tree Plantation",
      images: [
        "https://i.ibb.co/zV8J9xWF/5091.jpg",
        "https://i.ibb.co/hx8WxPXL/5092.jpg",
        "https://i.ibb.co/27v5GRk9/5093.jpg",
        "https://i.ibb.co/0jmj8DPj/5094.jpg",
      ],
    },
    {
      title: "Swachh Bharat",
      images: [
        "https://i.ibb.co/nqdyQVPB/5079.jpg",
        "https://i.ibb.co/vxfskYWK/5080.jpg",
        "https://i.ibb.co/KjvY3HnF/5081.jpg",
        "https://i.ibb.co/FLnQxGqM/5082.jpg",
        "https://i.ibb.co/B2LdYpmQ/5084.jpg",
        "https://i.ibb.co/v0mdBCC/5086.jpg",
        "https://i.ibb.co/tpGmMTGG/5087.jpg",
        "https://i.ibb.co/d49Bq3Q0/5089.jpg",
        "https://i.ibb.co/yMf1Cw3/5090.jpg",
      ],
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Gallery
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-semibold text-blue-800 mb-6 border-l-4 border-blue-700 pl-3">
              {section.title}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {section.images.map((src, i) => (
                <div
                  key={i}
                  className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={src}
                    alt={`${section.title} ${i + 1}`}
                    loading="lazy"
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
