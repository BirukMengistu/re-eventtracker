import React from 'react'
import {Link} from 'react-router-dom'
import './landing.css'
import HeroImg from '../assets/landing_two.jpg'
export default function Landing() {
    const today = new Date()
today.toLocaleString('default', { month: 'long' })
  return (
    <section className="HeroSec">
    <div className="contentWrapper">
     
      <div className="leftContent">
     
        <h2><span>{today.toLocaleString('default', { month: 'long' })}, {new Date().getFullYear()}</span> coming a new Events?</h2>
        <div className="box-cta">
           <Link to='/events' className='btn btn-cta'>CALL TO ACTION</Link>
        </div>
      </div>

      <div className="rigthContent">
        <div className="heroImg">
          <img src={HeroImg} alt="draw with healthy calcule" />
        </div>
      </div>
    </div>
  </section>
  )
}
