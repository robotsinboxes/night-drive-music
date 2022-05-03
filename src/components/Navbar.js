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
import brand from '../assets/images/brand-name.webp';

const Navbar = () => {
   return (
      <div>
         <AppBar 
            className='navbar' 
            position='fixed'
            sx={{
               bgcolor:'transparent',
               boxShadow: 'none'
            }}>
            <Toolbar justify='center'> 
               <Typography variant='h6' className='brand' >
                  <img src={brand} alt='Night Drive Music'  className='brandImg' />
               </Typography>
               <div className='grow'/>
               <Typography align='center'>
                  <Link 
                     to='/live-shows'
                     href='#tour'
                     underline='none'
                     >LIVE
                  </Link>         
                  <Link 
                     to='/music'
                     href='#audioPlayer'
                     underline='none'
                     >LISTEN
                  </Link>           
                  <Link 
                     to='/videos'
                     href='#videoPlayer'
                     underline='none'
                     >WATCH
                  </Link> 
                  <Link 
                     to='/shop'
                     href='#shop'
                     underline='none'
                     >SHOP
                  </Link>
                  <Link 
                     to='/news'
                     href='#news'
                     underline='none'
                     >READ
                  </Link>
                  <Link 
                     to='/contact'
                     href='#contact'
                     underline='none'
                     >CONNECT
                  </Link>          
               </Typography>
               <div className='button'>
                  <IconButton aria-label="Show cart items">
                     <Badge 
                        badgeContent={2}
                        sx={{
                           color: 'white',
                        }}>
                        <RiShoppingCartLine color='white'/>
                     </Badge>
                  </IconButton>
               </div>
            </Toolbar>
         </AppBar>
      </div>
   )
}

export default Navbar;