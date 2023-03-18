import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id = 'about'>
      <h5>Get to know</h5>
      <h2>About ME</h2>
      
      <div className="container about_container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>
        
        
        <div className="about__ca">
          <div className="about__cards">
            <article className='about-card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ years of Experience</small>

            </article>
            <article className='about-card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>100+</small>

            </article>
            <article className='about-card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ projects</small>

            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo distinctio iure, exercitationem sapiente facilis dolores sit commodi dolore aperiam. Fugit, dolorum. Perferendis itaque vero ad minus ipsa modi in? Voluptatum.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>

    
  )
}

export default about