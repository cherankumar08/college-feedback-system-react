import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseQuestions } from "../../Slice/courseQuestionsSlice";
import SurveyTitle from "../SurveyTitle";
import { deleteQuestion, updateQuestion } from "../../Slice/questionBankSlice";

const SurveyEdit = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.courseQuestions.questions);
  const status = useSelector((state) => state.courseQuestions.status);
  const error = useSelector((state) => state.courseQuestions.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCourseQuestions());
    }
  }, [status, dispatch]);

  const [editMode, setEditMode] = useState(false);
  const [questionValues, setQuestionValues] = useState({});
  const [questionCounter, setQuestionCounter] = useState(0);
  const headings = [
    "Distributed Sysetms",
    "Computer Networks",
    "Operating Systems",
    "Theory Of Computation",
    "Mobile Computing",
  ];

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
    <div className="m-5  d-flex flex-column align-content-center">
      <div className="mt-5">
        <SurveyTitle SurveyTitle="Edit Questions" />
      </div>
      <p className="h5 text-center  my-2">Course Survey Questions</p>
      <div className="container justify-content-center">
        <div className="creation-of-questions  d-flex flex-column justify-content-center">
          <div className="questions-dynamic justify-content-center d-flex justify-content-center">
            <form
              className="row d-flex justify-content-center"
              id="questionForm"
            >
              {questions.map((question, id) => (
                <div
                  key={question.id}
                  className="row mb-3 d-flex justify-content-center"
                  id={`questionRow${question.id}`}
                >
                  <div>
                    {Number.isInteger(id / 5) ? (
                      <SurveyTitle SurveyTitle={headings[id / 5]} />
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="form-group col-md-8 d-flex flex-column align-content-center">
                    <label htmlFor={`question${question.id}`}>
                      <h5>{`Question:${question.id}`}</h5>
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
                <div key="" className="row mb-3">
                  <div className="form-group col-md-8"></div>
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
              <span>
                <i className="bi bi-pencil-square me-2"></i>
              </span>
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

export default SurveyEdit;
