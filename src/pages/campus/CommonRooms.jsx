import React from "react";

const CommonRooms = () => {
  const boys = [
"    https://i.ibb.co/LXxCRnJ5/55.jpg",
"https://i.ibb.co/nsCbw9cF/54.jpg"
  ];
  const girls = [
"    https://i.ibb.co/LdWhxbzx/53.jpg",
"https://i.ibb.co/bgYWRP6X/52.jpg"
  ];

  return (
    <div className="bg-white text-gray-800">
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Common Rooms
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            Common Room (Boys)
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {boys.map((src, i) => (
              <img key={i} src={src} alt="Boys Room" className="rounded-lg shadow-md object-cover w-full h-60" />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            Common Room (Girls)
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {girls.map((src, i) => (
              <img key={i} src={src} alt="Girls Room" className="rounded-lg shadow-md object-cover w-full h-60" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommonRooms;
