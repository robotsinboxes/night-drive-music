import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/AudioPlayer.module.css';
import { BsFillPlayFill, BsFillPauseFill, BsFillSkipBackwardFill, BsFillSkipForwardFill } from 'react-icons/bs';
import Song from '../assets/audio_tracks/sample-15s.mp3'











// const AudioControls = () => {
// state
//    const [isPlaying, setIsPlaying] = useState(false);
//    const [duration, setDuration] = useState(0);
//    const [currentTime, setCurrentTime] = useState(0);

// references
//    const audioPlayer = useRef();
//    const progressBar = useRef();
//    const animationRef = useRef();

//    useEffect(() => {
//       const seconds = Math.floor(audioPlayer.current.duration)
//       setDuration(seconds);
//       progressBar.current.max = seconds;
//    }, [
//          audioPlayer?.current?.loadedmetadata,
//          audioPlayer?.current?.readyState
//       ]
//    );

//    const calcTime = (secs) => {
//       const minutes = Math.floor(secs / 60);
//       const returnedMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
//       const seconds = Math.floor(secs % 60);
//       const returnedSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
//       return `${returnedMin}:${returnedSec}`;
//    }

//    const togglePlayPause = () => {
//       const prevValue = isPlaying;
//       setIsPlaying(!prevValue);
//       if (!prevValue) {
//          audioPlayer.current.play();
//          animationRef.current = requestAnimationFrame(whilePlaying);
//       } else {
//          audioPlayer.current.pause();
//          cancelAnimationFrame(animationRef.current);
//       }
//    }

//    const whilePlaying = () => {
//       progressBar.current.value = audioPlayer.current.currentTime;
//       changePlayerCurrentTime();
//       animationRef.current = requestAnimationFrame(whilePlaying);
//    }

//    const changeRange = () => {
//       audioPlayer.current.currentTime = progressBar.current.value;
//       changePlayerCurrentTime();
//    }

//    const changePlayerCurrentTime = () => {
//       progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
//       setCurrentTime(progressBar.current.value);
//    }

//    return (
//       <div className={styles.audioControls}>
//          <audio ref={audioPlayer} 
//          src={Song} preload='metadata'></audio>

//          {/* player controls */}
//          <button className={styles.backBtn} >
//             <BsFillSkipBackwardFill /> 
//          </button>
//          <button className={styles.playPauseBtn} onClick={togglePlayPause}>
//             { isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill className={styles.play} /> }
//          </button>
//          <button className={styles.skipBtn} >
//             <BsFillSkipForwardFill /> 
//          </button>

//          {/* current time */}
//          <div className={styles.currentTime}>
//             {calcTime(currentTime)}
//          </div>

//          {/* progress bar */}
//          <div>
//             <input type='range' className={styles.progressBar} defaultValue='0' ref={progressBar} onChange={changeRange}/>
//          </div>

//          {/* duration */}
//          <div className={styles.duration}>
//             {(duration && !isNaN(duration)) && calcTime(duration)}         
//          </div>

//       </div>
//    )
// }

// export default AudioControls;