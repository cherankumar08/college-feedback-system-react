import React from 'react'

function SurveyTitles(props) {
  return (
    <div>
      <div className="handle-box px-5 container-fluid justify-content-center">
        <h3 className="card-text text-center">{props.SubjectName}</h3>
        <p className="card-text text-center">{props.SubjectFaculty}</p>
      </div>
    </div>
  );
}

export default SurveyTitles