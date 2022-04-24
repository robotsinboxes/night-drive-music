import React from 'react';
import ReactPlayer from 'react-player';
import styles from '../styles/VideoPlayer.module.css';

const VideoPlayer = () => {
   return (
      <div className={styles.videoPlayer}>
         <ReactPlayer 
            className={styles.video} 
            url="https://www.youtube.com/watch?v=ne_MgdKLg04"
            // width="100%"
            // height="100%"
            controls={true}
            onStart={() => console.log('onStart')}
         />
      </div>
   )
}

export default VideoPlayer;