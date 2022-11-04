import React from 'react'
import './event.css'

const EventListItem = ({ details }) => {
  return (
    <div className='card bg-secondary mb-4'>
      {details.name}
    </div>
  )
}

export default EventListItem
