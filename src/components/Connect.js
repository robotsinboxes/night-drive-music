import React from 'react';
import Animation from './Animation';
import '../styles/Connect.css';
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Grid, Link } from '@mui/material';

const Connect = () => {
   return (
      <div className='contactContainer'>
         {/* <Grid container direction='row' alignItems='center'> */}
            <Grid container 
               direction='row' 
               justifyContent='space-around' 
               alignItems='center'>
               <Grid item xs={2} md={2}>
                  <Link 
                     href='https://www.facebook.com/NightDriveMusic/'
                     target='_blank'
                     rel='noreferrer'
                     aria-label='facebook'>
                     <IconContext.Provider value={{className: 'contact-icon'}}>
                        <BsFacebook />
                     </IconContext.Provider>
                  </Link>
               </Grid>
               <Grid item xs={2} md={2}>
                  <Link 
                     href='https://www.instagram.com/nightdrivemusic/?hl=en'
                     target='_blank'
                     rel='noreferrer'
                     aria-label='instagram'>
                        <IconContext.Provider value={{className: 'contact-icon'}}>
                           <AiFillInstagram />
                        </IconContext.Provider>
                  </Link>
               </Grid>
               <Grid item xs={3} md={4}>
                  <Animation />
               </Grid>
               <Grid item xs={2} md={2}>
                  <Link 
                     href='https://twitter.com/wearenightdrive?lang=en'
                     target='_blank'
                     rel='noreferrer'
                     aria-label='twitter'>
                        <IconContext.Provider value={{className: 'contact-icon'}}>
                           <BsTwitter />
                        </IconContext.Provider>
                  </Link>
               </Grid>
               <Grid item xs={2} md={2}>
                  <Link 
                     href='https://www.youtube.com/user/nightdrivemusic'
                     target='_blank'
                     rel='noreferrer'
                     aria-label='youtube'>
                        <IconContext.Provider value={{className: 'contact-icon'}}>
                           <BsYoutube />
                        </IconContext.Provider>
                  </Link>
               </Grid>
            </Grid>
         {/* </Grid> */}
      </div>
   )
}

export default Connect;