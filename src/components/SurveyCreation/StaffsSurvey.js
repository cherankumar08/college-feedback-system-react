import React, { useState } from "react";
import SurveyTitles from "../SurveyTitles/SurveyTitles";

const StaffsSurvey = () => {
  const currentDate = new Date().toISOString().split("T")[0]; // Get today's date in ISO format

  const [selectedSurveyTopic, setselectedSurveyTopic] = useState("");
  const [selectedSubSurvey, setselectedSubSurvey] = useState("");

  const handletopicChange = (e) => {
    const selectedSurveyTopic = e.target.value;
    setselectedSurveyTopic(selectedSurveyTopic);
    setselectedSubSurvey("");
  };

  const handleSubSurveyChange = (e) => {
    setselectedSubSurvey(e.target.value);
  };

  const [selectDept, setselectDept] = useState("");
  const [selectSection, setselectSection] = useState("");

  const handledeptChange = (e) => {
    const selectDept = e.target.value;
    setselectDept(selectDept);
    setselectSection("");
  };

  const handlesectionChange = (e) => {
    setselectSection(e.target.value);
  };

  // Define options for select dropdowns
  const topic = ["Topic1", "Topic2", "Topic3"];
  const subSurvey = {
    Topic1: ["SubSurvey1", "SubSurvey2"],
    Topic2: ["SubSurvey3", "SubSurvey4"],
    Topic3: ["SubSurvey5", "SubSurvey6"],
  };
  const dept = ["Dept1", "Dept2", "Dept3"];
  const section = {
    Dept1: ["Section1", "Section2"],
    Dept2: ["Section3", "Section4"],
    Dept3: ["Section5", "Section6"],
  };

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
      <div className="my-5">
        <SurveyTitles SubjectFaculty="Staffs" SubjectName="Survey Creation" />
      </div>
      <div className="mx-5">
        <h2>Please select the Survey Type</h2>
        <div className="d-flex justify-content-center my-3 col-12 ">
          <div className="border-check d-flex flex-column p-3">
            <h5 htmlFor="" className="required">
              Select the Main Survey Type
            </h5>
            <div className="d-flex flex-column">
              <select
                onChange={handletopicChange}
                value={selectedSurveyTopic}
                className="form-control col-12 mx-3 select-type"
              >
                <option value="" disabled>
                  Select Survey Type
                </option>
                {topic.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="d-flex flex-column border-check p-3">
            <h5 htmlFor="" className="required">
              Select the Sub Survey Type
            </h5>
            <div className="d-flex flex-column col-12">
              <select
                value={selectedSubSurvey}
                disabled={
                  selectedSurveyTopic === "" ||
                  subSurvey[selectedSurveyTopic].length === 0
                }
                onChange={handleSubSurveyChange}
                className="form-control col-12 mx-3 select-type"
              >
                <option value="" disabled>
                  Select Sub-Survey Type
                </option>
                {subSurvey[selectedSurveyTopic] &&
                  subSurvey[selectedSurveyTopic].map((subSurvey) => (
                    <option key={subSurvey} value={subSurvey}>
                      {subSurvey}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-5">
        {/* <h2>Please select the Survey Type</h2> */}
        <div className="d-flex justify-content-center my-3 col-12 ">
          <div className="border-check d-flex flex-column p-3">
            <h5 htmlFor="" className="required">
              Select the Department
            </h5>
            <div className="d-flex flex-column">
              <select
                onChange={handledeptChange}
                value={selectDept}
                className="form-control col-12 mx-3 select-type"
              >
                <option value="" disabled>
                  Select the Department
                </option>
                {dept.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="d-flex flex-column border-check p-3">
            <h5 htmlFor="" className="required">
              Select the Section
            </h5>
            <div className="d-flex flex-column col-12">
              <select
                value={selectSection}
                disabled={selectDept === "" || section[selectDept].length === 0}
                onChange={handlesectionChange}
                className="form-control col-12 mx-3 select-type"
              >
                <option value="" disabled>
                  Select The Section
                </option>
                {section[selectDept] &&
                  section[selectDept].map((section) => (
                    <option key={section} value={section}>
                      {section}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="ms-5 d-flex justify-content-center">
        <div className="d-flex flex-column align-items-center justify-content-center my-3 col-5">
          <h5 htmlFor="" className="required label-date">
            Select the Start Time
          </h5>
          <div className="d-flex flex-column col-12">
            <input
              type="date"
              className="form-control col-5 ms-5 form-control date-width mx-3 select-type"
              min={currentDate} // Set min attribute to today's date
            />
          </div>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center my-3 col-5 ">
          <h5 htmlFor="" className="required label-date">
            Select the End Time
          </h5>
          <div className="d-flex flex-column col-12">
            <input
              type="date"
              className="form-control col-5 ms-5 form-control mx-3 date-width select-type"
              min={currentDate} // Set min attribute to today's date
            />
          </div>
        </div>
      </div>

      {/* Survey Question  */}
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

      {/* Survey Question  */}
    </div>
  );
};

export default StaffsSurvey;
