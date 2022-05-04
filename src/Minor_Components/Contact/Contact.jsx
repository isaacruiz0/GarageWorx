import React from 'react'
import { useRef } from 'react'
// S C S S
import './Contact.scss'
// E M A I L    N P M    P A C K A G E
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_gdxutpm', 'template_bm8ic7e', form.current, '30bL4ZMFuZxXIOSHi')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    
    e.target.reset();

    
  }

  return (
    <div id='Contact' className='container'>
      <form onSubmit={sendEmail} ref={form}>
        <p>555-555-555</p>
        <p>email@yahoo.com</p>
        <label>Name</label>
        <input type="text" name='user_name' className='form-control'/>

        <label>Email</label>
        <input type="email" name='user_email' className='form-control'/>

        <label>Message</label>
        <textarea name='message' rows='5' className='form-control' />
        <input type='submit' value='Send' className='form-control btn'id='routeContact'/>

      </form>
      
    </div>
  )
}

export default Contact