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

      
  const style = { color: "white", fontSize: "1.5em" }
  
  const imageArray =coatings.map(eachImage => <figure><img className='coatingImage' src={eachImage[0]} alt={eachImage[1]} onClick={() => {
    setClickedImage(eachImage[0])
    setDisplay(true)
  }}/> <figcaption><span>{eachImage[1]}<BiExpandAlt style={style}/></span></figcaption></figure> )

  useEffect(() => {
    window.scrollTo(0, 0)

  }, [])
  


  return (
    <div className='coatingsDiv'>
      <div className="imageContainer">
        {imageArray}
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