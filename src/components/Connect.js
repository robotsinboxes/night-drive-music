import React from 'react';
import Animation from './Animation';
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Grid } from '@mui/material';

const Connect = () => {
   return (
      <div className='contactContainer'>
         <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
               <Animation />
            </Grid>
            <Grid container spacing={2}>
               <Grid item xs={6} md={6} lg={6}>
                  <a className='btn btn-outline-light'
                  href='https://www.facebook.com/NightDriveMusic/'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='facebook'>
                     <IconContext.Provider value={{className: 'contact-icon'}}>
                        <BsFacebook />
                     </IconContext.Provider>
                  </a>
               </Grid>
               <Grid item xs={6} md={6} lg={6}>
                  <a className='btn btn-outline-light'
                     href='https://www.facebook.com/NightDriveMusic/'
                     target='_blank'
                     rel='noreferrer'
                     aria-label='facebook'>
                        <IconContext.Provider value={{className: 'contact-icon'}}>
                           <BsFacebook />
                        </IconContext.Provider>
                  </a>
               </Grid>
               <Grid item xs={6} md={6} lg={6}>
                  <a className='btn btn-outline-light'
                     href='https://www.instagram.com/nightdrivemusic/?hl=en'
                     target='_blank'
                     rel='noreferrer'
                     aria-label='instagram'>
                        <IconContext.Provider value={{className: 'contact-icon'}}>
                           <AiFillInstagram />
                        </IconContext.Provider>
                  </a>
               </Grid>
               <Grid item xs={6} md={6} lg={6}>
                  <a className='btn btn-outline-light'
                     href='https://twitter.com/wearenightdrive?lang=en'
                     target='_blank'
                     rel='noreferrer'
                     aria-label='twitter'>
                        <IconContext.Provider value={{className: 'contact-icon'}}>
                           <BsTwitter />
                        </IconContext.Provider>
                  </a>
               </Grid>
               <Grid item xs={6} md={6} lg={6}>
                  <a className='btn btn-outline-light'
                     href='https://www.youtube.com/user/nightdrivemusic'
                     target='_blank'
                     rel='noreferrer'
                     aria-label='youtube'>
                        <IconContext.Provider value={{className: 'contact-icon'}}>
                           <BsYoutube />
                        </IconContext.Provider>
                  </a>
               </Grid>
            </Grid>
         </Grid>
      </div>
   )
}

export default Connect;