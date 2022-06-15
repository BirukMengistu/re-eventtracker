import React ,{useState} from 'react'

const AddSubscribe = () => {
    const [subEmail , setSubEmail] = useState('')
  return (
    <div className='sub-modal'>AddSubscribe
        <form>
        <div className="form-group col-md-6">
            <label htmlFor="inputAddress">Enter Email</label>
            <input value ={subEmail} 
            type="email" 
            onChange ={(e)=>{
                setSubEmail(e.target.value)}}
                className ="form-control" id="inputAddress" placeholder="Subscriber email"/>
        </div>
        </form>
    </div>
      
  )
}

export default AddSubscribe