import React, { useState, useRef, useEffect } from 'react'
import styles from '../styles/AudioPlayer.module.css';
import AudioControls from './AudioControls';
import AudioDetails from './AudioDetails';

const AudioPlayer = (props) => {
   const audioElement = useRef();
   const [isPlaying, setIsPlaying] = useState(false);

   useEffect(() => {
      if (isPlaying) {
         audioElement.current.play();
      } else {
         audioElement.current.pause();
      }
   });

   const SkipSong = (forwards = true) => {
      if (forwards) {
         props.setCurrentTrackIndex(() => {
            let num = props.currentTrackIndex;
            num++;
            if (num > props.tracks.length - 1) {
               num = 0;
            }
            return num;
         });
      } else {
         props.setCurrentTrackIndex(() => {
            let num = props.currentTrackIndex;
            num--;
            if (num < 0) {
               num = props.tracks.length - 1;
            }
            return num;
         });
      }
   }

   return (
      <>
         <div className={styles.audioPlayer}>
            <audio 
               src={props.tracks[props.currentTrackIndex].track_src}
               ref={audioElement}>
            </audio>
            <AudioDetails track={props.tracks[props.currentTrackIndex]} />
            <AudioControls
               isPlaying={isPlaying}
               setIsPlaying={setIsPlaying}
               SkipSong={SkipSong} />
         </div>
         <div>
            <div className={styles.textAnim}>
               <strong>Next track:</strong>
            </div>
            <div className={styles.nextTrack}> 
               <img
                  src={props.tracks[props.nextTrackIndex].img_src}
                  alt={props.tracks[props.nextTrackIndex].title}
               />
               <p> 
                  <b>{props.tracks[props.nextTrackIndex].title}</b>
               </p>
            </div>
         </div>
      </>
   )
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