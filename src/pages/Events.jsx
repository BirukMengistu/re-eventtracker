import React,{useEffect } from 'react'

import EventCard from '../components/events/EventCard'
import { useDispatch, useSelector } from 'react-redux'
import { getEvents } from '../store/actions/eventListActions'
export const Events = () => {
         const dispatch = useDispatch()

         const events = useSelector(state => state.eventList.data)
         
         useEffect(() => {
            dispatch(getEvents())
          }, [dispatch])


  return (
    <div><ul>
    {events && events.map((event, index) => (
        <EventCard key={index} event={event} />
    ))}
  </ul></div>
  )
}
/*  */