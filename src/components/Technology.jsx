import Navbar from './Navbar'
import Footer from './Footer'



export default function Technology() {
  return (
    <div> <Navbar />
     <div className='technology'>
     
        <h2  className="h2 justify" style={{fontSize:'2rem', textDecoration:'underline'}}> Technologies and Skills</h2>
        <h3 className='justify light-colour-navbar'> Technologies:</h3>
        <div className='tech'> 
        <i className="fa-brands fa-html5 fa-10x zoom tech-icon" style={{color:"#f0f2f5"}}></i>
        <i className="fa-brands fa-css3-alt fa-10x zoom tech-icon" style={{color:"#f0f2f5"}}></i>
        <i className="fa-brands fa-js fa-10x zoom tech-icon" style={{color:"#f0f2f5"}}></i>
        <i className="fa-brands fa-node fa-10x zoom tech-icon" style={{color:"#f0f2f5"}}></i>
        <i className="fa-brands fa-java fa-10x zoom tech-icon" style={{color:"#f0f2f5"}}></i>
     
        </div>
        <h3 className='justify light-colour-navbar'> Frameworks:</h3>
        <div className='tech'> 
        <i className="fa-brands fa-react fa-spin fa-spin-reverse fa-10x zoom tech-icon" style={{color:"#f0f2f5"}}></i>
        <i className="fa-brands fa-bootstrap fa-10x zoom tech-icon" style={{color:"#f0f2f5"}}></i>
        </div>
        </div>
        <Footer />
    </div> 
  )
}