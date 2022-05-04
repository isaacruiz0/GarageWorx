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
  // Condition Price
  const [conditionPrice, setConditionPrice] = useState(0)
  // Displayed Price
  const [displayPrice, setDisplayPrice] = useState(0)
  // Displayed Quote
  const [displayQuote, setDisplayQuote] = useState("Estimated Sum: ")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const toggleClassDrop = () => {
    setDropdownActive(!isDropdownActive);
  };
  const toggleClassEstimate = () => {
    setEstimateActive(!isEstimateActive);
  };
  
  const handleSqFoot = (e) =>{
    setSqFoot(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const priceSqFeet = sqFoot * 4;
    const priceEstimate = priceSqFeet + conditionPrice
    if(sqFoot < 10){
      setDisplayQuote('You might be missing a few zeros...')
      setDisplayPrice('')
    }
    else if(priceEstimate < 1500){
      setDisplayPrice(1500)
    }
    else{
      setDisplayPrice(priceEstimate)
    }
    setEstimateActive(true);
  }
  return (
    <div className='containerQuote'>
      <div className="quoteCalculator">
      <form onSubmit={handleSubmit} >
        <label><h3>Online Quote</h3></label>
        <label>Square Footage</label>
        <input type="number" name='sqfeet' className='form-control' value={sqFoot} onChange={handleSqFoot}/>

        <label>Concrete Condition</label>
        {/* <input type="email" name='condition' className='form-control'/> */}
        <div className="dropdown" onClick={toggleClassDrop}>
          <div className="dropdown-select">
            <span className="select">{spanValue}</span>
            <IoIosArrowDropdown className='downIcon'/>
          </div>
          <div className={isDropdownActive ? 'dropdown-list active': 'dropdown-list'}>
            <div className="dropdown-list_item" onClick={()=>{setSpanValue('New');setConditionPrice(0)}}>New</div>
            <div className="dropdown-list_item" onClick={()=>{setSpanValue('Good');setConditionPrice(355)}}>Good</div>
            <div className="dropdown-list_item" onClick={()=>{setSpanValue('Fair');setConditionPrice(550)}}>Fair</div>
            <div className="dropdown-list_item" onClick={()=>{setSpanValue('Poor');setConditionPrice(750)}}>Poor</div>
          </div>
        </div>

        <input type='submit' value='Calculate Estimate' className='form-control btn'/>
        <h3 className={isEstimateActive ? 'estimatedSum activeEstimate': 'estimatedSum'}><span>{displayQuote}</span> <span className='price'>{displayPrice.toLocaleString('en')}</span></h3>
      </form>
      </div>
      <h2>Follow up on your quote!</h2>
      <h4>Contact us below</h4>
    </div>
  )
}

export default Quote