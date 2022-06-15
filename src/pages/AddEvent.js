import React ,{useState} from 'react'
import { addEvent } from '../store/actions/eventListActions'
import { useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux'
const AddEvent = () => {
      const [title ,setTitle] = useState('')
      const [imgUrl ,setImgUrl] = useState('')
      const [description ,setDescription] = useState('')
      const [meal ,setMeal] = useState('')
      const [cityName ,setCityName] = useState('')
      const [price ,setPrice] = useState('')
      const [dresscode ,setDresscode] = useState('')
      const [venueName ,setVenueName] = useState('')
      const [eventStartDate ,setEventStartDate] = useState(new Date().now)
      const [eventEndDate ,setEventEndDate] = useState(new Date().now)
      
      const event ={
          title,
          url: imgUrl,
          description,
          venue_name:venueName,
          meal,
          price,
          dresscode,
          event_start_date:eventStartDate,
          event_end_date:eventEndDate,
          city_name:cityName
      }
   const dispatch = useDispatch()
   const navigation = useNavigate()
   const formInputReset =()=>{
       
   }
   const handleSubmit =(e) =>{
       e.preventDefault();
       console.log('Handle submit')
       console.log(event)
       dispatch(addEvent(event))
       formInputReset()
       navigation('/')
   }
  const checkInput = [title , dresscode , description , imgUrl, cityName].every(Boolean)
  return (
    <div>
    <div className='container'>
    <h2 className='m-3 text-center'>New Event</h2>
          <form>
    <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">Title</label>
      <input value ={title} type="text" onChange ={(e)=>{
          setTitle(e.target.value)
      }} className="form-control"  placeholder="Title"/>
    </div>
    <div className="form-group col-md-6">
    <label htmlFor="inputAddress">venue_name</label>
    <input value ={venueName} 
    type="text" 
    onChange ={(e)=>{
        setVenueName(e.target.value)}}
          className ="form-control" id="inputAddress" placeholder="venue_name"/>
  </div>
   
  </div>
  <div className="form-group ">
      <label htmlFor="inputPassword4">Description</label>
      <textarea 
       value ={description} 
       onChange ={(e)=>{
        setDescription(e.target.value)}} type="text" className="form-control"  placeholder="Description"/>
    </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">Image URL</label>
    <input 
     onChange ={(e)=>{
        setImgUrl(e.target.value)}}
    value ={imgUrl} type="text" className="form-control"  placeholder="img address (URL)"/>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Meal</label>
    <input  
     onChange ={(e)=>{
        setMeal(e.target.value)}}
    value ={meal} type="text" className="form-control" id="inputAddress" placeholder="Meal option"/>
  </div>
  
  <div className="form-group">
    <label htmlFor="inputAddress">Dresscode</label>
    <input 
     onChange ={(e)=>{
        setDresscode(e.target.value)}}
    value ={dresscode} type="text" className="form-control" id="inputAddress" placeholder="Dresscode"/>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Intrance Price</label>
    <input 
     onChange ={(e)=>{
        setPrice(e.target.value)}}
    value ={price} type="text" className="form-control" id="inputAddress" placeholder="Intrance"/>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">City</label>
    <input 
     onChange ={(e)=>{
        setCityName(e.target.value)}}
    value ={cityName} type="text" className="form-control" id="inputAddress" placeholder="Intrance"/>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Event opening day</label>
    <input 
     onChange ={(e)=>{
        setEventStartDate(e.target.value)}}
    value ={eventStartDate} type="date" className="form-control" id="inputAddress" placeholder="opening day"/>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Event clossing day</label>
    <input 
     onChange ={(e)=>{
        setEventEndDate(e.target.value)}}
    value ={eventEndDate} type="date" className="form-control" id="inputAddress" placeholder="clossing day"/>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" 
  className="btn btn-primary"
  disabled ={!checkInput}
  onClick={handleSubmit}>Save New Event</button>
          </form>
    </div>
    </div>
  )
}

export default AddEvent
