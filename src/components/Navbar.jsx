import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isToggled, setToggle] = useState(false)

  const toggleButton = () => {
    setToggle(!isToggled)
  }

  return (
    <div className='navbar-stick'>
      <div>
        <nav className='navbar navbar-expand-lg'>
          <div className='container-fluid'>
            <Link className='navbar-brand zoom logo-font-LK' to='/'>
              {' '}
              L K <h6 className='logo'> Liveleen Kaur</h6>{' '}
            </Link>
            <button
              onClick={toggleButton}
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon light'></span>
            </button>
            <div
              className={
                'collapse navbar-collapse' + (isToggled ? ' show' : '')
              }
              id='navbarNav'
            >
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link className='nav-link zoom' to='/about'>
                    About
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link zoom' to='/technology'>
                    Skills
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link zoom' to='/projects'>
                    Projects
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link zoom' to='/contact'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <hr className='orange' />
      </div>
    </div>
  )
}