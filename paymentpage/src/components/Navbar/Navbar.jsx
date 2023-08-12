import React from 'react'
import "./navbar.css";
import logo from "../../images/logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='nav-left' >
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div className='nav-items-left'>
                <div className='flex-icon'>
                    <p>Courses</p>
                    <RiArrowDropDownLine className='icon'/>
                </div>
                <div className='flex-icon'>
                    <p>Programs</p>
                    <RiArrowDropDownLine className='icon'/>
                </div>
                

            </div>
        </div>
        <div className='nav-right'>
            <div>
                <AiOutlineSearch/>
            </div>
            <div>
                <p>Log in</p>
            </div>
            <div>
                <button className='btn-join'>JOIN NOW</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
