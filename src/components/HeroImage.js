import React from 'react';
import '../styles/HeroImage.css';
import BandPhoto from '../assets/images/nd-band-photo.webp';

const HeroImage = () => {
   return (
      <div className='heroImg'>
         <img src={ BandPhoto }/>
      </div>
   )
}

export default HeroImage;