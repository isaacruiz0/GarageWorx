import {React, useState, useEffect} from 'react'
import { useNavigate } from 'react-router';
import { HiX } from 'react-icons/hi';
import { BiMenuAltRight } from 'react-icons/bi';
import { motion } from "framer-motion"
import './Navbar.scss'

function NavBar() {
  const [navbar, setNavbar] = useState(false)
  //navbar scroll changeBackground function
  const [toggle, setToggle] = useState(false)

  let navigate = useNavigate()

  const changeBackground = () =>{
    if(window.scrollY >= 66){
      setNavbar(true)
    }
    else{
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", changeBackground)

  return (
    <nav className={navbar ? 'navigationBar active' : 'navigationBar'}>
        <ul className='navigationBar_ul--desktop'>
            <li><a className='link'>Home</a></li>
            <li><a className='link' >Quote</a></li>
            <li><a className='link'>FAQ</a></li>
            <li><a className='link'>Coatings</a></li>
        </ul>
        <div className='app_navbar-menu'>
              <BiMenuAltRight  className='app_navbar-menu_icon' onClick={() => setToggle(true)}/>
              {/* FRAMER MOTION -> if toggle is true then it will render the mobile version of the menu */}
              {toggle && (
                // WHEN TOGGLE IS TRUE IT WILL CREATE A SPECIAL MOTION DIV THAT HAS COOL PROPERTIES
                <motion.div
                initial={{x:'400'}}
                animate={{x:0}}
                transition={{ duration: .85, ease: 'easeOut' }}
              >
                  <HiX onClick={() => setToggle(false)} />
                <ul onClick={()=> setToggle(false)} >
                    <li><a className='link' onClick={() => {navigate("/")}}k>Home</a></li>
                    <li><a className='link' href='#Contact'>Contact</a></li>
                    <li><a className='link' >Quote</a></li>
                    <li><a className='link' onClick={() => {navigate("/FAQ")}}>FAQ</a></li>
                    <li><a className='link'>Coatings</a></li>
                </ul>
                </motion.div>
              )
              }
            </div>
    </nav>
  )
}

export default NavBar