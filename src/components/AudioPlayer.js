import styles from '../styles/AudioPlayer.module.css';
import AudioControls from './AudioControls';
import AudioDetails from './AudioDetails';

const AudioPlayer = () => {
   return (
      <div className={styles.audioPlayer}>
         <div className={styles.audioPlayerDetails}>
            <AudioDetails />
         </div>
         <div className={styles.audioPlayerControls}>
            <AudioControls />
         </div>
      </div>
   )
}

export default AudioPlayer;