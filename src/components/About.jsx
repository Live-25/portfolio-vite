import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function About() {
  return (
    <div className='about-me'>
        <Navbar />
        <h2 className=' h2 center' style={{fontSize:'3rem' }}> About me </h2>
        <h3 className=' justify' style={{textDecoration:'underline'}} > A bit about me .</h3>
        <p className='p-about'>
        Hi there! I'm Liveleen, a Front-End Developer who loves turning cool ideas into awesome websites. 
        I know my way around <b> HTML, CSS, and JavaScript </b>,and frameworks like <b> React</b> and <b>Bootstrap</b> and these days,
        I'm super excited about learning the MERN stack.
        Right now, I'm diving into MongoDB for managing data, Express.js for building strong server-side stuff,
        and Node.js for making scalable applications. 
        I'm gearing up to use the full potential of this awesome stack and create cool web apps.</p> 
        <p className='p-about'>I love tackling challenges and breaking things down to build awesome web experiences. 
        If you're into innovative projects or just want to chat about the latest web development buzz,
        check out my portfolio. Let's team up and create something amazing! 
        I thrive on engaging with fellow developers, designers, and creators to bring fresh ideas to life. 
         </p> 
        <h5 className='justify'>Feel free to reach out—I'm always excited to meet fellow tech enthusiasts and 
        explore new opportunities.</h5>
        <h5 className='justify'> Let's connect, collaborate, and build something amazing together. </h5>

        <button className='home-about-btn1 '> <Link className="home-about-btn" href='/technology'> Know skills </Link>   </button>
    
    </div>

  )
}