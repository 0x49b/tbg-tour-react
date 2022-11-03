
import React from 'react'
import Kontent from './components/kontent/Kontent.js'
import PageFooter from './components/menu/PageFooter.js'
import PageHeader from './components/menu/PageHeader.js'


function App() {

  return (
    <div>
      <PageHeader />
      <Kontent/>
      <PageFooter />
    </div>
  )
}

export default App
