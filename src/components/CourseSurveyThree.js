import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseQuestions } from "../Slice/CourseSurveySlice";
import LinearScaleQuestion from "./LinearScale/LinearScaleQuestion";
import SurveyTitles from "./SurveyTitles/SurveyTitles";
import SubmissionButton from "./Buttons/SubmissionButton";

const CourseSurveyThree = () => {
  const dispatch = useDispatch();
  const { courseSurvey, error, isLoading } = useSelector(
    (state) => state.courseSurvey
  );

  // console.log(courseSurvey.length);

  let temp = Array(courseSurvey.length).fill(null);

  const [selectedOption, setSelectedOption] = useState(temp);

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
        SubjectName="Operating Systems"
        SubjectFaculty="Professor Emily"
      />
      {courseSurvey
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
            />
          </div>
        ))}
      <SubmissionButton
        TabNo="2"
        SurveyName="CourseSurvey"
        courseSurvey={courseSurvey}
        selectedOptions={selectedOption}
        start={11}
        end={16}
      />
    </div>
  );
};

export default CourseSurveyThree;
