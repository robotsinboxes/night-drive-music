import styles from '../styles/AudioPlayer.module.css';

const AudioDetails = (props) => {
   return (
      <div className={styles.detailsContainer}> 
         <div className={styles.imageContainer}>
            <img 
               src={props.track.img_src} 
               alt={props.track.title}
            />
         </div>
         {/* <div className='range'></div> */}
         <div className={styles.details}>
            <h2 className={styles.songTitle}>{props.track.title}</h2>
            <h3 className={styles.artist}>{props.track.artist}</h3>
         </div>
      </div>
   )
}

export default AudioDetails;