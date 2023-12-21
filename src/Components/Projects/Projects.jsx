import React from 'react'
import project1 from '../../Assets/project1.jpeg'
import project2 from '../../Assets/project2.jpeg'
import project3 from '../../Assets/project3.jpeg'

const Projects = () => {
  return (
    <div className='hero'>
        <div className='hero-wrapper'>
            <div><h1>- PROJECTS -</h1></div>
            <div className='projects'>
                <div>
                    <p>WOHNDESIGN</p>
                    <img src={project1} alt="" />
                </div>
                <div>
                    <p>EDMA GMBH</p>
                    <img src={project2} alt="" />
                </div>
                <div>
                    <p>SPOT-TEC IMMOBILIEN AG</p>
                    <img src={project3} alt="" />
                </div>
            </div>
            <div>
                <button>LOAD MORE</button>
            </div>
        </div>
    </div>
  )
}

export default Projects