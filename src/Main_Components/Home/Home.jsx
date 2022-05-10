import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router';
// S C S S
import './Home.scss'


const Home = () => {
  let navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // const [isVisible, setVisible] = React.useState(true);
  // const domRef = React.useRef();
  // React.useEffect(() => {
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => setVisible(entry.isIntersecting));
  //   });
  //   observer.observe(domRef.current);
  //   return () => observer.unobserve(domRef.current);
  // }, []);
  
  return (
    <div id='Home'>
      <main className='Home_main'>
        <section className='Home_main-quotePitch'>
          <h1>Get your FREE online quote in seconds!</h1>
          <button className='quoteButton' onClick={() => {navigate("/Quote")}}>FREE QUOTE</button>
        </section>
        <section className='Home_main-epoxyPitch'>
          <div className="tableSection">
            <div className='epoxyH1Div'><h1>Why <br className='break'/>Epoxy?</h1></div>
            <img className='comparisonTableImage' src="https://i.ibb.co/YTs0kKv/Screen-Shot-2022-04-27-at-2-56-49-PM.png" alt="comparison-chart"/>
          </div>
            <h1 className='differenceFunnel'>Let's check out the difference...</h1>
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