import React from "react";
import SurveyTitle from "../../../../../components/SurveyTitle";

const FacultyCampusServicesT1 = () => {
  return (
    <div>
      <div class="question bor-ques">
        <SurveyTitle SurveyTitle="Academics" />

        {/* <!--Tab 1  Question 1 --> */}
        <div class="question-1 question-1 staff-services-1 Question-bor">
          <p>
            1).On a scale of 1 to 5, how would you rate the quality and
            functionality of the classrooms and lecture halls at the college?
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <p>Very Poor</p>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-1-qn-1-forId">
                1
              </label>
              <input
                type="radio"
                name="staffs-csf-Tab-1-qn-1-name"
                value="1"
                id="staffs-csf-Tab-1-qn-1-forId"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-1-qn-1-forId">
                2
              </label>
              <input
                type="radio"
                name="staffs-csf-Tab-1-qn-1-name"
                value="1"
                id="staffs-csf-Tab-1-qn-1-forId"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-1-qn-1-forId">
                3
              </label>
              <input
                type="radio"
                name="staffs-csf-Tab-1-qn-1-name"
                value="1"
                id="staffs-csf-Tab-1-qn-1-forId"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-1-qn-1-forId">
                4
              </label>
              <input
                type="radio"
                name="staffs-csf-Tab-1-qn-1-name"
                value="1"
                id="staffs-csf-Tab-1-qn-1-forId"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-1-qn-1-forId">
                5
              </label>
              <input
                type="radio"
                name="staffs-csf-Tab-1-qn-1-name"
                value="1"
                id="staffs-csf-Tab-1-qn-1-forId"
              />
            </div>
            <p>Very Good</p>
          </div>
        </div>
        {/* <!--Tab 1  Question 2 --> */}
        <div class="question-1 question-2 staff-services-1 Question-bor">
          <p>
            2).Are the classroom facilities well-equipped with modern technology
            and resources for effective learning?
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <div class="yesorno-options">
              <input
                type="radio"
                name="staffs-csf-srno-Tab-1-qn-2-name"
                id="staffs-csf-srno-Tab-1-qn-2-name"
              />
              <label for="staffs-csf-srno-Tab-1-qn-2-name">Yes</label>
              <input
                type="radio"
                name="staffs-csf-srno-Tab-1-qn-2-name"
                id="staffs-csf-srno-Tab-1-qn-2-name"
              />
              <label for="staffs-csf-srno-Tab-1-qn-2-name">No</label>
              <input
                type="radio"
                name="staffs-csf-srno-Tab-1-qn-2-name"
                id="staffs-csf-srno-Tab-1-qn-2-name"
              />
              <label for="staffs-csf-srno-Tab-1-qn-2-name">
                Need Improvement
              </label>
            </div>
          </div>
        </div>
        {/* <!--Tab 1  Question 3 --> */}
        <div class="question-1 question-3 staff-services-1 Question-bor">
          <p>
            3).How satisfied are you with the availability of study areas and
            quiet places on campus for academic purposes?
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <p>Not Satisfied</p>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-1-qn-1-forId">
                1
              </label>
              <input
                type="radio"
                name="staffs-csf-Tab-1-qn-3-forId"
                value="1"
                id="staffs-csf-Tab-1-qn-1-forId"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-1-qn-1-forId">
                2
              </label>
              <input
                type="radio"
                name="staffs-csf-Tab-1-qn-3-forId"
                value="1"
                id="staffs-csf-Tab-1-qn-1-forId"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-1-qn-1-forId">
                3
              </label>
              <input
                type="radio"
                name="staffs-csf-Tab-1-qn-3-forId"
                value="1"
                id="staffs-csf-Tab-1-qn-1-forId"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-1-qn-1-forId">
                4
              </label>
              <input
                type="radio"
                name="staffs-csf-Tab-1-qn-3-forId"
                value="1"
                id="staffs-csf-Tab-1-qn-1-forId"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="staffs-csf-Tab-1-qn-1-forId">
                5
              </label>
              <input
                type="radio"
                name="staffs-csf-Tab-1-qn-3-forId"
                value="1"
                id="staffs-csf-Tab-1-qn-1-forId"
              />
            </div>
            <p>Satisfied Very well</p>
          </div>
        </div>
        {/* <!--Tab 1  Question 4 --> */}
        <div class="question-1 question-4 staff-services-1 Question-bor">
          <p>
            4).Do you think the library resources, including books, journals,
            and online databases, meet your academic needs?
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <div class="yesorno-options">
              <input
                type="radio"
                name="staffs-csf-srno-Tab-1-qn-4-name"
                id="staffs-csf-srno-Tab-1-qn-4-forId"
              />
              <label for="staffs-csf-srno-Tab-1-qn-4-forId">Yes</label>
              <input
                type="radio"
                name="staffs-csf-srno-Tab-1-qn-4-name"
                id="staffs-csf-srno-Tab-1-qn-4-forId"
              />
              <label for="staffs-csf-srno-Tab-1-qn-4-forId">No</label>
              <input
                type="radio"
                name="staffs-csf-srno-Tab-1-qn-4-name"
                id="staffs-csf-srno-Tab-1-qn-4-forId"
              />
              <label for="staffs-csf-srno-Tab-1-qn-4-forId">
                Need Improvement
              </label>
            </div>
          </div>
        </div>
        {/* <!--Tab 1  Question 5 --> */}
        <div class="question-1 question-5 staff-services-1 Question-bor">
          <p>
            5).Are there any improvements or specific changes you would like to
            see in the academic facilities?{" "}
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              class="extra-points"
            ></textarea>
          </div>
        </div>

        <div class="displayServicesError1"></div>
        <div class="submit-button">
          <button
            class="btn btn-purple"
            id="Campus-Facilities-Tab-1-Btn"
            data-bs-toggle="modal"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacultyCampusServicesT1;
