import { ActionTypes } from "../actions-types";

 export const setEvent = (events) => {
  return {
    type: ActionTypes.SET_EVENTS,
    payload: events,
  };
};




 export const selectedEvent = (event) => {
  return {
    type: ActionTypes.SELECTED_EVENT,
    payload: event
  };
};
 export const removeSelectedEvent = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_EVENT,
  };
};

