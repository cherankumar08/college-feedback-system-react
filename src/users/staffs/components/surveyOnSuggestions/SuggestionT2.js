import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseQuestions } from "../../../../Slice/SuggestionSlice";
import LinearScaleQuestion from "../../../../components/LinearScale/LinearScaleQuestion";
import SurveyTitles from "../../../../components/SurveyTitles/SurveyTitles";
import SubmissionButton from "../../../../components/Buttons/SubmissionButton";

const SuggestionT2 = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.surveyOnSuggestion.questions);

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
      <SurveyTitles SubjectName=" Academic Development " SubjectFaculty="" />
      {questions
        .filter((value, index) => index >= 5 && index < 10)
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
              start={5}
              currentSubject="Academic Development"
              sliceToDispatch="pushSuggestionsRes"
            />
          </div>
        ))}
      <SubmissionButton
        TabNo="4"
        SurveyName="Campus Services Survey"
        courseSurvey={questions}
        selectedOptions={selectedOption}
        start={20}
        end={25}
      />
    </div>
  );
};

export default SuggestionT2;
