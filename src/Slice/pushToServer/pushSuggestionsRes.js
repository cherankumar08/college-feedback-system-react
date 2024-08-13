import { addSelectedOption } from "../optionsSlice";

export const pushSuggestionsRes =
  (StudentEmail, QuestionNumber, SubjectName, selectedOption) =>
  async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/Surveysuggestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          StudentEmail,
          QuestionNumber,
          SubjectName,
          selectedOption,
        }),
      });
      if (response.ok) {
        // Dispatch an action to add the selected option message to the Redux store
        dispatch(
          addSelectedOption(
            StudentEmail,
            QuestionNumber,
            SubjectName,
            selectedOption
          )
        );
      } else {
        throw new Error("Failed to push option to server");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
