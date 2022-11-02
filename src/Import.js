import React from 'react'
import { useState } from 'react'

const Import = () => {
  const [message, setMessage] = useState('')

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
    console.log(event.target.value)
  }

  const handleButtonPush = (event) => {
    console.log('Push it.')
    console.log(JSON.parse(message))
    const jsonData = JSON.parse(message)

    jsonData.forEach((e) => {
      delete e.url
      console.log(e)
    })
  }

  return (
    <div>
      <h3>Events</h3>
      <pre>
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
