import styles from '../styles/AudioPlayer.module.css';
import RodneyLive from '../assets/images/live-rodney.jpg';

const AudioDetails = () => {
   return (
      <div className={styles.detailsContainer}> 
         <div>
            <div className={styles.image}>
               <img src={RodneyLive} alt="Rodney - Live Performance" />
            </div>
            <div className={styles.details}>
               <h1 className={styles.songTitle}>Drones</h1>
               <h6 className={styles.artist}>Night Drive</h6>
            </div>
         </div>
      </div>
   )
}

export default AudioDetails;