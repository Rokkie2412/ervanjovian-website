import {FaReact,FaGithub} from 'react-icons/fa'
import {TbBrandReact, TbBrandVite} from 'react-icons/tb'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <h5>Created by Ervan Jovian</h5>
      <p>Created with:</p>
      <section className='footer-logos'>
        <a target='_blank' href='https://react.dev/' rel="noreferrer"><FaReact/></a>
        <a target='_blank' href='https://github.com/' rel="noreferrer"><FaGithub/></a>
        <a target='_blank' href='https://vitejs.dev/' rel="noreferrer"><TbBrandVite/></a>
        <a target='_blank' href='https://react-icons.github.io/react-icons/' rel="noreferrer"><TbBrandReact/></a>
      </section>
      <h6>©Copyright 2023</h6>
    </footer>
  )
}

export default Footer