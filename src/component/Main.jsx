import React from 'react'
import Home from './Home'
import ServiceCard from './ServiceCard'
import Vision from './Vision'
import Contact from './contact/Contact'

const Main = () => {
  return (
    <div>
      <div>
        <Home/>
        <ServiceCard/>
        <Vision/>
        <Contact/>
      </div>
    </div>
  )
}

export default Main
