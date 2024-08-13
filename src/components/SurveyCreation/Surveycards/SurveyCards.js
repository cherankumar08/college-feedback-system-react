import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";

const SurveyCards = () => {
  const surveys = [
    {
      title: "Course Survey",
      subtitle: "Create Course Survey",
      buttonText: "Create Survey",
      buttonLink: "courseSurveyCreation",
      iconLink: "bi-bar-chart-line",
    },
    {
      title: "Instructor Survey",
      subtitle: "Create Instructor Survey",
      buttonText: "Create Survey",
      buttonLink: "instructor-survey-creation",
      iconLink: "bi-person-check",
    },
    {
      title: "Campus Facilities Survey",
      subtitle: "Create Campus Facilities Survey",
      buttonText: "Create Survey",
      buttonLink: "campus-facilities-creation",
      iconLink: "bi-building",
    },
    {
      title: "Campus Services Survey",
      subtitle: "Create Campus Services",
      buttonText: "Create Survey",
      buttonLink: "campus-services-creation",
      iconLink: "bi-chat-text",
    },
    {
      title: "Extracurricular Activities ​ Survey",
      subtitle: "Create Extracurricular Activities",
      buttonText: "Create Survey",
      buttonLink: "extracurricular-activities-creation",
      iconLink: "bi-trophy",
    },
    {
      title: "Suggestions and Improvements Survey",
      subtitle: "Create Suggestions and Improvements",
      buttonText: "Create Survey",
      buttonLink: "suggestions-and-improvement-creation",
      iconLink: "bi-trophy",
    },
  ];

  return (
    <div className="d-flex justify-content-around flex-wrap ">
      {surveys.map((survey, index) => (
        <Card
          key={index}
          style={{ width: "30rem", height: "15rem" }}
          className="my-3"
        >
          <Card.Body>
            <Card.Title>
              <h4 className="d-inline">{survey.title}</h4>
              <span>
                <i className={`${survey.iconLink} fs-1 ms-4 text-success`}></i>
              </span>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {survey.subtitle}
            </Card.Subtitle>
            <Card.Text></Card.Text>
            <Link to={`${survey.buttonLink} `}>
              <Button className="">
                {survey.buttonText}
                <span>
                  <i className="bi bi-arrow-right-circle ms-1"></i>
                </span>
              </Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default SurveyCards;
