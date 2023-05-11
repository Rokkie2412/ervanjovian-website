import {useState} from 'react'
import './Experience.css'
import './Experience-phone.css'
import {education, experience} from './experienceItem'

// eslint-disable-next-line react/prop-types
const Experience = ({portoID}) => {
  const [section,setSection] = useState(true)

  const showNavBar = () =>{
    setSection(!section)
  }

  return (
    <div id={portoID} className='experience-container'>
      <h1>My Experience</h1>
      <div className='experience-phone-button'>
        <button onClick={showNavBar}>Education</button>
        <button onClick={showNavBar}>Experience</button>
      </div>
      <div className='experience-content'>
          <div className='education'>
            <h2 className='title-section'>Education</h2>
            
              {education.map((item)=>(
                <div key={item.title} className='education-card'>
                  <div className='education-info'>
                    <h3>{item.title}</h3>
                    <h4>{item.year}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <div className='education-photo'>
                    <img  src={item.image}/>
                  </div>
                </div>
              ))}
          </div>
          <div className='experience'>
            <h2 className='title-section'>Experience</h2>
            {experience.map((item)=>(
              <div key={item.title} className='education-card'>
                  <div className='education-info'>
                    <h3>{item.title}</h3>
                    <h4>{item.places}</h4>
                    <h4>{item.year}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <div className='education-photo'>
                    <img  src={item.image}/>
                  </div>
                </div>
            ))}
          </div>
      </div>

      <div className='experience-content-phone'>
          {
            section ? 
            <div className='education-phone'>
              {education.map((item)=>(
                <div key={item.title} className='education-card'>
                  <div className='education-info'>
                    <h3>{item.title}</h3>
                    <h4>{item.year}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <div className='education-photo'>
                    <img  src={item.image}/>
                  </div>
                </div>
              ))}
          </div>
          :
          <div className='experience-phone'>
            {experience.map((item)=>(
              <div key={item.title} className='education-card'>
                  <div className='education-info'>
                    <h3>{item.title}</h3>
                    <h4>{item.places}</h4>
                    <h4>{item.year}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <div className='education-photo'>
                    <img  src={item.image}/>
                  </div>
                </div>
            ))}
          </div>
          }
      </div>
    </div>
  )
}

export default Experience