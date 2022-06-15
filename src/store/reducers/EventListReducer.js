import actiontypes from '../actiontypes'

const initState = {
  loading: false,
  error: null,
  data: []
}

const eventListReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().eventList.getEventList:
      return {
        ...state,
        loading: true
      }

    case actiontypes().eventList.getEventListSuccess:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    
    case actiontypes().eventList.getEventListFailed:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default eventListReducer