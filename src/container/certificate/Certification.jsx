import { CertificationList } from './Certification-list'
import {BsMouseFill} from 'react-icons/bs'
import './Certifcation.css'
import './Certification-phone.css'

// eslint-disable-next-line react/prop-types
const Certification = ({idCertif}) => {
  return (
    <div id={idCertif} className='certifcation-container'>
      <div className='certification-title'>
        <h1>My Certification</h1>
        <p className='certif-hint'>Scroll to view more <BsMouseFill className='mouse-ani bounce'/></p>
        <p className='certif-hint2'>Slide to view more <BsMouseFill className='mouse-ani swing'/></p>
      </div>
      
      <div className='certification-list'>
        {
          CertificationList.map((item) => (
            <img className='certification-image' src={item.image} alt={item.name} key={item.id} />
          ))
        }
      </div>
    </div>
  )
}

export default Certification