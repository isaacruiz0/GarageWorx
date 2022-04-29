import React from 'react'
// S C S S
import './Home.scss'
import Contact from '../../Minor_Components/Contact/Contact.jsx'


const Home = () => {
  return (
    <div id='Home'>
      <main className='Home_main'>
        <section className='Home_main-quotePitch'>
          <h1>Get your FREE online quote in seconds!</h1>
          <button className='quoteButton'><h1>Click for Free Quote</h1></button>
        </section>
        <section className='Home_main-epoxyPitch'>
          <h1>Why Epoxy?</h1>
          <img className='comparisonTable_image' src="https://i.ibb.co/YTs0kKv/Screen-Shot-2022-04-27-at-2-56-49-PM.png" alt="comparison-chart"/>
        </section>
        <Contact/>
      </main>
    </div>
  )
}

export default Home