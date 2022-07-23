import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { HiX } from 'react-icons/hi';
import {BiExpandAlt} from 'react-icons/bi'
// I M A G E   A R R A Y
import coatings from './coatingsArray'
// S C S S   
import './Coatings.scss'

const Coatings = () => {

  const [clickedImage, setClickedImage] = useState('')
  const [display, setDisplay] = useState(false)
  const [opacity, setOpacity] = useState(0)
  const [blur, setBlur] = useState(10)

      
  const style = { color: "white", fontSize: "1.5em" }
  
  useEffect(() => {
    window.scrollTo(0, 0)
    setTimeout(() => {
      setOpacity(1)
      setBlur(0)
    }, 563)

  }, [])



  return (
    <div className='coatingsDiv'>
      <div className="imageContainer">
        {coatings.map(eachImage => <figure style={{opacity: opacity}}>
          <img className='coatingImage' 
          src={eachImage[0]} 
          alt={eachImage[1]} 
          key = {eachImage}
          style  = {{filter: `blur(${blur}px)`}}
          onClick={() => {
            setClickedImage(eachImage[0])
            setDisplay(true)
          }}/> <figcaption><span>{eachImage[1]}<BiExpandAlt style={style}/></span></figcaption></figure> )}

     </div>
      <div className="popupImages" style={display ? {display:'block'} : {display:'none'}}>
        <HiX onClick={() => {setDisplay(false)}}/>
        <img src={clickedImage} alt="zoomed in coating"/>
      </div>
      <div className='contactPitch'>      
        <h2>Which one fits you?</h2>
        <h4>Let us know below!</h4>
      </div>

    </div>
  )
}

export default Coatings