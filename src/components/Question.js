import React from "react";

const Question = ({ questionData }) => {
  const handleSubmit = () => {
    // Handle submission logic here
    console.log("Submitted successfully!");
  };

  return (
    <div className="question bor-ques Inst-T1">
      <div className="question-1 qn-check-T1">
        <p>{questionData.question}</p>
        <div id="linear-scale">
          <p>{questionData.scaleLabels[0]}</p>
          {questionData.options.map((option, index) => (
            <div className="linear-scale-qn" key={index}>
              <label
                className="radio-label"
                htmlFor={`${questionData.id}-rating${index + 1}`}
              >
                {option}
              </label>
              <input
                type="radio"
                name={`${questionData.id}`}
                value={option}
                id={`${questionData.id}-rating${index + 1}`}
              />
            </div>
          ))}
          <p>{questionData.scaleLabels[1]}</p>
        </div>
      </div>
      <div className="disPlayErr"></div>
      <div className="submit-button">
        <button className="btn btn-purple" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Question;
