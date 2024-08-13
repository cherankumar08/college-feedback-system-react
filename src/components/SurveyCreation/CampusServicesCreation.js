import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sendSurveyQuestions,
  selectQuestions,
  selectErrors,
  addQuestion,
  updateQuestion,
  setError,
} from "../../Slice/surveyQnSlice";
import SurveyTitles from "../SurveyTitles/SurveyTitles";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CascadingDropdown from "./CascadedDropdown";

const CampusServicesCreation = () => {
  const dispatch = useDispatch();

  const [questionsCreated, setQuestionsCreated] = useState(false);

  const addNewQuestion = () => {
    const newQuestionData = {
      question: "New survey question?",
      option: [
        { label: "Course Survey", value: "1" },
        { label: "Instructor Survey", value: "2" },
        // Add more options as needed
      ],
      label: ["Very Poor", "Very Good"],
      SubName: "Computer Networks",
      HandlingFaculty: "Professor David",
      TabNo: 1, // Specify the appropriate tab number
    };

    fetch("http://localhost:5000/campusfacilities ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuestionData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("New question added:", data);
        // Optionally, dispatch an action to update Redux store with the new question
        // dispatch(addQuestion(data));
      })
      .catch((error) => {
        console.error("Error adding new question:", error);
        // Optionally, dispatch an action to set an error state in Redux store
        // dispatch(setError(error.message));
      });
  };
  // Get today's date in ISO format
  const currentDate = new Date().toISOString().split("T")[0];

  // For the First Dropdown Menus
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

  // For the Second Dropdown Menus
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
        id: index + 1, // Generate unique ID for each question
        question: "",
        SubName: "Computer Networks", // Assuming this is the default value
        "Handling Faculty": "ARUN", // Assuming this is the default value
        TabNo: 1, // Assuming this is the default value
      })
    );
    setQuestions(newQuestions);
    setErrors(newQuestions.map(() => ""));

    setQuestionsCreated(true);
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

  // For the form Validation when the Publish Button is Clicked
  const handlePublish = () => {
    console.log("Indside hanbdlePublish :", questions);

    const newQuestionsData = questions.map((question, index) => ({
      id: (index + 1).toString(), // Generating unique IDs for each question
      question: question.question,
      option: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
      ],
      label: ["Very Good", "Very Good"],
      SubName: question.SubName || "",
      HandlingFaculty: question["Handling Faculty"],
      TabNo: question.TabNo || 1,
    }));

    console.log("After Mapping : ", newQuestionsData);

    fetch("http://localhost:5000/campusServices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuestionsData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("New questions added:", data);
        setQuestions([]);
      })
      .catch((error) => {
        console.error("Error adding new questions:", error);
      });
  };

  return (
    <div>
      <SurveyTitles
        SubjectFaculty="Survey Creation"
        SubjectName="Campus Services"
      />
      <CascadingDropdown />

      <div className="ms-5 d-flex justify-content-center">
        <div className="d-flex flex-column align-items-center justify-content-center my-3 col-5 ms-5">
          <h5 htmlFor="" className="required label-date">
            Select the End Time
          </h5>
          <div className="d-flex flex-column w-100">
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
            {[...Array(25).keys()].map((num) => (
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
        {questionsCreated && (
          <div className="publishButton my-5 d-flex justify-content-center">
            <button
              className="btn btn-success"
              id="publish"
              onClick={handlePublish}
            >
              Publish
            </button>
          </div>
        )}
      </div>

      {/* Survey Question  */}
    </div>
  );
};

export default CampusServicesCreation;
