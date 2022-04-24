import React from 'react';
import styles from '../src/styles/Home.module.css';
import Hero from './components/Hero';
import AudioPlayer from './components/AudioPlayer';
import VideoPlayer from './components/VideoPlayer';

const App = () =>{
   return (
      <div className={styles.container}>
         <div className={styles.mainWrapper}>
            <Hero />
            <div className={styles.audioComponent}>
               <AudioPlayer />
            </div>
            <div className={styles.videoComponent}>
               <VideoPlayer />
            </div>
         </div>
      </div>
   )
}

export default App;