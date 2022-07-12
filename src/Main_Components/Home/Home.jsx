import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router';

import homeImage from './homeImage.png'
// G R A P H   I M A G E
import graphComparison from './graphComparison.png'
// S C S S
import './Home.scss'


const Home = () => {
  const [isVisible, setVisible] = useState(true);
    // This keeps track of an element
    const fadeInRef = useRef();
  let navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0)

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setVisible(entry.isIntersecting)
          if (entry.isIntersecting) {observer.unobserve(entry.target)}
        })
      },{threshold: .05})
    observer.observe(fadeInRef.current)
  }, [])
  
  return (
    <div id='Home'>
      <main className='Home_main'>
        <section className='Home_main-quotePitch'>
          <h1>Get your FREE online quote in seconds!</h1>
          <button className='quoteButton' onClick={() => {navigate("/Quote")}}>FREE QUOTE</button>
        </section>
        <section className={`Home_main-epoxyPitch fade-in-section  ${isVisible ? 'is-visible': ''}`}  ref={fadeInRef}>
          <div className="tableSection">
            <div className='epoxyH1Div'><h1>Why <br className='break'/>Epoxy?</h1></div>
            <img className='comparisonTableImage' src={graphComparison} alt="comparison-chart"/>
          </div>
            <h1 className='differenceFunnel'>Let's check out the difference</h1>
          <div className='compareImages'>
            <div className="figureContainer beforeFigure">
              <figure className='before'>
                <img src='https://i.ibb.co/FsrHfXM/Before.jpg' className='comparisonImage' />
                <figcaption><span>Before</span></figcaption>
              </figure>
            </div>
            <div className="figureContainer afterFigure">
              <figure>
                <img src='https://i.ibb.co/BKqQxhQ/After.jpg' className='comparisonImage' />
                <figcaption><span>After</span></figcaption>
              </figure>
            </div>
          </div>
        </section>
        <div className='Home_main-contactPitch'>
          <h1>Ready for Epoxy?</h1>
          <h4>Send us a message...</h4>
        </div>
      </main>
    </div>
  )
}

export default Home