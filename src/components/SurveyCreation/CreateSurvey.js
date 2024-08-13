import React, { useState } from "react";

function CreateSurvey() {
  const [numQuestions, setNumQuestions] = useState("");
  const [questions, setQuestions] = useState([]);
  const [errors, setErrors] = useState([]);

  const handleCreateQuestions = () => {
    const newQuestions = Array.from(
      { length: parseInt(numQuestions, 10) },
      (_, index) => ({
        question: "",
        selectedOption: 0,
      })
    );
    setQuestions(newQuestions);
    setErrors(newQuestions.map(() => ""));
  };

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].question = value;
    setQuestions(newQuestions);
    const newErrors = [...errors];
    newErrors[index] = "";
    setErrors(newErrors);
  };

  const handleOptionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].selectedOption = parseInt(value, 10);
    setQuestions(newQuestions);
  };

  const handlePublish = () => {
    const newErrors = questions.map((question) =>
      !question.question.trim() ? "Question cannot be empty" : ""
    );
    setErrors(newErrors);
    if (!newErrors.some((error) => error)) {
      console.log("Questions:", questions);
      // Log questions and selected options
      questions.forEach((question, index) => {
        console.log(`Question ${index + 1}: ${question.question}`);
        console.log(
          `Selected Option for Question ${index + 1}: ${
            question.selectedOption
          }`
        );
      });
      // You can do further processing here
    }
  };

  return (
    <div>
      <div className="row">
        {/* <div className="col col-2 mt-5 me-5"></div> */}
        <div
          className="col mt-5 m-5 d-flex w-100 justify-content-center align-items-center flex-column"
          // style={{ border: "2Px solid" }}
        >
          <label htmlFor="question-selected" className="fw-bold">
            Please select the Number of questions
          </label>
          <select
            className="form-select"
            id="question-selected"
            aria-label="Default select example"
            value={numQuestions}
            onChange={(e) => setNumQuestions(e.target.value)}
          >
            <option selected disabled>
              Number Of Questions
            </option>
            {[...Array(10).keys()].map((num) => (
              <option key={num} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="question d-flex justify-content-center mt-5">
        <button className="btn btn-success" onClick={handleCreateQuestions}>
          Create
        </button>
      </div>
      <p className="h5 text-center mt-5">Tap to create questions</p>
      <div className="container">
        <div className="creation-of-questions">
          <div className="questions-dynamic">
            {questions.map((question, index) => (
              <form className="row" key={index}>
                <div className="form-group col-md-8">
                  <label htmlFor={`question-${index + 1}`}>
                    Question {index + 1}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tap to type the questions"
                    id={`question-typed-${index + 1}`}
                    value={question.question}
                    onChange={(e) =>
                      handleQuestionChange(index, e.target.value)
                    }
                  />
                  {errors[index] && (
                    <span className="text-danger">{errors[index]}</span>
                  )}
                </div>
                <div className="form-group col-md-3 mt-4">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={question.selectedOption}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                  >
                    <option value="0" disabled>
                      Select the Options
                    </option>
                    <option value="1">Textbox</option>
                    <option value="2">Textarea</option>
                    <option value="3">Linear Scale(1-5)</option>
                    <option value="4">Radio Button(Yes or No)</option>
                    <option value="5">
                      Both Radio Button(Yes or No) & Textbox
                    </option>
                  </select>
                </div>
              </form>
            ))}
          </div>
        </div>

        <div id="publishing"></div>
        <div id="disErr"></div>
        <div id="WholedisErr"></div>
        <div className="publishButton my-5 d-flex justify-content-center">
          <button
            className="btn btn-success"
            id="publish"
            onClick={handlePublish}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateSurvey;
