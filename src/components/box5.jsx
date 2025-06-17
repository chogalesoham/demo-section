import React from "react";

const Box5 = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Play Button Container */}
      <div className="absolute left-[60%] z-30 top-[200px] w-[130px] h-[130px] bg-white border-[5px] border-[#0000003f] rounded-[20px] shadow-lg">
        <div className="absolute left-[10px] top-[10px] w-[100px] h-[100px] bg-white border-[5px] border-[#CB6BE5] rounded-[20px] shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
          <img
            src="/images/img_play_sign.png"
            alt="play button"
            className="absolute left-[12px] top-[18px] w-[68px] h-[58px]"
          />
        </div>
      </div>

      {/* Trophy */}
      <img
        src="/images/img_image_9.png"
        alt="trophy"
        className="absolute left-[61%] top-[700px] w-[140px] h-[140px] z-30"
      />

      {/* Level Marker */}
      <div className="absolute left-[22%] top-[481px] z-30 w-[100px] h-[100px] bg-white border-4 border-[#0000003f] rounded-r-[20px] shadow-md cursor-pointer hover:shadow-lg transition-shadow">
        <img
          src="/images/img_image_10.png"
          alt="level marker"
          className="absolute left-[10px] top-[10px] w-[80px] h-[80px]"
        />
      </div>

      {/* Decoration Ellipse */}
      <img
        src="/images/img_ellipse_26.svg"
        alt="decoration"
        className="absolute left-[42%] top-[690px] w-[236px] h-[40px]"
      />

      {/* Mascot */}
      <img
        src="/images/img_mascotremovebgpreview_5.png"
        alt="character mascot"
        className="absolute left-[42%] top-[350px] w-[242px] h-[364px]"
      />

      {/* Headphone Icon */}
      <div className="absolute left-[60%] top-[500px] w-[90px] h-[90px] bg-[#9c73f4] border-4 border-gradient-to-br from-[#da97ed] to-[#00000082] rounded-full shadow-md flex items-center justify-center">
        <img
          src="/images/img_headphones_3.png"
          alt="headphones icon"
          className="w-[45px] h-[45px]"
        />
      </div>

      {/* Curved Progress Border */}
      <div className="absolute left-[25%] top-[200px] w-[728px] h-[658px] border-[8px] border-transparent border-t-[#D9D9D9] border-l-[#D9D9D9] border-b-[#D9D9D9] rounded-full"></div>

      {/* Start Button */}
      <div className="absolute left-[72%] top-[280px] transform -translate-x-1/2 w-[148px] h-[45px] bg-white border-[5px] border-[#0000003f] rounded-[20px] shadow-lg flex items-center justify-center">
        <button className="text-xl font-semibold text-[#0000006b] font-poppins hover:bg-gray-100 transition">
          Start
        </button>
      </div>
    </div>
  );
};

export default Box5;
