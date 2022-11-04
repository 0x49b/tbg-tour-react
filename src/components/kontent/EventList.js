import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../firebase.js'
import EventListItem from './EventListItem.js'
import './event.css'

const q = query(collection(db, 'events'), orderBy('event_timestamp', 'asc'))

const EventList = () => {
  const [saisonEvents, setSaisonEvents] = useState([])

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setSaisonEvents(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        })),
      )
    })
  })

  return (
    <div>
      {saisonEvents.map((event) =>
        event.item.active ? <EventListItem details={event.item} /> : '',
      )}
    </div>
  )
}
export default EventList
