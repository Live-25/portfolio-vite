import Cards from './Cards'
import Navbar from './Navbar'
import Footer from './Footer'
import portfolio from './portfolio.png'


export default function Project() {
  return (
    <div >
    <Navbar />
    <h2 className='h2 center' style={{fontSize:'3.5rem'}}> Projects </h2>
    <div className='projects'> 
    <div className='projects'>
            <Cards 
              title="Tindog"
              content="Tindog a website based on dogs focusing on dog-care and to help pet parents find a perfect match for their dog."
              img="https://storage.googleapis.com/petbacker/images/blog/2017/two-dogs.jpg" 
             // img="public/images/two-dogs.jfif"
            />
    </div>
    <div className='projects'>
            <Cards 
              title="Fashnica"
              content="Fashnica is a website prototype infusing skincare with beauty and makeup. It also includes blogs and articles on skincare etc."
              img="https://www.realsimple.com/thmb/TDab9skIsFnyST2LdTt_twl_guI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-skincare-routine-for-40s-2000-bd26f1a8dd694868a41c27897ecabce4.jpg"
              link="https://github.com/Live-25/fashnica"
            />
    </div>
    <div className='projects'>
            <Cards 
              title="Portfolio"
              content="It's my portfolio website made in React and is resposnive as well.It includes my education, skills etc."
              img={portfolio}
              link="https://github.com/Live-25/portfolio"
            />
    </div>
    </div>
    <Footer />
    </div>
  )
}

/* ALL GOOD */