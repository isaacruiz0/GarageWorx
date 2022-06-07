import {React, useState, useEffect} from 'react'
import { useNavigate } from 'react-router'
import { HiX } from 'react-icons/hi';
import { BiMenuAltRight } from 'react-icons/bi';
import { motion } from "framer-motion"
import './Navbar.scss'

import { useRef } from 'react';

import navbarLogo from './navbarLogo.png'

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  //navbar scroll disappear function
  const [toggle, setToggle] = useState(false);


  let lastScrollY = window.scrollY

  window.addEventListener("scroll", () => {
   if (lastScrollY < window.scrollY) {
     setNavbar(true)
   }
   else{
     setNavbar(false)
   }
  //  Redeclaring the variable so that it can work again
   lastScrollY = window.scrollY
  })


  let navigate = useNavigate();


  return (
    <nav  className={navbar ? 'navigationBar active' : 'navigationBar'}>
        <img src={navbarLogo} alt="Garage Worx logo" className="navbarLogo" onClick={() => {navigate("/")}} />
        <ul className='navigationBar_ul--desktop'>
          <li><a className='link' onClick={() => {navigate("/")}}>Home</a></li>
          <li><a className='link' href='#contact'>Contact</a></li>
          <li><a className='link' onClick={() => {navigate("/Quote")}}>Quote</a></li>
          <li><a className='link' onClick={() => {navigate("/FAQ")}}>FAQ</a></li>
          <li><a className='link' onClick={() => {navigate("/Coatings")}}>Coatings</a></li>
        </ul>
        <div className='app_navbar-menu'>
              <BiMenuAltRight  className='app_navbar-menu_icon active' onClick={() => setToggle(true)}/>
              {/* FRAMER MOTION -> if toggle is true then it will render the mobile version of the menu */}
              {toggle && (
                // WHEN TOGGLE IS TRUE IT WILL CREATE A SPECIAL MOTION DIV THAT HAS COOL PROPERTIES
                <motion.div
                initial={{x:'400'}}
                animate={{x:0}}
                transition={{ duration: .5, ease: 'easeOut' }}
              >
                  <HiX onClick={() => setToggle(false)} />
                <ul onClick={()=> setToggle(false)} >
                    <li><a className='link' onClick={() => {navigate("/")}}k>Home</a></li>
                    <li><a className='link' href='#routeContact'>Contact</a></li>
                    <li><a className='link' onClick={() => {navigate("/Quote")}}>Quote</a></li>
                    <li><a className='link' onClick={() => {navigate("/FAQ")}}>FAQ</a></li>
                    <li><a className='link' onClick={() => {navigate("/Coatings")}}>Coatings</a></li>
                </ul>
                </motion.div>
              )
              }
            </div>
    </nav>
  )
}

export default NavBar