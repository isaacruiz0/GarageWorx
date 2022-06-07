import React  from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
// D A T A
import { Data } from './Data'
// S C S S
import './FAQ.scss'
// I C O N S
import { IconContext } from 'react-icons'
import {FiPlus, FiMinus} from 'react-icons/fi'



const FAQ = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const [click, setClick] = useState(false)

    const toggle = index => {
        setClick(index)
        if(click === index) {
            // if clicked is already active then close it
            return setClick(null)
        }
        
    }

  return (
    <IconContext.Provider value={{color: '#fc624d'}}>
        <section className='FAQSection'>
            <div className="container">
                {Data.map((interchange, index) => {
                    return(
                        <>
                            <div className="wrap" key={index} onClick={() => {toggle(index)}}>
                                <h1>{interchange.question}</h1> 
                                <span>{click === index ? <FiMinus/> : <FiPlus/>}</span>
                            </div>
                            {click === index ? (                            <div className='dropDown'>
                                <p>{interchange.answer}</p>
                            </div>) : null}
                        </>
                    )
                })}
            </div>
        </section>
        <div className='FAQ-contactPitch'>
          <h1>Have more questions?</h1>
          <h4>Send us a message...</h4>
        </div>
    </IconContext.Provider>
  )
}

export default FAQ  