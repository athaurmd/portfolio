import React from 'react'
import './portfolio.css'
import proj1 from '../../assets/15.png'
import proj2 from '../../assets/14.png'
import proj3 from '../../assets/13.png'
import proj4 from '../../assets/12.png'
import proj5 from '../../assets/11.png'
import proj6 from '../../assets/10.png'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container container__portfolio">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img  src={proj1} alt="portfolio-proj" />
          </div>
          <h3>Portfolio Heading</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/athaurmd/project_15" target = "_blank" className='btn'>github</a>
          <a href="https://designer-portfolio-webpage.netlify.app/" target = "_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img  src={proj2} alt="portfolio-proj" />
          </div>
          <h3>Portfolio Heading</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/athaurmd/project_14" target = "_blank" className='btn'>github</a>
          <a href="https://media-webpage.netlify.app/"target = "_blank"  className='btn btn-primary'>Live Demo</a>
          </div>
         
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img  src={proj3} alt="portfolio-proj" />
          </div>
          <h3>Portfolio Heading</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/athaurmd/project_13"target = "_blank"  className='btn'>github</a>
          <a href="https://saas-landingweb-page.netlify.app/" target = "_blank" className='btn btn-primary'>Live Demo</a>
          </div>
          
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img  src={proj4} alt="portfolio-proj" />
          </div>
          <h3>Portfolio Heading</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/athaurmd/project_12" target = "_blank"  className='btn'>github</a>
          <a href="https://business-webservices-landing-homepage.netlify.app/" target = "_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img  src={proj5} alt="portfolio-proj" />
          </div>
          <h3>Portfolio Heading</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/athaurmd/project_11" target = "_blank" className='btn'>github</a>
          <a href="https://hosting-services-landing-webpage.netlify.app/" target = "_blank" className='btn btn-primary'>Live Demo</a>
          </div>
          
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img  src={proj6} alt="portfolio-proj" />
          </div>
          <h3>Portfolio Heading</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/athaurmd/project_10" target = "_blank" className='btn'>github</a>
          <a href="https://interior-designing-landing-webpage.netlify.app/" target = "_blank" className='btn btn-primary'>Live Demo</a>
          </div>
          
        </article>

        
      </div>
    </section>
  )
}

export default portfolio