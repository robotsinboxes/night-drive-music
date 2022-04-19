import React from 'react';
import ReactPlayer from 'react-player';
import styles from '../styles/VideoPlayer.module.css';

const VideoPlayer = ({ url }) => {
   return (
      <div className={styles.videoPlayer}>
         <ReactPlayer 
            className={styles.video} 
            url={url}
            // width="100%"
            // height="100%"
            controls={true}
            onStart={() => console.log('onStart')}
         />
      </div>
   )
}

export default VideoPlayer;