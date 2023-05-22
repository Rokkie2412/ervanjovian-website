import { useRef } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'
import './Navbar-phone.css'

// eslint-disable-next-line react/prop-types
const Navbar = ({home, about, porto, certif}) => {
  const navRef = useRef()

  const showNavBar = () =>{
    navRef.current.classList.toggle('responsive-nav')
  }

  return (
    <header className='navbar-container'>
      <h1>Ervan.</h1>
      <nav ref={navRef}>
        <a onClick={showNavBar} href={`#${home}`}>Home</a>
        <a onClick={showNavBar} href={`#${about}`}>About Me</a>
        <a onClick={showNavBar} href={`#${porto}`}>Timeline</a>
        <a onClick={showNavBar} href={`#${certif}`}>Certifcation</a>
        <button className='nav-btn nav-close-btn' onClick={showNavBar}>
          <FaTimes className='nav-icon'/>
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavBar}>
        <FaBars className='nav-icon'/>
      </button>
    </header>
  )
}

export default Navbar