import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseQuestions } from "../../Slice/instructorSurveyQnSlice";
import LinearScaleQuestion from "../LinearScale/LinearScaleQuestion";
import SurveyTitles from "../SurveyTitles/SurveyTitles";
import SubmissionButton from "../Buttons/SubmissionButton";

const InstructorSurveyThird = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.instructorquestions.questions);

  // console.log(courseSurvey.length);

  let temp = Array(questions.length).fill(null);

  const [selectedOption, setSelectedOption] = useState(temp);

  // console.log(selectedOption);

  // Dispatching
  useEffect(() => {
    dispatch(fetchCourseQuestions());
  }, [dispatch]);

  function handleOption(id, option) {
    let cloneOptions = [...selectedOption];
    cloneOptions[id] = option;
    setSelectedOption(cloneOptions);
  }

  return (
    <div>
      <SurveyTitles SubjectName="Dr.John Johnson" SubjectFaculty={null} />
      {questions
        .filter((value, index) => index >= 10 && index < 15)
        .map((course) => (
          <div key={course.id}>
            <LinearScaleQuestion
              questionNumber={course.id}
              questionText={course.question}
              option={course.option}
              label={course.label}
              tabNo={course.TabNo}
              className="text-left"
              handleOptionChange={handleOption}
              start={10}
              currentSubject="Dr.John Johnson"
              sliceToDispatch="pushStdInstructorRes"
            />
          </div>
        ))}
      <SubmissionButton
        TabNo="3"
        SurveyName="CourseSurvey"
        courseSurvey={questions}
        selectedOptions={selectedOption}
        start={11}
        end={16}
      />
    </div>
  );
};

export default InstructorSurveyThird;
