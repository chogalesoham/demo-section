import React from "react";
import img1 from "../assets/img1.png";
import { MdOutlineDone } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-[#da97ed] to-[#6b96e6] w-full flex flex-col items-center justify-between md:p-2">
      <div className="flex flex-col md:flex-row w-full max-w-[845px] items-center justify-center md:gap-4 px-8">
        <h1 className="text-[#FFFFFF] font-poppins font-semibold text-center px-2 text-[38px] leading-tight md:leading-snug max-w-md md:max-w-none">
          <i>Master Concepts faster with</i> <b>QUIZITT PRO!</b>
        </h1>
        <img
          src={img1}
          alt="Quiz"
          className="h-[165px] w-auto object-contain"
        />
      </div>
      <div className="bg-[#FFFFFFB0] w-full max-w-[730px]  flex flex-col p-4 mx-10 md:p-6 shadow shadow-[#00000040] rounded-lg text-sm md:text-base relative z-20">
        <div className="grid grid-cols-3 gap-4 mb-2">
          <p className="text-[#000000] font-poppins text-[20px] font-normal"></p>
          <p className=" text-center text-[#000000] font-poppins text-[20px] font-normal">
            FREEMIUM
          </p>
          <p className="flex items-center justify-center">
            <button className=" text-center w-[90px] md:w-[123px] h-[35px] md:h-[35px] text-amber-400 text-[24px]  rounded-tl-2xl rounded-br-2xl bg-gradient-to-r from-[#263ce0] to-[#4fd124]">
              PRO
            </button>
          </p>
        </div>
        <hr className="my-2 border-[#000000]" />
        {[
          "Email Support",
          "Unlimited quizzes",
          "All Types of Quizzes",
          "Advanced Analytics",
          "AI Quiz Generation",
          "Custom Branding",
          "Team Collaboration",
          "Priority Support",
          "Offline Mode",
        ].map((feature, i) => (
          <React.Fragment key={i}>
            <div className="grid grid-cols-3 items-center">
              <p className="text-[#000000] font-poppins text-[16px] font-normal">
                {feature}
              </p>
              <p className="text-center flex items-center justify-center text-[#000000] font-poppins text-[20px] font-normal">
                {i === 0 ? <MdOutlineDone /> : "-"}
              </p>
              <p className="flex items-center justify-center text-[#000000] font-poppins text-[20px] font-normal">
                <MdOutlineDone />
              </p>
            </div>
            <hr className="h-[4px] mb-[1px] border-[#000000]" />
          </React.Fragment>
        ))}

        <div className=" bg-[#FFFFFF96] h-[390px] w-[180px] absolute top-[10px] right-[43px] rounded-lg z-[-1] hidden md:block"></div>
      </div>

      <div className="flex flex-col gap-4 mt-2 w-full max-w-[414px] px-2">
        <Link to={"/chooseplan"}>
          <button className="bg-white w-full rounded-lg shadow-md font-bold py-2 hover:bg-gray-100 transition cursor-pointer">
            Proceed to Pay
          </button>
        </Link>
        <Link to={"/"} className=" flex items-center justify-center">
          <button className="text-[#000000] font-bold text-center hover:text-gray-200 transition underline cursor-pointer">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
