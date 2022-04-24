import React from 'react';
import { Typography, Link } from '@mui/material';

const Navbar = () => {
   return (
      <div className='navbar'>
         <Typography align='center'>
            <Link href='#'>Click</Link>           
         </Typography>
      </div>
   )
}

export default Navbar;