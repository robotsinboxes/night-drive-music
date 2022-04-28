import React from 'react';
import '../styles/Navbar.css';
import { RiShoppingCartLine } from 'react-icons/ri';
import {  
   AppBar,
   Toolbar,
   IconButton,
   Badge,
   Menu,
   MenuItem,
   Typography, 
   Link,
} from '@mui/material';

const Navbar = () => {
   return (
      <div className='navbar'>
         <AppBar position="fixed">
            <Toolbar>
               <div className='grow'/>
               <div className='button'>
                  <IconButton aria-label="Show cart items">
                     <Badge badgeContent={2}>
                        <RiShoppingCartLine />
                     </Badge>
                  </IconButton>
               </div>
            </Toolbar>
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
         </AppBar>
      </div>
   )
}

export default Navbar;