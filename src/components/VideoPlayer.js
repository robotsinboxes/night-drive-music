import React from 'react';
import ReactPlayer from 'react-player';
import styles from '../styles/VideoPlayer.module.css';

const VideoPlayer = ({ url }) => {
   return (
      <div className={styles.videoPlayer}>
         <ReactPlayer 
            className={styles.video} 
            url={url}
            controls={true}
         />
      </div>
   )
}

export default VideoPlayer;