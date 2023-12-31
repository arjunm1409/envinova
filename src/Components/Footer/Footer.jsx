import React from 'react';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import './Footer.css';




const Footer = () => {
    return (
      <div className='footer' id='Footer'>
          {/* <img src={Wave} alt = "" style={{width: '100%'}}/> */}
          
          <div className='f-content'>
              <span><a href="mailto:envinovasmartech@gmail.com">envinovasmartech@gmail.com</a></span>
              <div className='icons'>
                 <div className='f-icons'>
                 <a href="https://www.instagram.com/envinovasmartech/"><FaInstagramSquare  size = '3rem'/></a>
                 </div>
                 <div className='f-icons'>
                 <a href="https://www.linkedin.com/company/envinova-smartech/"><FaLinkedin  size = '3rem'/></a>
                 </div>
                 </div>
                 <h2 style={{color:'white'}}>2023 enviNova Smartech. All rights reserved</h2>
              
          </div>
          
      </div>
    )
  }
  
  export default Footer;
