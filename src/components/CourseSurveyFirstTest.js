import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseQuestions } from "../Slice/CourseSurveySlice";
import LinearScaleQuestion from "./LinearScale/LinearScaleQuestion";
import SurveyTitles from "./SurveyTitles/SurveyTitles";
import SubmissionButton from "./Buttons/SubmissionButton";

const CourseSurveyFirstTest = () => {
  // Dispatching the Questions From The Json Server
  const dispatch = useDispatch();
  const { courseSurvey, error, isLoading } = useSelector(
    (state) => state.courseSurvey
  );

  console.log("This is course survery:",courseSurvey);

  // console.log(courseSurvey.length);

  const [selectedOption, setSelectedOption] = useState(
    Array(courseSurvey.length).fill(null)
  );

  // console.log(selectedOption);

  useEffect(() => {
    dispatch(getCourseQuestions());
  }, [dispatch]);

  function handleOption(id, option) {
    let cloneOptions = [...selectedOption];
    cloneOptions[id] = option;
    setSelectedOption(cloneOptions);
  }

  return (
    <div>
      <SurveyTitles
        SubjectName="Distributed System"
        SubjectFaculty="Professor Michael Brown"
      />
      {courseSurvey
        .filter((value, index) => index < 5)
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
              start={0}
              currentSubject="Distributed Systems"
            />
          </div>
        ))}
      <SubmissionButton
        TabNo="1"
        SurveyName="CourseSurvey"
        courseSurvey={courseSurvey}
        selectedOptions={selectedOption}
        start={0}
        end={5}
      />
    </div>
  );
};

export default CourseSurveyFirstTest;
