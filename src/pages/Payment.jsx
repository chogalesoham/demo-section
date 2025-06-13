import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineDone } from "react-icons/md";
import cart1 from "../assets/cart1.png";
import cart2 from "../assets/cart2.png";
import cart3 from "../assets/cart3.png";
import cart4 from "../assets/cart4.png";
import cart5 from "../assets/cart5.png";
import cart6 from "../assets/cart6.png";

const Payment = () => {
  return (
    <div className="main-bg min-h-screen w-full flex flex-col items-center justify-center p-2 sm:p-6">
      <div className="flex items-center justify-center gap-3 ">
        <h2 className="text-4xl sm:text-[54px] text-white font-bold text-center">
          QUIZIT
        </h2>
        <button className="font-semibold text-center w-[90px] sm:w-[113px] h-[40px] sm:h-[45px] text-amber-400 text-xl sm:text-2xl rounded-tl-2xl rounded-br-2xl bg-[linear-gradient(90deg,#263ce0_0%,#4fd124_100%)]">
          PRO
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-center w-full gap-6 mt-3">
        <div className="w-full max-w-[700px] rounded-xl p-6 space-y-6">
          <div className="w-full rounded-[20px]">
            <button className="w-full h-full bg-white bg-opacity-80 text-[#00000099] font-semibold text-[20px] sm:text-[24px] px-4 py-2 rounded-[20px]">
              Selected Plan: <span>Quarterly Plan</span> <br />
              <span className="text-blue-500 underline text-sm flex items-center justify-center mt-1">
                Change Plan <IoIosArrowForward className="mt-1 ml-1" />
              </span>
            </button>
          </div>

          <div className="w-full rounded-[20px]">
            <button className="w-full h-full bg-white bg-opacity-80 text-[#00000099] font-semibold text-[20px] sm:text-[24px] px-4 py-2 rounded-[20px]">
              Billing Amount: ₹1000{" "}
              <span className="text-sm font-normal">
                /Qtr + Taxes Applicable
              </span>
              <br />
              <span className="text-blue-500 underline text-sm flex items-center justify-center mt-1">
                Change Plan <IoIosArrowForward className="mt-1 ml-1" />
              </span>
            </button>
          </div>
          <div>
            <h2 className="font-medium text-[24px] sm:text-[32px] leading-[25px] text-[#263CE0] font-poppins">
              What's included in Your Plan:
            </h2>
            <div className="space-y-2">
              {[
                "Email Support",
                "Unlimited quizzes",
                "All Types of Quizzes",
                "Advanced Analytics",
                "AI Quiz Generation",
                "Custom Branding",
                "Team Collaboration",
                "Priority Support",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-white mt-3"
                >
                  <p className="font-poppins text-[18px] sm:text-[20px] leading-[100%] text-center">
                    {feature}
                  </p>
                  <MdOutlineDone className="text-[24px] text-white" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-[4px] bg-white h-auto min-h-[560px]"></div>

        <div className="w-full max-w-[550px] rounded-xl p-4 space-y-4">
          <h2 className="text-[28px] sm:text-[36px] font-semibold font-poppins text-white">
            Billing Plan
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <button className="rounded-xl h-[32px] px-2 flex items-center justify-center gap-1 border border-white">
              <img src={cart1} className="w-[30px] h-[25px] object-center" />
              Card
            </button>
            <button className="rounded-xl h-[32px] px-2 flex items-center justify-center gap-1 border border-white">
              <img src={cart2} className="w-[30px] h-[25px] object-center" />
              UPI
            </button>
            <button className="rounded-xl h-[32px] px-2 flex items-center justify-center gap-1 border border-white">
              <img src={cart3} className="w-[30px] h-[25px] object-center" />
              Banking
            </button>
          </div>

          <form className="space-y-4 bg-white p-4 rounded-xl">
            <h3 className="font-poppins font-semibold text-[24px] sm:text-[32px]">
              Card
            </h3>
            <div className="w-full border rounded-lg px-4 py-2 flex items-center justify-between">
              <p className="text-[16px] text-gray-700">Card No</p>
              <div className="flex gap-2">
                <img src={cart4} alt="Card type 1" className="h-6" />
                <img src={cart5} alt="Card type 2" className="h-6" />
              </div>
            </div>

            <div className="w-full border rounded-lg px-4 py-2">
              <pre className="text-[16px] text-gray-700">
                Expiry Date : MM/YY
              </pre>
            </div>

            <div className="w-full border rounded-lg px-4 py-2 flex items-center justify-between">
              <pre className="text-[16px] text-gray-700">CVV :</pre>
              <img src={cart6} alt="CVV icon" className="h-6" />
            </div>

            <p className="text-sm text-gray-500 font-poppins">
              * By providing your card details you authorize QUIZITT to charge
              your card in accordance with its Terms & Conditions.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between my-2 sm:my-4">
              <div className="flex w-full sm:w-[233px] h-[52px] items-center gap-2 text-gray-700 border py-3 px-3 rounded-2xl relative">
                <span className="absolute bg-white top-[-13px] font-bold px-2 text-xs">
                  Kindly Enter OTP:
                </span>
                <span className="tracking-widest text-2xl sm:text-4xl font-mono pl-6">
                  _ _ _ _
                </span>
              </div>
              <button className="mt-4 sm:mt-0 flex w-full sm:w-[200px] h-[52px] items-center gap-2 font-bold text-[#263CE0] border border-[#00000040] py-3 px-3 rounded-2xl justify-between">
                Verify OTP{" "}
                <FaRegCircleCheck className="w-[32px] h-[32px] text-[#54C025]" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
