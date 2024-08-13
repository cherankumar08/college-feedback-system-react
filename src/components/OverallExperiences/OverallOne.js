import React from "react";
import "../Buttons/SubmissionButton";
import SurveyTitles from "../SurveyTitles/SurveyTitles";
import SubmissionButton from "../Buttons/SubmissionButton";

// Getting the QuestionNumbers,Question,Options,Labels
const LinearScaleQuestion = ({
  questionNumber,
  questionText,
  options,
  label,
}) => {
  // Styles
  const linearScaleStyle = {
    display: "flex",
    justifyContent: "center",
  };

  // Dynamic Rendring of the Questions
  return (
    <div className={`question-1 qn-check-T1 question-${questionNumber}`}>
      {/* This <P> will gives the Question with Question Number */}
      <p className="">
        {questionNumber}.{questionText}
      </p>
      {/* This div will Display the Options in a linear Format like 1-5 */}
      <div
        id={`linear-scale-T1-${questionNumber}`}
        className="lineraScaleAjustment"
        style={linearScaleStyle}
      >
        {/* This will display the Label "Very Poor" */}
        <p className="labelStyle">{label[0]}</p>
        {/* Dynamic Generation of the Options with Label 1-5 */}
        {options.map((option, index) => (
          // Div for the Option
          <div key={index} className="linear-scale-qn">
            {/* Label for 1-5 */}
            <label
              className="radio-label"
              htmlFor={`Overall_Tab-1-qn-${questionNumber}-rating${questionNumber}_${
                index + 1
              }`}
            >
              {option.label}
            </label>
            {/* Radio Buttons */}
            <input
              type="radio"
              name={`Overall_Tab-1-rating-${questionNumber}-qn-${questionNumber}`}
              value={option.value}
              id={`Overall_Tab-1-qn-${questionNumber}-rating${questionNumber}_${
                index + 1
              }`}
            />
          </div>
        ))}
        {/* This is the Label for the Very Good */}
        <p className="labelStyle1">{label[1]}</p>
      </div>
    </div>
  );
};

const OverallOne = () => {
  const questions = [
    {
      number: 1,
      text: "On a scale of 1 to 5, how would you rate the quality and functionality of the classrooms and lecture halls at the college?",
      options: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
      ],
      label: ["Not Satisfied", "Satisfied Very well"],
    },
    {
      number: 2,
      text: "Are the classroom facilities well-equipped with modern technology and resources for effective learning?",
      options: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
      ],
      label: ["Not Satisfied", "Satisfied Very well"],
    },
    {
      number: 3,
      text: "How satisfied are you with the availability of study areas and quiet places on campus for academic purposes?",
      options: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
      ],
      label: ["Not Satisfied", "Satisfied Very well"],
    },
    {
      number: 4,
      text: "Do you think the library resources, including books, journals, and online databases, meet your academic needs?",
      options: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
      ],
      label: ["Not Satisfied", "Satisfied Very well"],
    },
    {
      number: 5,
      text: "Are there any improvements or specific changes you would like to see in the academic facilities?",
      options: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
      ],
      label: ["Not Satisfied", "Satisfied Very well"],
    },
  ];

  return (
    <div>
      <SurveyTitles SubjectName="Overall Experiences" SubjectFaculty="" />

      <div className="Question-bor">
        {questions.map((question) => (
          <LinearScaleQuestion
            key={question.number}
            questionNumber={question.number}
            questionText={question.text}
            options={question.options}
            label={question.label}
            className="text-left"
          />
        ))}
        <SubmissionButton TabNo="1" SurveyName="Overall Experiences" />
      </div>
    </div>
  );
};

export default OverallOne;
