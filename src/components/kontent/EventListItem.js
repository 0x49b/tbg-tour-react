import React from 'react'
import './event.css'

const EventListItem = ({ details }) => {
  return <li>{details.name} {details.play}</li>
}

export default EventListItem;
