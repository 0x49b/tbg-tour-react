import React from 'react'
import './event.css'

const EventListItem = ({ details }) => {
  return (
    <li className="event-list-item">
      <div className="event-list-item-header">
        <div className="event-list-item-title">{details.name}</div>
          
          {details.cert !== null ? (
            <div className="event-list-pill">{details.cert}</div>
          ) : (
            ''
          )}
        
      </div>

      <div className='event-list-body'>
      {details.ca_play ? `ca. ${details.play}` : details.play}
      </div>

      
    </li>
  )
}

export default EventListItem
