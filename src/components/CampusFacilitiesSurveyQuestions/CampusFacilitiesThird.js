import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseQuestions } from "../../Slice/CampusFacilitiesSlice";
import LinearScaleQuestion from "../LinearScale/LinearScaleQuestion";
import SurveyTitles from "../SurveyTitles/SurveyTitles";
import SubmissionButton from "../Buttons/SubmissionButton";

const CampusFacilitiesThird = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.campusfacilities.questions);

  // console.log(courseSurvey.length);

  let temp = Array(questions.length).fill(null);

  const [selectedOption, setSelectedOption] = useState(temp);

  // console.log(selectedOption);

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
      <SurveyTitles SubjectName="Library" SubjectFaculty="" />
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
              currentSubject="Support Services"
              sliceToDispatch="pushStdFacilitiesRes"
            />
          </div>
        ))}
      <SubmissionButton
        TabNo="1"
        SurveyName="Campus Facilities Survey"
        courseSurvey={questions}
        selectedOptions={selectedOption}
        start={0}
        end={6}
      />
    </div>
  );
};

export default CampusFacilitiesThird;
