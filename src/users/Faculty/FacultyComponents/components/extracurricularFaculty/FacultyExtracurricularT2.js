import React from "react";
import SurveyTitle from "../../../../components/SurveyTitle";

const FacultyExtracurricularT2 = () => {
  return (
    <div>
      <SurveyTitle SurveyTitle="Club" />
      <div class="question bor-ques campus-facilities-staff-tab-2">
        <div class="question-1 question-1 Campus-facilities-tab-2 Question-bor">
          <p>
            1).How frequently do you use the laboratories for your coursework or
            research projects?{" "}
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <div class="yesorno-options">
              <input
                type="radio"
                name="Staffs-csf-Tab-2-qn-1-name-1"
                id="staffs-csf-srno-Tab-2-qn-1-forId-1-1"
              />
              <label for="staffs-csf-srno-Tab-2-qn-1-forId-1-1">
                Regularly
              </label>
              <input
                type="radio"
                name="Staffs-csf-Tab-2-qn-1-name-1"
                id="staffs-csf-srno-Tab-2-qn-1-forId-1-2"
              />
              <label for="staffs-csf-srno-Tab-2-qn-1-forId-1-2">Often</label>
              <input
                type="radio"
                name="Staffs-csf-Tab-2-qn-1-name-1"
                id="staffs-csf-srno-Tab-2-qn-1-forId-1-3"
              />
              <label for="staffs-csf-srno-Tab-2-qn-1-forId-1-3">Rarely</label>
            </div>
          </div>
        </div>
        <div class="question-1 question-2 Campus-facilities-tab-2 Question-bor">
          <p>
            2).Are the laboratory facilities well-equipped with modern
            technology and tools for your field of study?
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <div class="yesorno-options">
              <input
                type="radio"
                name="Staffs-csf-Tab-2-qn-2-name-2"
                id="staffs-csf-srno-Tab-2-qn-2-forId-1-1"
              />
              <label for="staffs-csf-srno-Tab-2-qn-2-forId-1-1">
                Regularly
              </label>
              <input
                type="radio"
                name="Staffs-csf-Tab-2-qn-2-name-2"
                id="staffs-csf-srno-Tab-2-qn-2-forId-1-2"
              />
              <label for="staffs-csf-srno-Tab-2-qn-2-forId-1-2">Often</label>
              <input
                type="radio"
                name="Staffs-csf-Tab-2-qn-2-name-2"
                id="staffs-csf-srno-Tab-2-qn-2-forId-1-3"
              />
              <label for="staffs-csf-srno-Tab-2-qn-2-forId-1-3">Rarely</label>
            </div>
          </div>
        </div>
        <div class="question-1 question-3 Campus-facilities-tab-2 Question-bor">
          <p>
            3).How satisfied are you with the safety measures and guidelines in
            the laboratory environments?
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <p>Not Satisfied</p>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-2-qn-3-forId-1">
                1
              </label>
              <input
                type="radio"
                name="Staffs-csf-Tab-2-qn-3-name"
                value="1"
                id="staffs-csf-Tab-2-qn-3-forId-1"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-2-qn-3-forId-2">
                2
              </label>
              <input
                type="radio"
                name="Staffs-csf-Tab-2-qn-3-name"
                value="1"
                id="staffs-csf-Tab-2-qn-3-forId-2"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-2-qn-3-forId-3">
                3
              </label>
              <input
                type="radio"
                name="Staffs-csf-Tab-2-qn-3-name"
                value="1"
                id="staffs-csf-Tab-2-qn-3-forId-3"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-2-qn-3-forId-4">
                4
              </label>
              <input
                type="radio"
                name="Staffs-csf-Tab-2-qn-3-name"
                value="1"
                id="staffs-csf-Tab-2-qn-3-forId-4"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-2-qn-3-forId-5">
                5
              </label>
              <input
                type="radio"
                name="Staffs-csf-Tab-2-qn-3-name"
                value="1"
                id="staffs-csf-Tab-2-qn-3-forId-5"
              />
            </div>
            <p>Satisfied Very well</p>
          </div>
        </div>
        <div class="question-1 question-4 Campus-facilities-tab-2 Question-bor">
          <p>
            4).Have you encountered any challenges or concerns related to the
            laboratories, and if so, what were they?
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <div class="yesorno-options">
              <div class="whole-input-div">
                <div class="input-flex">
                  <input
                    type="radio"
                    name="Staffs-CFS-YesOrNo_Name-tab-2-qn-4"
                    id="CFS-YesOrNo_ID-1-tab-2-qn-4"
                  />
                  <label for="CFS-YesOrNo_ID-1-tab-2-qn-4">Yes</label>
                  <input
                    type="radio"
                    name="Staffs-CFS-YesOrNo_Name-tab-2-qn-4"
                    id="CFS-YesOrNo_ID-2-tab-2-qn-4"
                  />
                  <label for="CFS-YesOrNo_ID-2-tab-2-qn-4">No</label>
                </div>
                <div class="small-txt-box-div">
                  <input
                    type="text"
                    class="small-text-box"
                    placeholder="what were they?"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="question-1 question-5 Campus-facilities-tab-2 Question-bor">
          <p>
            5).What improvements or changes would enhance the transportation
            facilities at the college?
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <textarea
              name=""
              id="CFS-YesOrNo_Text-1-tab-2-qn-5"
              cols="30"
              rows="10"
              class="extra-points"
              placeholder="Your Feedback"
            ></textarea>
          </div>
        </div>

        <div class="displayVacantError2"></div>
        <div class="submit-button">
          <button
            class="btn btn-purple"
            id="Campus-Facilities-Tab-2-Btn"
            data-bs-toggle="modal"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacultyExtracurricularT2;
