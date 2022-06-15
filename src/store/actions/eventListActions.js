import actiontypes from '../actiontypes'

import axios from 'axios'

export const getEvents = () => {
  return async dispatch => {
    dispatch({
      type: actiontypes().eventList.getEventList
    })
    try {
      const res = await axios.get('http://localhost:5050/api/events')
       console.log(res.data)
      if(res.status === 200) {
        dispatch(getEventListSuccess(res.data))
      } 
      else {
        throw new Error('was not able to fetch the data')
      }
    } catch (error) {
      dispatch(getEventListFailed(error.message))
    
    }
  }
}

export const addEvent = (event) => {
  return async dispatch => {
    dispatch({
      type: actiontypes().eventList.setEventSuccess
    })
    try {
      const res = await axios.post('http://localhost:5050/api/events' ,event)
       console.log(res.data)
      if(res.status === 201) {
        dispatch(setEventSuccess(res.data))
      } 
      else {
        throw new Error('was not able to post the event')
      }
    } catch (error) {
      dispatch(getEventListFailed(error.message))
    
    }
  }
}
const setEventSuccess =(events) =>{
  return {
    type: actiontypes().eventList.setEventSuccess,
    payload: events
  }
}
const getEventListSuccess = (events) => {
  return {
    type: actiontypes().eventList.getEventListSuccess,
    payload: events
  }
}

const getEventListFailed = (error) => {
  return {
    type: actiontypes().eventList.getEventListFailed,
    payload: error
  }
}

