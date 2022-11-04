import React from 'react'
import './pageheaderfooter.css'

const PageFooter = () => {

  return (
    <nav className="navbar navbar-dark bg-dark fixed-bottom">
      <div className="container">
        <ul className="nav navbar-nav mx-auto text-center">
          <li class="nav-item footer-brand text-light">&copy; {new Date().getFullYear()} Trombongos 🎉</li>
        </ul>
      </div>
    </nav>
  )
}

export default PageFooter
