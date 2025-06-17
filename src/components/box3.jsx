import React from "react";

const Box3 = () => {
  return (
    <div>
      <div>
        <img
          src="/images/img_group_112.png"
          alt="progress line"
          className="absolute left-[407px] top-[1211px] w-[873px] h-[18px]"
        />
        <p className="absolute left-[780px] top-[1207px] text-[24px] font-bold leading-[35px] text-[#0000006b] font-istok-web">
          Level Up
        </p>
      </div>

      <div className=" relative bg-amber-200">
        <div className="absolute left-[480px] top-[410px] w-[728px] h-[658px] border-8 border-transparent border-t-[#D9D9D9] border-l-[#D9D9D9] border-b-[#D9D9D9] rounded-full"></div>

        <div className="absolute left-[512px] top-[472px] w-[100px] h-[100px] bg-white border-4 border-[#0000003f] rounded-r-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] cursor-pointer hover:shadow-lg transition-shadow">
          <img
            src="/images/img_image_10.png"
            alt="level marker"
            className="absolute left-[10px] top-[12px] w-[80px] h-[80px]"
          />
        </div>

        <div className="absolute left-[660px] top-[990px] w-[100px] h-[100px] bg-white border-4 border-[#0000003f] rounded-r-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] cursor-pointer hover:shadow-lg transition-shadow">
          <img
            src="/images/img_image_10.png"
            alt="level marker"
            className="absolute left-[10px] top-[10px] w-[80px] h-[80px]"
          />
        </div>

        <div className="absolute left-[951px] top-[430px] w-[148px] h-[45px] bg-white border-5 border-[#0000003f] rounded-[20px] shadow-[0_10px_4px_rgba(0,0,0,0.25)] flex items-center justify-center">
          <button className="text-[24px] font-semibold leading-[36px] text-[#0000006b] font-poppins bg-transparent border-none shadow-none hover:bg-gray-50">
            Start
          </button>
        </div>
        <div>
          <div className="absolute left-[844px] top-[345px] w-[130px] h-[130px] bg-white border-5 border-[#0000003f] rounded-[20px] shadow-[0_10px_4px_rgba(0,0,0,0.25)]">
            <div className="absolute left-[10px] top-[10px] w-[100px] h-[100px] bg-white border-5 border-[#CB6BE5] rounded-[20px] shadow-[0_10px_4px_rgba(0,0,0,0.25)] cursor-pointer hover:shadow-lg transition-shadow">
              <img
                src="/images/img_play_sign.png"
                alt="play button"
                className="absolute left-[12px] top-[18px] w-[68px] h-[58px]"
              />
            </div>
          </div>

          <img
            src="/images/img_image_8.png"
            alt="treasure chest"
            className="absolute left-[449px] top-[740px] w-[140px] h-[140px]"
          />
          <img
            src="/images/img_image_9.png"
            alt="trophy"
            className="absolute left-[927px] top-[948px] w-[140px] h-[140px]"
          />

          <img
            src="/images/img_ellipse_26.svg"
            alt="decoration"
            className="absolute left-[661px] top-[842px] w-[236px] h-[40px]"
          />

          <img
            src="/images/img_mascotremovebgpreview_5.png"
            alt="character mascot"
            className="absolute left-[650px] top-[550px] w-auto h-[364px]"
          />

          <div className="absolute left-[980px] top-[669px] w-[90px] h-[90px] bg-[#9c73f4] border-4 border-gradient-to-br from-[#da97ed] to-[#00000082] rounded-full shadow-[2px_4px_5px_rgba(0,0,0,0.25)]">
            <img
              src="/images/img_headphones_3.png"
              alt="headphones icon"
              className="absolute left-[20px] top-[18px] w-[45px] h-[45px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box3;
