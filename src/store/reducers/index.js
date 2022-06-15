import { combineReducers } from "redux";
import eventListReducer from "./EventListReducer";
import authReducer from "./authReducer";
import eventReducer from "./EventReducer"

export default combineReducers({
  eventList: eventListReducer,
  auth : authReducer,
  event:eventReducer
})