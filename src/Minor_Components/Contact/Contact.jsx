import React from 'react'
// S C S S
import './Contact.scss'

const Contact = () => {
  return (
    <div id='Contact' className='container' style={{marginTop:"50px",marginBottom:"50px", width:"95%"}}>
      <h1>Contact Us</h1>
      <form>
        <label>Name</label>
        <input type="text" name='name' className='form-control'/>

        <label>Email</label>
        <input type="email" name='user_email' className='form-control'/>

        <label>Message</label>
        <textarea name='message' rows='5' className='form-control' />
        <input type='submit' value='Send' className='form-control btn'/>

      </form>
      
    </div>
  )
}

export default Contact