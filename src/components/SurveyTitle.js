import React from 'react'

const SurveyTitle = (props) => {
  return (
    <div>
      <div class="handle-box px-5 container-fluid justify-content-center mb-3">
        <h3 class="card-text text-center">{props.SurveyTitle}</h3>
      </div>
    </div>
  );
}

export default SurveyTitle