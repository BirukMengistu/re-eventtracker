import React from 'react'
import {Link } from 'react-router-dom'

export default function EventCard({event}) {
    
      
      const today = new Date()
    
    


// Update the count down every 1 second



  return (
      
    <div className="card text-center m-3 shadow">
    <div className="card-header">{today.toLocaleString('default', { month: 'long' })} - Event</div>
      <div className="card-body">
    <h5 className="card-title">{event.title}</h5>
    <p className="card-text">{(event.description).slice(0,72)} ...</p>
    <Link to ={`/eventdetail/${event._id}`} event={event} className="btn btn-primary">Read More</Link>
  </div>
  <div className="card-footer text-muted">{event.event_start_date} <span id='date-counter'></span>  </div>
</div>
  )
}
