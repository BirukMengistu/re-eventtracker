import React from 'react'
import  { Link} from 'react-router-dom'
import {useDispatch ,useSelector} from 'react-redux'
import { logoutUser } from '../../store/actions/authActions'

 const Navbar = () => {
  
    
    const dispatch = useDispatch()
    
    const isAuth = useSelector(state => state.auth.token)
    
  return (
    <nav className="navbar navbar-expand-lg text-light bg-warning">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
      <Link  to ='/events' className="navbar-brand text-light" href="#">Event Tracker</Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to ='/events' className=" text-light nav-link active" aria-current="page" href="#">News</Link>
          </li>
          <li className="nav-item">
            {isAuth && <Link to ='/addevent' className=" text-light nav-link active" aria-current="page" href="#">AddEvent</Link> }
           
          </li>
        </ul>
  
      </div>
      <div className="d-flex align-items-center">
      { isAuth
          // ? <Link to="/UserView"><button className='nav-btn'>MINA SIDOR</button></Link>
          ? <Link onClick={() => dispatch(logoutUser())} to="/login"><button className='nav-btn btn btn-info'>Logga ut</button></Link>
          : <Link to="/login"><button className='nav-btn btn btn-info'>LOGGA IN</button></Link>
          }
          
           
           
     {/*    <Link  to='/login' type="button" className="btn text-light btn-link px-3 me-2">
          Login
        </Link>
        <Link to='/register' type="button" 
        onClick ={()=>{
            setLoginStatus(true)
        }} className="btn btn-primary me-3">
          Sign up
        </Link> */}
      
      </div>
    </div>
    
  
  </nav>

  )
}

export default Navbar