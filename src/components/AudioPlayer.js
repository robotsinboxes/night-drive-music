import React, { useState, useEffect } from 'react'
import styles from '../styles/AudioPlayer.module.css';
import AudioControls from './AudioControls';
import AudioDetails from './AudioDetails';

const AudioPlayer = () => {
   const [tracks,setTracks] = useState([
      {
         "title": "Drones",
         "album": "Night Drive",
         "img_src": "../../public/tracks-images/s1cover-nd-drones-running.webp"
      },
      {
         "title": "Aboria",
         "album": "Night Drive",
         "img_src": "../../public/tracks-images/s2cover-nd-live-rodney.webp"
      },
      {
         "title": "Trapeze Artist Regrets",
         "album": "Night Drive",
         "img_src": "../../public/tracks-images/s3cover-nd-stage1.webp"
      }
   ]);
}

export default AudioPlayer;










// const AudioPlayer = () => {
//    return (
//       <div className={styles.audioPlayer}>
//          <div className={styles.audioPlayerDetails}>
//             <AudioDetails />
//          </div>
//          <div className={styles.audioPlayerControls}>
//             <AudioControls />
//          </div>
//       </div>
//    )
// }

// export default AudioPlayer;