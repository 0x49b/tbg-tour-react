import React from 'react'
import './pageheaderfooter.css'

const PageHeader = ({ currentSaison }) => {
  return (
    <nav class="navbar navbar-dark bg-dark fixed-top">
      <div class="container">
        <ul class="nav navbar-nav mx-auto">
          <li class="nav-item text-light">Trombongos Tour {currentSaison}</li>
        </ul>
      </div>
    </nav>
  )
}
export default PageHeader
