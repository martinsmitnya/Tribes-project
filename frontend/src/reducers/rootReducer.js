import userReducer from "./userReducer";
import buildingReducer from './buildingReducer'
import resourceReducer from "./resourceReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userReducer : userReducer,
  buildingReducer : buildingReducer,
  resourceReducer : resourceReducer,
});

export default rootReducer;
