import React  from 'react'
import { useState } from 'react'
// D A T A
import { Data } from './Data'
// S C S S
import './FAQ.scss'
// I C O N S
import { IconContext } from 'react-icons'
import {FiPlus, FiMinus} from 'react-icons/fi'



const FAQ = () => {

    const [click, setClick] = useState(false)

    const toggle = index => {
        if(click === index) {
            // if clicked is already active then close it
            return setClick(null)
        }
        setClick(index)
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
    </IconContext.Provider>
  )
}

export default FAQ  