import Avatar from '../../assets/potato-avatar.png'
import './home.css'
import './home-phone.css'


// eslint-disable-next-line react/prop-types
const Home = ({homeId}) => {
  const dev = "Frontend Developer </>"
  return (
    <div id={homeId} className='home-container'>
      <img src={Avatar}/>
      <h1>Ervan Jovian</h1>
      <h2>{dev}</h2>
      <br/>
      <p>Yesterday is history, Tomorrow is a mystery, but today is a gift. That is why it is called the present🎁.</p> 
      <br/>
      <p>-Master Oogways🐢</p>
      <br/>
      <a target='_blank' href='https://drive.google.com/file/d/1tUUMled7aZJSDJxX2yXFyTI_30YpfLAL/view?usp=sharing' rel="noreferrer">Download CV</a>
    </div>
  )
}

export default Home