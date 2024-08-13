import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseQuestions } from "../../Slice/instructorSurveyQnSlice";
import LinearScaleQuestion from "../LinearScale/LinearScaleQuestion";
import SurveyTitles from "../SurveyTitles/SurveyTitles";
import SubmissionButton from "../Buttons/SubmissionButton";

const InstructorSurveyFifth = () => {
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
      <SurveyTitles SubjectName="Dr.Michael Brown" SubjectFaculty={null} />
      {questions
        .filter((value, index) => index >= 20 && index < 25)
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
              start={20}
              currentSubject="Dr.Michael Brown"
              sliceToDispatch="pushStdInstructorRes"
            />
          </div>
        ))}
      <SubmissionButton
        TabNo="3"
        SurveyName="CourseSurvey"
        courseSurvey={questions}
        selectedOptions={selectedOption}
        start={21}
        end={25}
      />
    </div>
  );
};

export default InstructorSurveyFifth;
