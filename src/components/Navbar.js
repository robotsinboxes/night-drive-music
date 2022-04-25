import React from 'react';
import '../styles/Navbar.css';
import {  
   Typography, 
   Link
 } from '@mui/material';

const Navbar = () => {
   return (
      <div className='navbar'>
         <Typography align='center'>
            <Link 
               to='/music'
               href='#audioPlayer'
               underline='none'
               >MUSIC
            </Link>           
            <Link 
               to='/videos'
               href='#videoPlayer'
               underline='none'
               >VIDEOS
            </Link> 
            <Link 
               to='/shop'
               href='#shop'
               underline='none'
               >SHOP
            </Link>
            <Link 
               to='/press'
               href='#press'
               underline='none'
               >PRESS
            </Link>
            <Link 
               to='/contact'
               href='#contact'
               underline='none'
               >CONTACT
            </Link>          
         </Typography>
      </div>
   )
}

export default Navbar;