import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseQuestions } from "../../../../Slice/OverallexpQnSlice";
import LinearScaleQuestion from "../../../../components/LinearScale/LinearScaleQuestion";
import SurveyTitles from "../../../../components/SurveyTitles/SurveyTitles";
import SubmissionButton from "../../../../components/Buttons/SubmissionButton";

const OverallExpT1 = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.overallquestions.questions);

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
      <SurveyTitles SubjectName=" Overall Experiences " SubjectFaculty="" />
      {questions
        .filter((value, index) => index >= 0 && index < 5)
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
              currentSubject=" Overall Experiences"
              sliceToDispatch="pushOverallExpRes"
            />
          </div>
        ))}
      <SubmissionButton
        TabNo="1"
        SurveyName="Overall Experiences"
        courseSurvey={questions}
        selectedOptions={selectedOption}
        start={0}
        end={6}
      />
    </div>
  );
};

export default OverallExpT1;
