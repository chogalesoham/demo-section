import React, { useEffect, useState } from "react";
import axios from "axios";

const UnitAssessmentSummaryDashboard = () => {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    const fetchAllStats = async () => {
      const userId = "684818d38f521618ce75cc75";
      const subtopicIds = [1, 2, 3]; // Example units

      try {
        const fetchedData = await Promise.all(
          subtopicIds.map(async (subId) => {
            const res = await axios.get(
              `http://localhost:3000/api/v1/score/stats/${userId}`
            );
            const stat = res.data.answerStats.find(
              (item) => item.subtopicId === subId
            );

            return {
              label: `Unit-1.1.${subId}`,
              answers: Array(10)
                .fill("")
                .map((_, i) => {
                  const correct = stat?.correctAnswers[i];
                  const wrong = stat?.wrongAnswers[i];
                  const skipped = stat?.skippedAnswers[i];

                  return {
                    id: correct || wrong || skipped || null,
                    type: correct
                      ? "correct"
                      : wrong
                      ? "wrong"
                      : skipped
                      ? "skipped"
                      : "none",
                  };
                }),
            };
          })
        );

        setUnits(fetchedData);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchAllStats();
  }, []);

  const statusToColorClass = {
    correct: "bg-[#8BD869]",
    wrong: "bg-[#F4161699]",
    skipped: "bg-[#81808099]",
    none: "bg-gray-200",
  };

  const handleNextClick = () => {
    console.log("Navigating to next unit...");
  };

  const handlePhysicsClick = () => {
    console.log("Physics subject selected");
  };

  const handleAssessmentClick = (unit, number) => {
    console.log(`Assessment ${number} clicked for ${unit}`);
  };

  const renderAssessmentHexagon = (assessment, unit) => (
    <div
      key={assessment.number}
      className={`relative w-[50px] h-[50px] flex items-center justify-center cursor-pointer font-inter font-semibold text-lg text-global-5 ${
        statusToColorClass[assessment.type]
      }`}
      onClick={() => handleAssessmentClick(unit, assessment.number)}
      style={{
        clipPath:
          "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
      }}
    >
      {assessment.type === "correct" ? assessment.id : assessment.number}
    </div>
  );

  const renderAssessmentRow = (unitData, unitName) => {
    return (
      <div className="relative w-[598px] h-[106px]">
        {unitData.map((assessment, index) => {
          // Calculate positions based on the hexagonal pattern
          const positions = [
            { x: 0, y: 0 }, // 1
            { x: 58, y: 33 }, // 2
            { x: 117, y: 0 }, // 3
            { x: 176, y: 33 }, // 4
            { x: 234, y: 0 }, // 5
            { x: 292, y: 33 }, // 6
            { x: 350, y: 0 }, // 7
            { x: 409, y: 33 }, // 8
            { x: 467, y: 0 }, // 9
            { x: 525, y: 33 }, // 10
          ];

          const position = positions[index];

          return (
            <div
              key={assessment.number}
              className="absolute"
              style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
              }}
            >
              {renderAssessmentHexagon(assessment, unitName)}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-global-1 flex flex-col">
      {/* Main Content Container */}
      <div className="w-[1280px] h-[1046px] mx-auto relative">
        {/* Unit Assessment Summary Header */}
        <div
          className="absolute top-[66px] left-[507px] w-[359px] h-[56px] flex items-center justify-center cursor-pointer border-4 border-[#6b96e666] rounded-[10px] bg-global-1"
          onClick={() => console.log("Unit Assessment Summary clicked")}
        >
          <span className="font-istok-web font-bold text-2xl leading-[35px] text-global-2">
            Unit-1.1 Assessment Summary
          </span>
        </div>

        {/* Module Section Container */}
        <div className="absolute top-[126px] left-[502px] w-[686px] h-[107px]">
          {/* Module Info Box */}
          <div className="absolute top-[18px] left-0 w-[686px] h-[89px] bg-global-1 border-4 border-[#6b96e666] rounded-[20px] flex flex-col justify-center pl-[52px]">
            <h2 className="font-istok-web font-bold text-[32px] leading-[47px] text-global-3 mb-1">
              Module-1 Section-1
            </h2>
            <p className="font-istok-web font-bold text-2xl leading-[35px] text-global-3">
              Newtons Law's Of Motion
            </p>
          </div>

          {/* Physics Subject Tag */}
          <button
            className="absolute top-0 right-0 w-[64px] h-[36px] bg-global-1 border-3 border-[#cb6be5] rounded-[10px] flex items-center justify-center cursor-pointer"
            onClick={handlePhysicsClick}
          >
            <span className="font-inter font-semibold text-xs leading-[15px] text-global-1">
              Physics
            </span>
          </button>
        </div>

        {/* Only render if units are loaded */}
        {units.length >= 3 ? (
          <>
            {/* Unit 1.1.1 Section */}
            <div className="absolute top-[278px] left-[537px]">
              <h3 className="font-inter font-bold text-2xl leading-[30px] text-global-4 mb-[18px]">
                Unit-1.1.1
              </h3>
              {renderAssessmentRow(units[0].answers, "Unit-1.1.1")}
            </div>

            {/* Unit 1.1.2 Section */}
            <div className="absolute top-[466px] left-[537px]">
              <h3 className="font-inter font-bold text-2xl leading-[30px] text-global-4 mb-[18px]">
                Unit-1.1.2
              </h3>
              {renderAssessmentRow(units[1].answers, "Unit-1.1.2")}
            </div>

            {/* Unit 1.1.3 Section */}
            <div className="absolute top-[666px] left-[537px]">
              <h3 className="font-inter font-bold text-2xl leading-[30px] text-global-4 mb-[18px]">
                Unit-1.1.3
              </h3>
              {renderAssessmentRow(units[2].answers, "Unit-1.1.3")}
            </div>
          </>
        ) : (
          <div className="text-center mt-10 text-lg text-gray-400">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
};

export default UnitAssessmentSummaryDashboard;
