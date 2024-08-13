import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseQuestions } from "../../../../Slice/ExtracurricularSlice";
import LinearScaleQuestion from "../../../../components/LinearScale/LinearScaleQuestion";
import SurveyTitles from "../../../../components/SurveyTitles/SurveyTitles";
import SubmissionButton from "../../../../components/Buttons/SubmissionButton";

const ExtracurricularT1 = () => {
  const dispatch = useDispatch();
  const questions = useSelector(
    (state) => state.extracurricularActivities.questions
  );

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
      <SurveyTitles SubjectName=" Events " SubjectFaculty="" />
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
              currentSubject=" Events "
            />
          </div>
        ))}
      <SubmissionButton
        TabNo="4"
        SurveyName="Extracurricular Activities Survey"
        courseSurvey={questions}
        selectedOptions={selectedOption}
        start={0}
        end={6}
      />
    </div>
  );
};

export default ExtracurricularT1;
