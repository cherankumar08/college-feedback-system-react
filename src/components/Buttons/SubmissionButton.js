import React, { useState } from "react";
import "../../sass/index.scss";

const SubmissionButton = ({
  TabNo,
  SurveyName,
  courseSurvey,
  start,
  end,
  selectedOptions,
}) => {
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [modalMessage, setModalMessage] = useState(""); // State to manage modal message content

  const handleSubmission = () => {
    // Check if courseSurvey is defined
    if (!courseSurvey) {
      console.error("Course survey data is undefined.");
      return;
    }

    const predicate = (selectedOption) => {
      let predi = selectedOption !== null && selectedOption !== undefined;
      return predi;
    };

    // Count the number of questions with selected options
    const answeredCount = selectedOptions
      .filter((value, index) => index >= start && index < end)
      .filter(predicate).length;

    // Check if at least 3 questions have been answered
    if (answeredCount < 3) {
      setModalMessage("No less than 3 questions should be answered.");
      setShowModal(true); // Show modal if condition is not met
    } else {
      setModalMessage("Submitted successfully.");
      setShowModal(true); // Show modal if submission is successful
      // Perform submission logic here
    }

    
  };

 


  return (
    <div>
      {/* Button trigger modal */}
      <div className="my-5 d-flex justify-content-center">
        <button
          onClick={handleSubmission}
          className={`Tab-${TabNo}-${SurveyName}-Student-Submit-btn-cls Submit-btn btn-purple mx-5`}
          id={`Tab-${TabNo}-${SurveyName}-Student-Submit-btn-id`}
        >
          Submit as Student
        </button>
        <button
          onClick={handleSubmission}
          className={`Tab-${TabNo}-${SurveyName}-Anonymous-Submit-btn-cls Submit-btn btn-purple mx-5`}
          id={`Tab-${TabNo}-${SurveyName}-Anonymous-Submit-btn-id`}
        >
          Submit as Anonymous
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog modal-dialog-centered modal-dialog modal-lg">
            <div className="modal-content  bg-dark">
              <div className="modal-header">
                <h1 className="modal-title fs-5 text-white">Important Note</h1>
                <button
                  type="button"
                  className="btn-close text-white"
                  aria-label="Close"
                  onClick={() => setShowModal(false)} // Close modal when button is clicked
                ></button>
              </div>
              <div className="modal-body">
                <h4 className="text-white">{modalMessage}</h4>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)} // Close modal when button is clicked
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-purple text-white"
                  onClick={() => setShowModal(false)} // Close modal when button is clicked
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmissionButton;
