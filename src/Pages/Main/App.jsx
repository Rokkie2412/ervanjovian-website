import Home from '../../container/home/home'
import Navbar from '../../container/navbar/Navbar'
import About from '../../container/about/About'
import Experience from '../../container/experience/Experience'
import Footer from '../../container/footer/Footer'
import Certification from '../../container/certificate/Certification'

const App = () => {
  const homeID = 'home'
  const aboutID = 'about'
  const portoID = 'porto'
  const certifID = 'certif'

  return (
    <div style={{backgroundColor:'#222831'}}>
      <Navbar home={homeID} porto={portoID} about={aboutID} certif={certifID}/>
      <Home homeId={homeID}/>
      <About aboutId={aboutID}/>
      <br/>
      <Experience portoID={portoID}/>
      <br/>
      <Certification idCertif={certifID}/>
      <br/>
      <Footer/>
    </div>
  )
}

export default App