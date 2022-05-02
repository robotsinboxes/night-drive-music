import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/Animation.css';
import Video from '../assets/videos/nd-anim-triangle.mp4';

const Animation = () => {
   return (
      <div className="video-container">
         <ReactPlayer 
            url={Video}
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

export default Animation;