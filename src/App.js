import { collection, onSnapshot, where, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import Kontent from './components/kontent/Kontent.js'
import PageFooter from './components/menu/PageFooter.js'
import PageHeader from './components/menu/PageHeader.js'
import { db } from './firebase.js'

function App() {
  const [saison, setSaison] = useState('')

  useEffect(() => {
    const docRef = query(collection(db, 'saison'), where('active', '==', true))
    const unsubscribe = onSnapshot(docRef, (doc) => {
      setSaison(doc.docs[0].data().name)
    })
    console.log(saison)
    return () => unsubscribe()
  })

  return (
    <div className='container-fluid root-container bg-dark'>
      <PageHeader currentSaison={saison} />
      <Kontent />
      <PageFooter />
    </div>
  )
}

export default App