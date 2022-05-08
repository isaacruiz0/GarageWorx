import React from 'react'
// I M A G E   A R R A Y
import coatings from './coatingsArray'
// S C S S   
import './Coatings.scss'


console.log(coatings)

const imageArray =coatings.map(eachImage => <figure><img className='coatingImage' src={eachImage[0]} /> <figcaption><span>{eachImage[1]}</span></figcaption></figure> )

const Coatings = () => {
  return (
    <div className='imageContainer'>
      {imageArray}
      <div className='contactPitch'>      
        <h2>Which one fits you?</h2>
        <h4>Let us know below!</h4>
      </div>

    </div>
  )
}

export default Coatings