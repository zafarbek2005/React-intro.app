import React from 'react'
import './Navbar.scss'
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

const Navbar = () => {
  return (
  <>
  
  <header>
    <div className="navbar  conteiner">
        <div className="navlogo">
            <img style={{width:"52px"}} src="https://logos-world.net/wp-content/uploads/2020/07/Xiaomi-Logo.png" alt="logo" />

            <ul>
                <a href="#">Phone</a>
                <a href="#">Smart Home</a>
                <a href="#">Life Style</a>
            </ul>
        </div>

        <div className="items">
            <ul>
                <a href="#">Discover</a>
                <a href="#">Support</a>
                <p><CiSearch /></p>
                <p><IoPersonOutline/></p>
            </ul>
        </div>












    </div>






  </header>
  
  
  
  
  
  
  </>

   
    
  )
}

export default Navbar