import React from 'react'
import { useState, useEffect } from 'react'
import { IoIosArrowDropdown } from "react-icons/io";


// S C S S
import './Quote.scss'

const Quote = () => {
  const [sqFoot, setSqFoot] = useState('')
  // Dropdown menu
  const [isDropdownActive, setDropdownActive] = useState(false);
  // Estimate price
  const [isEstimateActive, setEstimateActive] = useState(false);
  // Span Condition Value
  const [spanValue, setSpanValue] = useState("Select Condition")
  // The condition price will impact the price per sqft
  const [pricePerSqft, setPricePerSqft] = useState(0)
  // Displayed Price
  const [displayPrice, setDisplayPrice] = useState(0)
// Class of Price
const [activePrice, setActivePrice] = useState('')
  // Displayed Quote
  const [displayQuote, setDisplayQuote] = useState("Estimated Sum: ")


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const toggleClassDrop = () => {
    setDropdownActive(!isDropdownActive);
  };

  
  const handleSqFoot = (e) =>{
    setSqFoot(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const priceSqFeet = sqFoot * pricePerSqft;
    const priceEstimate = priceSqFeet
    // If sqffoot input is less than 10 sqft then we will display this text
    if(sqFoot < 10){
      setDisplayQuote('You might be missing a few zeros...')
      setActivePrice(false)
    }
    // This is the minimum amount the price can be
    else if(priceEstimate < 1400){
      setActivePrice(true)
      setDisplayQuote("Estimated Sum: ")
      setDisplayPrice(1400)
      
    }
    // If the calculated price estimate is above 1400 then it will display that price 
    else{
      setActivePrice(true)
      setDisplayPrice(priceEstimate)
      setDisplayQuote("Estimated Sum: ")
    }
    // This will make the estimate div appear
    setEstimateActive(true);
  }
  return (
    <div className='containerQuote'>
      <div className="quoteCalculator">
      <form onSubmit={handleSubmit} >
        <label className='quoteLabel'><h3>Online Quote</h3><br/><p>Fill in the details for an estimate</p></label>
        <label>Square Footage</label>
        <input type="number" name='sqfeet' className='form-control' pattern="[0-9]*" inputmode="numeric" value={sqFoot} onChange={handleSqFoot}/>

        <label>Concrete Condition</label>
        {/* This is the div for the condition menu selection */}
        <div className="dropdown" onClick={toggleClassDrop}>
          <div className="dropdown-select">
            <span className="select">{spanValue}</span>
            {/* Icon for the drop down menu */}
            <IoIosArrowDropdown className='downIcon'/>
          </div>
          <div className={isDropdownActive ? 'dropdown-list active': 'dropdown-list'}>
            {/* These selections will set the price/sqft rate according to user's input condition */}
            <div className="dropdown-list_item" onClick={()=>{setSpanValue('New');setPricePerSqft(3.75)}}>New</div>
            <div className="dropdown-list_item" onClick={()=>{setSpanValue('Good');setPricePerSqft(3.85)}}>Good</div>
            <div className="dropdown-list_item" onClick={()=>{setSpanValue('Fair');setPricePerSqft(3.95)}}>Fair</div>
            <div className="dropdown-list_item" onClick={()=>{setSpanValue('Poor');setPricePerSqft(4.05)}}>Poor</div>
          </div>
        </div>

        <input type='submit' value='Calculate Estimate' className='form-control btn'/>
        {/* This price will be displayed and rounded to the nearest hundreths */}
        <h3 className={isEstimateActive ? 'estimatedSum activeEstimate': 'estimatedSum'}><span>{displayQuote}</span> <span className={activePrice ? 'price' : 'price activePrice'}>{displayPrice.toFixed(2)}</span></h3>
        

      </form>
      </div>
      <div className = 'divText'>
        <h2>Follow up on your quote!</h2>
        <h4>Contact us below</h4>
      </div>
    </div>
  )
}

export default Quote