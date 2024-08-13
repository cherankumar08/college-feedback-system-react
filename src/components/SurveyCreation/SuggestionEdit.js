import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchCourseQuestions } from "../../Slice/courseQuestionsSlice";
import SurveyTitle from "../SurveyTitle";
import {
  deleteQuestion,
  updateQuestion,
  fetchCourseQuestions,
} from "../../Slice/SuggestionSlice";

const SuggestionEdit = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.surveyOnSuggestion.questions);
  const status = useSelector((state) => state.surveyOnSuggestion.status);
  const error = useSelector((state) => state.surveyOnSuggestion.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCourseQuestions());
    }
  }, [status, dispatch]);

  const [editMode, setEditMode] = useState(false);
  const [questionValues, setQuestionValues] = useState({});
  const [questionCounter, setQuestionCounter] = useState(0);
  const headings = ["Infrastructure Development", "Academic Development"];

  useEffect(() => {
    setQuestionCounter(questions.length);
  }, [questions]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
    dispatch(updateQuestion(questionValues));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setQuestionValues({
      ...questionValues,
      [id]: value,
    });
  };

  const handleDelete = (questionId) => {
    dispatch(deleteQuestion(questionId));
    document.getElementById(`questionRow${questionId}`).style.display = "none";
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="m-5">
      <div className="mt-5">
        <SurveyTitle SurveyTitle="Edit Questions" />
      </div>
      <p className="h5 text-center my-5">
        Survey on Suggestions and Improvements
      </p>
      <div className="container">
        <div className="creation-of-questions">
          <div className="questions-dynamic">
            <form className="row" id="questionForm">
              {questions.map((question, id) => (
                <div
                  key={question.id}
                  className="row mb-3"
                  id={`questionRow${question.id}`}
                >
                  <div>
                    {Number.isInteger(id / 5) ? (
                      <SurveyTitle SurveyTitle={headings[id / 5]} />
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="form-group col-md-8">
                    <label htmlFor={`question${question.id}`}>
                      {question.id}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tap to type the question"
                      id={question.id}
                      value={
                        questionValues[question.id] || `${question.question}`
                      }
                      readOnly={!editMode}
                      onChange={handleChange}
                    />
                    <small className={`DisplayError${question.id}`}></small>
                  </div>
                  <div className="form-group col-md-3 mt-4">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(question.id)}
                    >
                      <span>
                        <i className="bi bi-trash"></i>
                      </span>
                    </button>
                    <small
                      className={`DisplayErrorSelect${question.id}`}
                    ></small>
                  </div>
                </div>
              ))}
              {questionCounter % 5 === 0 && questionCounter !== 0 && (
                <div key="helloWorld" className="row mb-3">
                  <div className="form-group col-md-8">
                    {/* <label>Hello World</label> */}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
        <div className="col-md-12 d-flex justify-content-center mt-4">
          {!editMode && (
            <button
              type="button"
              className="btn btn-success"
              id="editButton"
              onClick={handleEdit}
            >
              Edit
            </button>
          )}
          {editMode && (
            <button
              type="button"
              className="btn btn-success"
              id="submitButton"
              onClick={handleSave}
            >
              <span>
                <i className="bi bi-floppy me-2"></i>
              </span>
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuggestionEdit;
