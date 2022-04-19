import styles from '../styles/AudioPlayer.module.css';
import LiveRodney from "../../public/media/images/live-rodney.jpg";

const AudioDetails = () => {
   return (
      <div className={styles.audioDetails}> 
         <div>
            <div className={styles.image}>
               <img src={LiveRodney} alt="Rodney - Live Performance" />
            </div>
            <h1 className={styles.songTitle}>Drones</h1>
            <h6 className={styles.artist}>Night Drive</h6>
         </div>
      </div>
   )
}

export default AudioDetails;