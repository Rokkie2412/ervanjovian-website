import { useRef } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'
import './Navbar-phone.css'
import { Link } from 'react-router-dom'

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
        <Link className='link-nav' onClick={showNavBar} to={`${home}`}>Home</Link>
        <Link className='link-nav' onClick={showNavBar} to={`${about}`}>About Me</Link>
        <Link className='link-nav' onClick={showNavBar} to={`${porto}`}>Timeline</Link>
        <Link className='link-nav' onClick={showNavBar} to={`${certif}`}>Certifcation</Link>
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