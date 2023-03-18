import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What i offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <articel className="service">
          <div className="service__head">
            <h3>UI/UX Designer</h3> 
          </div>
          <ul className="service__list">
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
            </ul>
        </articel>

        <articel className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
            </ul>
        </articel>

        <articel className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
            </ul>
        </articel>

      </div>
    
    </section>
  )
}

export default services