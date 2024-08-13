import React from "react";
import SurveyTitle from "../../../../components/SurveyTitle";

const FacultyExtracurricularT3 = () => {
  return (
    <div>
      <SurveyTitle SurveyTitle="Support Services" />
      <div class="question bor-ques">
        <div class="question-1 question-1 Campus-facilities-tab-3 Question-bor">
          <p>
            1).Have you utilized any of the academic or career support services
            provided by the college (e.g., tutoring, career counseling)?
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <div class="yesorno-options">
              <div class="whole-input-div">
                <div class="input-flex">
                  <input type="radio" name="Staffs-yesorno-2" id="yesorno" />
                  <label for="">Yes</label>
                  <input type="radio" name="Staffs-yesorno-2" id="yesorno" />
                  <label for="">No</label>
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
        <div class="question-1 question-2 Campus-facilities-tab-3 Question-bor">
          <p>
            2).On a scale from 1 to 5, how would you rate the responsiveness and
            effectiveness of the support services you've used?
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <p>Not Satisfied</p>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-3-qn-2-forId-1">
                1
              </label>
              <input
                type="radio"
                name="Staffs-csf-Tab-3-qn-2-name"
                value="1"
                id="staffs-csf-Tab-3-qn-2-forId-1"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-3-qn-2-forId-2">
                2
              </label>
              <input
                type="radio"
                name="Staffs-csf-Tab-3-qn-2-name"
                value="1"
                id="staffs-csf-Tab-3-qn-2-forId-2"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-3-qn-2-forId-3">
                3
              </label>
              <input
                type="radio"
                name="Staffs-csf-Tab-3-qn-2-name"
                value="1"
                id="staffs-csf-Tab-3-qn-2-forId-3"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-3-qn-2-forId-4">
                4
              </label>
              <input
                type="radio"
                name="Staffs-csf-Tab-3-qn-2-name"
                value="1"
                id="staffs-csf-Tab-3-qn-2-forId-4"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-3-qn-2-forId-5">
                5
              </label>
              <input
                type="radio"
                name="Staffs-csf-Tab-3-qn-2-name"
                value="1"
                id="staffs-csf-Tab-3-qn-2-forId-5"
              />
            </div>
            <p>Satisfied Very well</p>
          </div>
        </div>
        <div class="question-1 question-3 Campus-facilities-tab-3 Question-bor">
          <p>
            3).Do you feel adequately informed about the various support
            services available on campus?
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <div class="yesorno-options">
              <div class="whole-input-div">
                <div class="input-flex">
                  <input
                    type="radio"
                    name="Staffs-CFS-YesOrNo_Name-tab-3-qn-3"
                    id="CFS-YesOrNo_ID-1-tab-3-qn-3"
                  />
                  <label for="CFS-YesOrNo_ID-1-tab-3-qn-3">Yes</label>
                  <input
                    type="radio"
                    name="Staffs-CFS-YesOrNo_Name-tab-3-qn-3"
                    id="CFS-YesOrNo_ID-2-tab-3-qn-3"
                  />
                  <label for="CFS-YesOrNo_ID-2-tab-3-qn-3">No</label>
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
        <div class="question-1 question-4 Campus-facilities-tab-3 Question-bor">
          <p>
            4).Have you experienced any issues or obstacles in accessing support
            services, and if so, what were they?
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <div class="yesorno-options">
              <div class="whole-input-div">
                <div class="input-flex">
                  <input
                    type="radio"
                    name="Staffs-CFS-YesOrNo_Name-tab-3-qn-4"
                    id="CFS-YesOrNo_ID-1-tab-3-qn-4"
                  />
                  <label for="CFS-YesOrNo_ID-1-tab-3-qn-4">Yes</label>
                  <input
                    type="radio"
                    name="Staffs-CFS-YesOrNo_Name-tab-3-qn-4"
                    id="CFS-YesOrNo_ID-2-tab-3-qn-4"
                  />
                  <label for="CFS-YesOrNo_ID-2-tab-3-qn-4">No</label>
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
        <div class="question-1 question-5 Campus-facilities-tab-3 Question-bor">
          <p>
            5).What improvements or additional support services do you think the
            college should consider offering?
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              class="extra-points"
              placeholder="Your Feedback"
            ></textarea>
          </div>
        </div>

        <div class="displayVacantError3"></div>
        <div class="submit-button">
          <button
            class="btn btn-purple"
            id="Campus-Facilities-Tab-3-Btn"
            data-bs-toggle="modal"
          >
            Submit
          </button>
        </div>
      </div>
      ;
    </div>
  );
};

export default FacultyExtracurricularT3;
