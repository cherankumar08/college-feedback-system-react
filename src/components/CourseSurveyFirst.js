import React from "react";
import "../sass/helpers/Question.css";
import "../sass/helpers/Question.css";
// import '../sass/index.scss'

const SurveyQuestions = [
  "1). On a scale from 1 to 5, how would you rate the clarity of the course materials and lecture notes?",
  "2). How satisfied are you with the clarity of explanations provided in this subject?",
  "3). Were the assignments and practical exercises helpful in for your understanding of the subject matter?",
  "4). Did you find the pace of the course to be appropriate for your learning needs?",
  "5). Please rate your overall satisfaction with this subject.",
];

const CourseSurveyFirst = (props) => {
  const { SurveyQuestions } = props;
  return (
    <div>
      <div className="question bor-ques Inst-T1">
        <div className="question-1 qn-check-T1 question-1">
          <p className=""></p>
          <div id="linear-scale">
            <p>Very Poor</p>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-1-rating1_1">
                1
              </label>
              <input
                type="radio"
                name="Tab-1-rating-1-qn-1"
                value="1"
                id="Tab-1-qn-1-rating1_1"
              />
            </div>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-1-rating1_2">
                2
              </label>
              <input
                type="radio"
                name="Tab-1-rating-1-qn-1"
                value="2"
                id="Tab-1-qn-1-rating1_2"
              />
            </div>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-1-rating1_3">
                3
              </label>
              <input
                type="radio"
                name="Tab-1-rating-1-qn-1"
                value="3"
                id="Tab-1-qn-1-rating1_3"
              />
            </div>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-1-rating1_4">
                4
              </label>
              <input
                type="radio"
                name="Tab-1-rating-1-qn-1"
                value="4"
                id="Tab-1-qn-1-rating1_4"
              />
            </div>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-1-rating1_5">
                5
              </label>
              <input
                type="radio"
                name="Tab-1-rating-1-qn-1"
                value="5"
                id="Tab-1-qn-1-rating1_5"
              />
            </div>
            <p>Very Good</p>
          </div>
        </div>
        {/* <!-- Tab-1-qn-2- --> */}
        <div className="question-1 qn-check-T1 question-2">
          <p></p>
          <div id="linear-scale">
            <p>Not satisfied</p>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-2-rating2_1">
                1
              </label>
              <input
                type="radio"
                name="Tab-1-rating-2-qn-2"
                value="1"
                id="Tab-1-qn-2-rating2_1"
              />
            </div>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-2-rating2_2">
                2
              </label>
              <input
                type="radio"
                name="Tab-1-rating-2-qn-2"
                value="2"
                id="Tab-1-qn-2-rating2_2"
              />
            </div>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-2-rating2_3">
                3
              </label>
              <input
                type="radio"
                name="Tab-1-rating-2-qn-2"
                value="3"
                id="Tab-1-qn-2-rating2_3"
              />
            </div>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-2-rating2_4">
                4
              </label>
              <input
                type="radio"
                name="Tab-1-rating-2-qn-2"
                value="4"
                id="Tab-1-qn-2-rating2_4"
              />
            </div>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-2-rating2_5">
                5
              </label>
              <input
                type="radio"
                name="Tab-1-rating-2-qn-2"
                value="5"
                id="Tab-1-qn-2-rating2_5"
              />
            </div>
            <p>Satisfied</p>
          </div>
        </div>
        {/* <!-- Tab-1-qn-3- --> */}
        <div className="question-1 qn-check-T1 question-3">
          <p></p>
          <div id="linear-scale">
            <p>Not Helpful</p>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-3-rating3_1">
                1
              </label>
              <input
                type="radio"
                name="Tab-1-rating-3-qn-3"
                value="1"
                id="Tab-1-qn-3-rating3_1"
              />
            </div>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-3-rating3_2">
                2
              </label>
              <input
                type="radio"
                name="Tab-1-rating-3-qn-3"
                value="2"
                id="Tab-1-qn-3-rating3_2"
              />
            </div>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-3-rating3_3">
                3
              </label>
              <input
                type="radio"
                name="Tab-1-rating-3-qn-3"
                value="3"
                id="Tab-1-qn-3-rating3_3"
              />
            </div>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-3-rating3_4">
                4
              </label>
              <input
                type="radio"
                name="Tab-1-rating-3-qn-3"
                value="4"
                id="Tab-1-qn-3-rating3_4"
              />
            </div>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-3-rating3_5">
                5
              </label>
              <input
                type="radio"
                name="Tab-1-rating-3-qn-3"
                value="5"
                id="Tab-1-qn-3-rating3_5"
              />
            </div>
            <p>Very Helpful</p>
          </div>
        </div>
        {/* <!-- Tab-1-qn-4- --> */}
        <div className="question-1 qn-check-T1 question-4">
          <p></p>
          <div id="linear-scale">
            <p>Too slow</p>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-4-rating4_1">
                1
              </label>
              <input
                type="radio"
                name="Tab-1-rating-4-qn-4"
                value="1"
                id="Tab-1-qn-4-rating4_1"
              />
            </div>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-4-rating4_2">
                2
              </label>
              <input
                type="radio"
                name="Tab-1-rating-4-qn-4"
                value="2"
                id="Tab-1-qn-4-rating4_2"
              />
            </div>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-4-rating4_3">
                3
              </label>
              <input
                type="radio"
                name="Tab-1-rating-4-qn-4"
                value="3"
                id="Tab-1-qn-4-rating4_3"
              />
            </div>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-4-rating4_4">
                4
              </label>
              <input
                type="radio"
                name="Tab-1-rating-4-qn-4"
                value="4"
                id="Tab-1-qn-4-rating4_4"
              />
            </div>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-4-rating4_5">
                5
              </label>
              <input
                type="radio"
                name="Tab-1-rating-4-qn-4"
                value="5"
                id="Tab-1-qn-4-rating4_5"
              />
            </div>
            <p>Too Fast</p>
          </div>
        </div>
        {/* <!-- Tab-1-qn-5- --> */}
        <div className="question-1 qn-check-T1 question-5">
          <p></p>
          <div id="linear-scale">
            <p>Not Satisfied</p>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-5-rating5_1">
                1
              </label>
              <input
                type="radio"
                name="Tab-1-rating-5-qn-5"
                value="1"
                id="Tab-1-qn-5-rating5_1"
              />
            </div>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-5-rating5_2">
                2
              </label>
              <input
                type="radio"
                name="Tab-1-rating-5-qn-5"
                value="2"
                id="Tab-1-qn-5-rating5_2"
              />
            </div>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-5-rating5_3">
                3
              </label>
              <input
                type="radio"
                name="Tab-1-rating-5-qn-5"
                value="3"
                id="Tab-1-qn-5-rating5_3"
              />
            </div>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-5-rating5_4">
                4
              </label>
              <input
                type="radio"
                name="Tab-1-rating-5-qn-5"
                value="4"
                id="Tab-1-qn-5-rating5_4"
              />
            </div>
            <div className="linear-scale-qn">
              <label className="radio-label" htmlFor="Tab-1-qn-5-rating5_5">
                5
              </label>
              <input
                type="radio"
                name="Tab-1-rating-5-qn-5"
                value="5"
                id="Tab-1-qn-5-rating5_5"
              />
            </div>
            <p>Very Satisfied</p>
          </div>
        </div>

        <div className="disPlayErr"></div>

        <div className="submit-button">
          <button
            className="btn btn-purple"
            onclick="checkQuestions1(this)"
            id="Anonymous1"
            data-bs-toggle="modal"
            data-bs-target=""
          >
            Submit as Anonymous
          </button>
          <button
            className="btn btn-purple"
            onclick="checkQuestions1(this)"
            id="Stdnt1"
            data-bs-toggle="modal"
            data-bs-target=""
          >
            Submit as Student
          </button>
        </div>

        {/* <!-- Modals --> */}
        <div
          className="modal fade"
          id="anonymousModal1"
          tabindex="-1"
          aria-labelledby="anonymousModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h5 className="modal-title text-center" id="studentModalLabel">
                  Submitted Successfully as Anonymous!
                </h5>
                {/* <!-- <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> --> */}
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="studentModal1"
          tabindex="-1"
          aria-labelledby="studentModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h5 className="modal-title text-center" id="studentModalLabel">
                  Submitted Successfully as Student!
                </h5>
                {/* <!-- <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> --> */}
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button type="button" className="btn " data-bs-dismiss="modal">
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSurveyFirst;
