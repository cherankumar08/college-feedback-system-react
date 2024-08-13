import { combineReducers } from "redux";
import userReducer from "./Slice/slice";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
