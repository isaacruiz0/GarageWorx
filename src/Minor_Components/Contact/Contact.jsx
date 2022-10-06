import React from 'react'
import { useRef, useEffect, useState } from 'react'
// S C S S
import './Contact.scss'
// E M A I L    N P M    P A C K A G E
import emailjs from '@emailjs/browser';



const Contact = () => {

  // This is the emailjs section
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
  // This will fade in the contact form 
  const [isVisible, setVisible] = useState(true);
  // This keeps track of an element
  const fadeInRef = useRef();
  useEffect(() => {

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setVisible(entry.isIntersecting)
          if (entry.isIntersecting) {observer.unobserve(entry.target)}
        })
      },{threshold: .25})
    observer.observe(fadeInRef.current)
  }, [])


  return (
    <div id='Contact' className={`container fade-in-section  ${isVisible ? 'is-visible': ''}`}  ref={fadeInRef} >
      <div className="backgroundDiv">
      <div className='contactLinks'>
        <a href="tel:555-666-7777"><i class="fa fa-phone" aria-hidden="true"></i><span>909-927-7001</span></a>
        <a href="mailto:garagewx@gmail.com" className='bottomA'><i class="fa fa-envelope" aria-hidden="true"></i><span>garagewx@gmail.com</span></a>
      </div>
      <form onSubmit={sendEmail} ref={form}>
        
        <label>Name</label>
        <input type="text" name='user_name' className='form-control' required/>

        <label>Email</label>
        <input type="email" name='user_email' className='form-control' required/>

        <label>Message</label>
        <textarea name='message' rows='5' className='form-control' required/>
        <input type='submit' value='Send' className='form-control btn'id='contact'/>

      </form>
      </div> 
    </div>
  )
}

export default Contact