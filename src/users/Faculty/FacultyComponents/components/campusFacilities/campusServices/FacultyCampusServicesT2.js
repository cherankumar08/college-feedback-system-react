import React from "react";
import SurveyTitle from "../../../../../components/SurveyTitle";


const FacultyCampusServicesT2 = () => {
  return (
    <div>
      <div class="question bor-ques">
        <SurveyTitle SurveyTitle="Transportation" />

        <div class="question-1 question-1 staff-services-2 Question-bor">
          <p>
            1).How convenient and reliable do you find the transportation
            services provided by the college{" "}
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <p>Very Poor</p>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-2-qn-1-forId">
                1
              </label>
              <input
                type="radio"
                name="staffs-csf-Tab-2-qn-1-name"
                value="1"
                id="staffs-csf-Tab-2-qn-1-forId"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-2-qn-1-forId">
                2
              </label>
              <input
                type="radio"
                name="staffs-csf-Tab-2-qn-1-name"
                value="1"
                id="staffs-csf-Tab-2-qn-1-forId"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-2-qn-1-forId">
                3
              </label>
              <input
                type="radio"
                name="staffs-csf-Tab-2-qn-1-name"
                value="1"
                id="staffs-csf-Tab-2-qn-1-forId"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-2-qn-1-forId">
                4
              </label>
              <input
                type="radio"
                name="staffs-csf-Tab-2-qn-1-name"
                value="1"
                id="staffs-csf-Tab-2-qn-1-forId"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-2-qn-1-forId">
                5
              </label>
              <input
                type="radio"
                name="staffs-csf-Tab-2-qn-1-name"
                value="1"
                id="staffs-csf-Tab-2-qn-1-forId"
              />
            </div>
            <p>Very Good</p>
          </div>
        </div>
        <div class="question-1 question-2 staff-services-2 Question-bor">
          <p>
            2).Are the parking facilities and bike storage options adequate for
            students who commute to campus?
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <div class="yesorno-options">
              <input
                type="radio"
                name="staffs-csf-srno-Tab-2-qn-2-name"
                id="staffs-csf-srno-Tab-2-qn-2-forId"
              />
              <label for="staffs-csf-srno-Tab-2-qn-2-forId">Yes</label>
              <input
                type="radio"
                name="staffs-csf-srno-Tab-2-qn-2-name"
                id="staffs-csf-srno-Tab-2-qn-2-forId"
              />
              <label for="staffs-csf-srno-Tab-2-qn-2-forId">No</label>
              <input
                type="radio"
                name="staffs-csf-srno-Tab-2-qn-2-name"
                id="staffs-csf-srno-Tab-2-qn-2-forId"
              />
              <label for="staffs-csf-srno-Tab-2-qn-2-forId">
                Need Improvement
              </label>
            </div>
          </div>
        </div>
        <div class="question-1 question-3 staff-services-2 Question-bor">
          <p>
            3).Have you ever encountered challenges with campus transportation
            services, and if so, what were they?
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <div class="yesorno-options">
              <div class="whole-input-div">
                <div class="input-flex">
                  <input
                    type="radio"
                    name="staffs-csf-srno-Tab-2-qn-3-name"
                    id="staffs-csf-srno-Tab-2-qn-3-forId"
                  />
                  <label for="">Yes</label>
                  <input
                    type="radio"
                    name="staffs-csf-srno-Tab-2-qn-3-name"
                    id="staffs-csf-srno-Tab-2-qn-3-forId"
                  />
                  <label for="">No</label>
                </div>
                <div class="small-txt-box-div">
                  <input
                    type="text"
                    class="small-text-box"
                    id="staffs-csf-srno-Tab-2-qn-3-forId-textBox"
                    placeholder="what were they?"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="question-1 question-4 staff-services-2 Question-bor">
          <p>
            4).Do you feel safe while using college transportation services
            during late hours?
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <div class="yesorno-options">
              <input
                type="radio"
                name="staffs-csf-srno-Tab-2-qn-4-name"
                id="staffs-csf-srno-Tab-2-qn-4-forId"
              />
              <label for="staffs-csf-srno-Tab-2-qn-4-forId">Yes</label>
              <input
                type="radio"
                name="staffs-csf-srno-Tab-2-qn-4-name"
                id="staffs-csf-srno-Tab-2-qn-4-forId"
              />
              <label for="staffs-csf-srno-Tab-2-qn-4-forId">No</label>
              <input
                type="radio"
                name="staffs-csf-srno-Tab-2-qn-4-name"
                id="staffs-csf-srno-Tab-2-qn-4-forId"
              />
              <label for="staffs-csf-srno-Tab-2-qn-4-forId">
                Need Improvement
              </label>
            </div>
          </div>
        </div>
        <div class="question-1 question-5 staff-services-2 Question-bor">
          <p>
            5).What improvements or changes would enhance the transportation
            facilities at the college?
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <textarea
              name=""
              cols="30"
              rows="10"
              class="extra-points"
              id="staffs-csf-srno-Tab-2-qn-5-forId-textAreas"
              placeholder="Your Feedback"
            ></textarea>
          </div>
        </div>

        <div class="displayServicesError2"></div>
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
      ;
    </div>
  );
};

export default FacultyCampusServicesT2;
