import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
//import SaisonEvent from './components/SaisonEvent'
import { db } from './firebase.js'
import Header from './components/Header.js'

//import SaisonEvent from './components/SaisonEvent'

const q = query(collection(db, 'events'), orderBy('event_timestamp', 'asc'))

const App = () => {
  const [saisonEvents, setSaisonEvents] = useState([])

/*   useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setSaisonEvents(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        })),
      )
    })
  }) */
  

  return (
    <div className='container'>
      <Header/>
      
    </div>
  )
}

export default App
