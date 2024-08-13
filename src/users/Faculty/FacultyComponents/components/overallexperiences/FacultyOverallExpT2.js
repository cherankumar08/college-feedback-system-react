import React from "react";
import SurveyTitle from "../../../../components/SurveyTitle";

const FacultyOverallExpT2 = () => {
  return (
    <div>
      <div className="question bor-ques">
        <SurveyTitle SurveyTitle="Campus Experiences" />
        <div className="question-1 question-1 Overall-T2 Question-bor">
          <p>
            1).How would you rate the safety and security measures on campus on
            a scale from 1 to 5, with 1 being very unsafe and 5 being very safe?
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <p>Not Satisfied</p>
            <div className="linear-scale-qn">
              <label className="radio-label" for="OA-Linear_ID-1-tab-2-qn-1">
                1
              </label>
              <input
                type="radio"
                name="OA-Linear_Name-tab-2-qn-1"
                value="1"
                id="OA-Linear_ID-1-tab-2-qn-1"
              />
            </div>
            <div className="linear-scale-qn">
              <label className="radio-label" for="OA-Linear_ID-2-tab-2-qn-1">
                2
              </label>
              <input
                type="radio"
                name="OA-Linear_Name-tab-2-qn-1"
                value="1"
                id="OA-Linear_ID-2-tab-2-qn-1"
              />
            </div>
            <div className="linear-scale-qn">
              <label className="radio-label" for="OA-Linear_ID-3-tab-2-qn-1">
                3
              </label>
              <input
                type="radio"
                name="OA-Linear_Name-tab-2-qn-1"
                value="1"
                id="OA-Linear_ID-3-tab-2-qn-1"
              />
            </div>
            <div className="linear-scale-qn">
              <label className="radio-label" for="OA-Linear_ID-4-tab-2-qn-1">
                4
              </label>
              <input
                type="radio"
                name="OA-Linear_Name-tab-2-qn-1"
                value="1"
                id="OA-Linear_ID-4-tab-2-qn-1"
              />
            </div>
            <div className="linear-scale-qn">
              <label className="radio-label" for="OA-Linear_ID-5-tab-2-qn-1">
                5
              </label>
              <input
                type="radio"
                name="OA-Linear_Name-tab-2-qn-1"
                value="1"
                id="OA-Linear_ID-5-tab-2-qn-1"
              />
            </div>
            <p>Satisfied Very well</p>
          </div>
        </div>
        <div className="question-1 question-2 Overall-T2 Question-bor">
          <p>
            2).Have you encountered any challenges related to the campus
            environment that you think the college should address? Please
            explain
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <div className="yesorno-options">
              <div className="whole-input-div">
                <div className="input-flex">
                  <input
                    type="radio"
                    name=" OA-YesOrNo_Name-tab-2-qn-2"
                    id="OA-YesOrNo_ID-1-tab-2-qn-2"
                  />
                  <label for="OA-YesOrNo_ID-1-tab-2-qn-2">Yes</label>
                  <input
                    type="radio"
                    name=" OA-YesOrNo_Name-tab-2-qn-2"
                    id="OA-YesOrNo_ID-2-tab-2-qn-2"
                  />
                  <label for="OA-YesOrNo_ID-2-tab-2-qn-2">No</label>
                </div>
                <div className="small-txt-box-div">
                  <input
                    type="text"
                    className="small-text-box"
                    placeholder="what were they?"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="question-1 question-3 Overall-T2 Question-bor">
          <p>
            3).Do you feel that the campus facilities, including libraries,
            laboratories, and recreational areas, adequately meet your needs and
            expectations?
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <div className="yesorno-options">
              <div className="whole-input-div">
                <div className="input-flex">
                  <input
                    type="radio"
                    name=" OA-YesOrNo_Name-tab-2-qn-3"
                    id="OA-YesOrNo_ID-1-tab-2-qn-3"
                  />
                  <label for="OA-YesOrNo_ID-1-tab-2-qn-3">Yes</label>
                  <input
                    type="radio"
                    name=" OA-YesOrNo_Name-tab-2-qn-3"
                    id="OA-YesOrNo_ID-2-tab-2-qn-3"
                  />
                  <label for="OA-YesOrNo_ID-2-tab-2-qn-3">No</label>
                </div>
                <div className="small-txt-box-div">
                  <input
                    type="text"
                    className="small-text-box"
                    placeholder="what were they?"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="question-1 question-4 Overall-T2 Question-bor">
          <p>
            4).How would you describe the diversity and inclusivity of the
            campus environment? Is there room for improvement in this regard?.
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <div className="yesorno-options">
              <div className="whole-input-div">
                <div className="input-flex">
                  <input
                    type="radio"
                    name=" OA-YesOrNo_Name-tab-2-qn-4"
                    id="OA-YesOrNo_ID-1-tab-2-qn-4"
                  />
                  <label for="OA-YesOrNo_ID-1-tab-2-qn-4">Yes</label>
                  <input
                    type="radio"
                    name=" OA-YesOrNo_Name-tab-2-qn-4"
                    id="OA-YesOrNo_ID-2-tab-2-qn-4"
                  />
                  <label for="OA-YesOrNo_ID-2-tab-2-qn-4">No</label>
                </div>
                <div className="small-txt-box-div">
                  <input
                    type="text"
                    className="small-text-box"
                    placeholder="what were they?"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="question-1 question-5 Overall-T2 Question-bor">
          <p>
            5).Are there specific campus improvements or changes you would like
            to suggest to enhance the overall environment for students?
          </p>
          <div id="linear-scale" style={{ marginLeft: "39px" }}>
            <input
              type="text"
              className="extra-points"
              placeholder="what were they?"
            />
          </div>
        </div>
        <div className="disPlayErr-OverAll-T2"></div>
        <div className="submit-button">
          <button
            className="btn btn-purple"
            id="OverAllAnn2"
            onclick="OverAll2(this)"
            data-bs-toggle="modal"
            data-bs-target=""
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacultyOverallExpT2;
