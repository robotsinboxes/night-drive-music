import styles from '../styles/AudioPlayer.module.css';
import positionI from '../assets/images/position-I-cover-mono.jpg';

const AudioDetails = (props) => {

   return (
      <div className={styles.detailsContainer}> 
         <div className={styles.imageContainer}>
            <img 
               src={positionI} 
               alt={props.track.album}
            />
         </div>
         {/* <div className={styles.progressBar}></div> */}
         <div className={styles.details}>
            <h2 className={styles.songTitle}>{props.track.title}</h2>
            <h5 className={styles.album}>{props.track.album}</h5>
         </div>
      </div>
   )
}

export default AudioDetails;