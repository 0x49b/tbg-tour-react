import React from 'react'
import { useState } from 'react'
import { db } from './firebase.js'
import { collection, addDoc } from 'firebase/firestore'

const Import = () => {
  const [message, setMessage] = useState('')
  const [collectionString, setCollection] = useState('')

  const handleMessageChange = (event) => setMessage(event.target.value)
  const handleCollectionChange = (event) => setCollection(event.target.value)

  const handleButtonPush = (event) => {
    console.log('Push it.')
    console.log(JSON.parse(message))
    const jsonData = JSON.parse(message)
    
    jsonData.forEach((elem) => {
        delete elem.url
            delete elem.uuid

        const nDa = elem.date.split('.')

        elem.event_timestamp = new Date(`${nDa[1]}.${nDa[0]}.${nDa[2]} ${elem.play}`)
        console.log(elem)
  
        addDoc(collection(db, collectionString), elem )
      })
      
  }

  return (
    <div>
      <h3>Events</h3>
      <pre>
        <label htmlFor="collection">Collection</label>
        <input
          type="text"
          id="collection"
          name="collection"
          value={collectionString}
          onChange={handleCollectionChange}
        />
        <br />
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleMessageChange}
          rows="60"
          cols="200"
        ></textarea>
      </pre>
      <button onClick={handleButtonPush}>Start Import</button>
    </div>
  )
}

export default Import
