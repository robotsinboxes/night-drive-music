import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/Hero.css';
import heroVideo from '../assets/videos/nd-anim-triangle.mp4';

const Hero = () => {
   return (
      <div className="video-container">
         <ReactPlayer 
            url={heroVideo}
            width="100%"
            height="100%"
            muted={true}
            playing={true}
            loop={true}
            controls={false}
         />
      </div>
   )
}

export default Hero;