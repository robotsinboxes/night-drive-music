import React from 'react';
import ReactPlayer from 'react-player';
import heroVideo from '../assets/videos/nd-anim-triangle.mp4';

const Hero = () => {
   return (
      <div className="hero">
         <div className="hero-body">
            <div className="container">
               <ReactPlayer 
                  url={heroVideo}
                  muted={true}
                  playing={true}
                  loop={true}
                  controls={false}
               />
            </div>
         </div>
      </div>
   )
}

export default Hero;