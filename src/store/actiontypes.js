const actiontypes = () => {
  return {
    eventList: {
      getEventList: 'GET_EVENT_LIST',
      getEventListSuccess: 'GET_EVENT_LIST_SUCCESS',
      getEventListFailed: 'GET_EVENT_LIST_FAILED',
      setEventSuccess: 'SET_EVENT__SUCCESS'
    },
    auth: {
      loading: 'AUTH_LOADING',
      authFailure: 'AUTH_FAILURE',
      authSuccess: 'AUTH_SUCCESS',
      logout:      'LOGOUT',
      authAdmin:   'AUTH_ADMIN'
    }
  }
}



export default actiontypes