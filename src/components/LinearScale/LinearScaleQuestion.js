import React, { useState } from "react";
import "../../sass/index.scss";
import { useDispatch, useSelector } from "react-redux";
import { pushOptionToServer } from "../../Slice/pushOptionToServer";
import { pushStdInstructorRes } from "../../Slice/pushToServer/pushStdInstructorRes";
import { pushStdServicesRes } from "../../Slice/pushToServer/pushStdServicesRes";
import { pushStdFacilitiesRes } from "../../Slice/pushToServer/pushStdFacilitiesRes";
import { pushExtracurricularRes } from "../../Slice/pushToServer/pushExtracurricularRes";
import { pushOverallExpRes } from "../../Slice/pushToServer/pushOverallExpRes";
import { pushSuggestionsRes } from "../../Slice/pushToServer/pushSuggestionsRes";
import { pushOverallExpSecondStd } from "../../Slice/pushToServer/pushOverallExpSecondStd";
import { pushFacultyFacilitiesRes } from "../../Slice/pushToServer/pushFacultyFacilitiesRes";

const LinearScaleQuestion = ({
  questionNumber,
  questionText,
  option,
  label,
  tabNo,
  start,
  TabNo,
  currentSubject,
  sliceToDispatch,
}) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);

  const linearScaleStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const handleOptionChange = (questionIndex, value) => {
    setSelectedOption(value);
    const username = localStorage.getItem("username"); // Retrieve username from local storage

    const StudentEmail = `${username}`;
    const QuestionNumber = `${questionIndex + 1}`;
    const SubjectName = `${currentSubject}`;
    const selectedOption = `${value}`;

    switch (sliceToDispatch) {
      case "pushOptionToServer":
        dispatch(
          pushOptionToServer(
            StudentEmail,
            QuestionNumber,
            SubjectName,
            selectedOption
          )
        );
        break;
      case "pushStdInstructorRes":
        dispatch(
          pushStdInstructorRes(
            StudentEmail,
            QuestionNumber,
            SubjectName,
            selectedOption
          )
        );
        break;
      case "pushStdServicesRes":
        dispatch(
          pushStdServicesRes(
            StudentEmail,
            QuestionNumber,
            SubjectName,
            selectedOption
          )
        );
        break;
      case "pushStdFacilitiesRes":
        dispatch(
          pushStdFacilitiesRes(
            StudentEmail,
            QuestionNumber,
            SubjectName,
            selectedOption
          )
        );
      case "pushExtracurricularRes":
        dispatch(
          pushExtracurricularRes(
            StudentEmail,
            QuestionNumber,
            SubjectName,
            selectedOption
          )
        );
        break;
      case "pushOverallExpRes":
        dispatch(
          pushOverallExpRes(
            StudentEmail,
            QuestionNumber,
            SubjectName,
            selectedOption
          )
        );
        break;
      case "pushOverallExpSecondStd":
        dispatch(
          pushOverallExpSecondStd(
            StudentEmail,
            QuestionNumber,
            SubjectName,
            selectedOption
          )
        );
        break;
      case "pushSuggestionsRes":
        dispatch(
          pushSuggestionsRes(
            StudentEmail,
            QuestionNumber,
            SubjectName,
            selectedOption
          )
        );
        break;
      case "pushFacultyFacilitiesRes":
        dispatch(
          pushFacultyFacilitiesRes(
            StudentEmail,
            QuestionNumber,
            SubjectName,
            selectedOption
          )
        );

      default:
        break;
    }

    console.log(
      `User selected option for question ${questionIndex + 1}:`,
      value
    );
  };

  return (
    <div
      className={`question-1 qn-check-T${TabNo} question-${questionNumber} Question-bor my-3`}
    >
      <p className="">
        {start === 0
          ? `${questionNumber - start}.${questionText}`
          : `${questionNumber - start}.${questionText}`}
      </p>
      <div
        id={`linear-scale-${questionNumber}`}
        className="lineraScaleAjustment"
        style={linearScaleStyle}
      >
        <p className="labelStyle">{label[0]}</p>
        {Array.isArray(option) ? (
          option.map((opt, index) => (
            <div key={index} className="linear-scale-qn">
              <label
                className="radio-label"
                htmlFor={`Tab-${tabNo}-qn-${questionNumber}-rating${questionNumber}_${
                  index + 1
                }`}
              >
                {opt.label}
              </label>
              <input
                type="radio"
                name={`Tab-${tabNo}-rating-${questionNumber}-qn-${questionNumber}`}
                value={opt.value}
                id={`Tab-${tabNo}-qn-${questionNumber}-rating${questionNumber}_${
                  index + 1
                }`}
                onChange={(event) =>
                  handleOptionChange(questionNumber - 1, event.target.value)
                }
              />
            </div>
          ))
        ) : (
          <p>Options are not available</p>
        )}
        <p className="labelStyle1">{label[1]}</p>
      </div>
    </div>
  );
};

export default LinearScaleQuestion;
