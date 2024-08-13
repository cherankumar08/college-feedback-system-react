import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseQuestions } from "../../Slice/CourseSurveySlice";
import LinearScaleQuestion from "../LinearScale/LinearScaleQuestion";
import SurveyTitles from "../SurveyTitles/SurveyTitles";
import SubmissionButton from "../Buttons/SubmissionButton";

const CourseSurveyFour = () => {
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
        SubjectName="Theory Of Computation"
        SubjectFaculty="Dr.John Johnson"
      />
      {courseSurvey
        .filter((value, index) => index >= 15 && index < 20)
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
              start={15}
            />
          </div>
        ))}
      <SubmissionButton
        TabNo="4"
        SurveyName="CourseSurvey"
        courseSurvey={courseSurvey}
        selectedOptions={selectedOption}
        start={16}
        end={21}
      />
    </div>
  );
};

export default CourseSurveyFour;
