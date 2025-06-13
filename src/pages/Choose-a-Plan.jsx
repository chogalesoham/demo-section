import React, { useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import { Link } from "react-router-dom";

const plans = [
  { title: "Monthly Plan", price: "₹340" },
  { title: "Quarterly Plan", price: "₹1000" },
  { title: "Half Yearly Plan", price: "₹2000" },
  { title: "Yearly Plan", price: "₹3999" },
];

const ChoosePlan = () => {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(null);
  const handleSelect = (index) => {
    setSelectedPlanIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-gradient-to-br from-[#da97ed] to-[#6b96e6] min-h-screen w-full flex flex-col items-center justify-between p-4">
      <h1 className="text-xl md:text-[48px] font-bold text-center text-white mb-4 font-poppins">
        Choose a Plan for Yourself
      </h1>

      <div className="flex flex-col gap-3 w-full max-w-[700px] px-1">
        {plans.map((plan, index) => {
          const isSelected = selectedPlanIndex === index;
          return (
            <div
              key={index}
              onClick={() => handleSelect(index)}
              className="cursor-pointer"
            >
              <div
                className={`relative h-[100px] flex justify-between items-center px-4 py-2 rounded-xl shadow-lg transition-all duration-300 ${
                  isSelected
                    ? "bg-blue-100 border-4 border-[#C113F0] opacity-100"
                    : "bg-white opacity-80"
                }`}
              >
                <span
                  className={`absolute top-[-0px] left-[-0px] text-xs w-[90px] h-[32px] text-white font-medium rounded-tl-xl rounded-br-xl flex items-center justify-center ${
                    isSelected ? "bg-[#263CE0]" : "bg-[#263CE066]"
                  }`}
                >
                  {isSelected ? "Popular" : ""}
                </span>
                <h2 className="text-[26px] font-semibold text-[#000000B2] font-poppins">
                  {plan.title}
                </h2>
                <h2 className="text-[26px] font-bold text-[#000000B2] font-poppins">
                  {plan.price}
                </h2>
                <div className="h-6 w-6 border border-[#54C025] shadow-md rounded-full bg-white absolute top-[-6px] right-[-6px] flex items-center justify-center">
                  {isSelected && (
                    <MdOutlineDone className="text-[#54C025] text-lg font-bold" />
                  )}
                </div>
              </div>
              {isSelected && (
                <pre className="text-lg mt-1 text-white font-poppins">
                  Quarterly plan Bill + Taxes Applicable
                </pre>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-3 w-full max-w-[414px] px-2">
        <Link to="/payment">
          <button className="bg-white w-full rounded-full shadow-md font-bold py-2 text-sm hover:bg-gray-100 transition cursor-pointer">
            Proceed to Pay
          </button>
        </Link>
        <Link to="/" className="flex items-center justify-center">
          <button className="text-white font-bold text-sm text-center hover:text-gray-200 transition">
            View Plans Again
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ChoosePlan;
