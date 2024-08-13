import React from "react";
import SurveyTitle from "../../../../components/SurveyTitle";

const FacultyOverallExpT3 = () => {
  return (
    <div>
      <div class="question bor-ques">
        <SurveyTitle SurveyTitle="Support Services" />

        <div class="question-1 question-1 OverAll-T1">
          <p>
            1).How would you rate your overall college experience on a scale
            from 1 to 5, with 1 being very unsatisfactory and 5 being excellent?
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <p>Not Satisfied</p>
            <div class="linear-scale-qn">
              <label class="radio-label" for="OA-Linear_ID-1-tab-1-qn-1">
                1
              </label>
              <input
                type="radio"
                name="OA-Linear_Name-tab-1-qn-1"
                value="1"
                id="OA-Linear_ID-1-tab-1-qn-1"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="OA-Linear_ID-2-tab-1-qn-1">
                2
              </label>
              <input
                type="radio"
                name="OA-Linear_Name-tab-1-qn-1"
                value="1"
                id="OA-Linear_ID-2-tab-1-qn-1"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="OA-Linear_ID-3-tab-1-qn-1">
                3
              </label>
              <input
                type="radio"
                name="OA-Linear_Name-tab-1-qn-1"
                value="1"
                id="OA-Linear_ID-3-tab-1-qn-1"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="OA-Linear_ID-4-tab-1-qn-1">
                4
              </label>
              <input
                type="radio"
                name="OA-Linear_Name-tab-1-qn-1"
                value="1"
                id="OA-Linear_ID-4-tab-1-qn-1"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="OA-Linear_ID-5-tab-1-qn-1">
                5
              </label>
              <input
                type="radio"
                name="OA-Linear_Name-tab-1-qn-1"
                value="1"
                id="OA-Linear_ID-5-tab-1-qn-1"
              />
            </div>
            <p>Satisfied Very well</p>
          </div>
        </div>
        <div class="question-1 question-2 OverAll-T1">
          <p>
            2).Are there any areas or aspects of your college experience that
            you believe need improvement? Please specify.
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <div class="yesorno-options">
              <div class="whole-input-div">
                <div class="input-flex">
                  <input
                    type="radio"
                    name=" OA-YesOrNo_Name-tab-1-qn-2"
                    id="OA-YesOrNo_ID-1-tab-1-qn-2"
                  />
                  <label for="OA-YesOrNo_ID-1-tab-1-qn-2">Yes</label>
                  <input
                    type="radio"
                    name=" OA-YesOrNo_Name-tab-1-qn-2"
                    id="OA-YesOrNo_ID-2-tab-1-qn-2"
                  />
                  <label for="OA-YesOrNo_ID-2-tab-1-qn-2">No</label>
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
        <div class="question-1 question-3 OverAll-T1">
          <p>
            3).How would you rate the support services (academic advising,
            counseling, career services, etc.) provided by the college in
            enhancing your overall experience?
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <p>Not Satisfied</p>
            <div class="linear-scale-qn">
              <label class="radio-label" for="OA-Linear_ID-1-tab-1-qn-3">
                1
              </label>
              <input
                type="radio"
                name="OA-Linear_Name-tab-1-qn-3"
                value="1"
                id="OA-Linear_ID-1-tab-1-qn-3"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="OA-Linear_ID-2-tab-1-qn-3">
                2
              </label>
              <input
                type="radio"
                name="OA-Linear_Name-tab-1-qn-3"
                value="1"
                id="OA-Linear_ID-2-tab-1-qn-3"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="OA-Linear_ID-3-tab-1-qn-3">
                3
              </label>
              <input
                type="radio"
                name="OA-Linear_Name-tab-1-qn-3"
                value="1"
                id="OA-Linear_ID-3-tab-1-qn-3"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="OA-Linear_ID-4-tab-1-qn-3">
                4
              </label>
              <input
                type="radio"
                name="OA-Linear_Name-tab-1-qn-3"
                value="1"
                id="OA-Linear_ID-4-tab-1-qn-3"
              />
            </div>
            <div class="linear-scale-qn">
              <label class="radio-label" for="OA-Linear_ID-5-tab-1-qn-3">
                5
              </label>
              <input
                type="radio"
                name="OA-Linear_Name-tab-1-qn-3"
                value="1"
                id="OA-Linear_ID-5-tab-1-qn-3"
              />
            </div>
            <p>Satisfied Very well</p>
          </div>
        </div>
        <div class="question-1 question-4 OverAll-T1">
          <p>
            4).What aspects of your college experience do you find most
            fulfilling or enjoyable? Please describe.
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <div class="yesorno-options">
              <div class="whole-input-div">
                <div class="input-flex">
                  <input
                    type="radio"
                    name=" OA-YesOrNo_Name-tab-1-qn-4"
                    id="OA-YesOrNo_ID-1-tab-1-qn-4"
                  />
                  <label for="OA-YesOrNo_ID-1-tab-1-qn-4">Yes</label>
                  <input
                    type="radio"
                    name=" OA-YesOrNo_Name-tab-1-qn-4"
                    id="OA-YesOrNo_ID-2-tab-1-qn-4"
                  />
                  <label for="OA-YesOrNo_ID-2-tab-1-qn-4">No</label>
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
        <div class="question-1 question-5 OverAll-T1">
          <p>
            5).Have you had any memorable experiences or opportunities at the
            college that you'd like to share?
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <div class="yesorno-options">
              <div class="whole-input-div">
                <div class="input-flex">
                  <input
                    type="radio"
                    name=" OA-YesOrNo_Name-tab-1-qn-5"
                    id="OA-YesOrNo_ID-1-tab-1-qn-5"
                  />
                  <label for="OA-YesOrNo_ID-1-tab-1-qn-5">Yes</label>
                  <input
                    type="radio"
                    name=" OA-YesOrNo_Name-tab-1-qn-5"
                    id="OA-YesOrNo_ID-2-tab-1-qn-5"
                  />
                  <label for="OA-YesOrNo_ID-2-tab-1-qn-5">No</label>
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
        <div class="disPlayErr-OverAll-T1"></div>
        <div class="submit-button"></div>
      </div>
    </div>
  );
};

export default FacultyOverallExpT3;
