import styles from '../styles/AudioPlayer.module.css';
import { BsFillPlayFill, BsFillPauseFill, BsFillSkipBackwardFill, BsFillSkipForwardFill } from 'react-icons/bs';


const AudioControls = (props) => {
   return (
      <div className={styles.audioControls}> 
         <button className={styles.backBtn} onClick={() => props.SkipSong(false)}>
            <BsFillSkipBackwardFill />
         </button>
         <button className={styles.playBtn} onClick={() => props.setIsPlaying(!props.isPlaying)}>
            { props.isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill /> }
         </button>
         <button className={styles.skipBtn} onClick={() => props.SkipSong()}>
            <BsFillSkipForwardFill />
         </button>
      </div>
   )
}

export default AudioControls;