import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroImage from './components/HeroImage';
import AudioPlayer from './components/AudioPlayer';
import Animation from './components/Animation';
import Title from './components/Title';
import VideoPlayer from './components/VideoPlayer';

const App = () =>{
   const [tracks] = useState([
      {
         "title": "Drones",
         "album": "Night Drive",
         "artist": "Night Drive",
         "img_src": './tracks_images/s1cover-nd-drones-running.webp',
         "track_src": './tracks/s3-sample-15s.mp3'
      },
      {
         "title": "Aboria",
         "album": "Night Drive",
         "artist": "Night Drive",
         "img_src": './tracks_images/s2cover-nd-live-rodney.webp',
         "track_src": './tracks/s2-sample-9s.mp3'

      },
      {
         "title": "Trapeze Artist Regrets",
         "album": "Night Drive",
         "artist": "Night Drive",
         "img_src": './tracks_images/s3cover-nd-stage1.webp',
         "track_src": './tracks/s1-sample-6s.mp3'

      }
   ]);

   const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
   const [nextTrackIndex, setNextTrackIndex] = useState(currentTrackIndex + 1);

   useEffect(() => {
      setNextTrackIndex(() => {
         if (currentTrackIndex + 1 > tracks.length - 1) {
            return 0;
         } else {
            return currentTrackIndex + 1;
         }
      })
   }, [currentTrackIndex]);

   console.log('hello');

   return (
      <div className='main'>
         <div className='navBar'>
            <Navbar />
         </div>
         <div className='heroComponent'>
            <HeroImage />
         </div>
         <div className='container'>
            <div id='audioPlayer' className='audioComponent'>
               <Title title='MUSIC' />
               <AudioPlayer
                  currentTrackIndex={currentTrackIndex}
                  setCurrentTrackIndex={setCurrentTrackIndex}
                  nextTrackIndex={nextTrackIndex}
                  tracks={tracks}
               />
            </div>
            <div className='animationContainer'>
               <Animation />
            </div>
            <div id='videoPlayer' className='videoComponent'>
               <Title title='VIDEOS' />
               <VideoPlayer 
                  url="https://www.youtube.com/watch?v=ne_MgdKLg04"
               />
               <VideoPlayer 
                  url="https://www.youtube.com/watch?v=WW4esBSuAjw"
               />
               <VideoPlayer 
                  url="https://www.youtube.com/watch?v=f9UpOMyKV7o"
               />
               <VideoPlayer 
                  url="https://www.youtube.com/watch?v=PkTzuktAuqs"
               />
               <VideoPlayer 
                  url="https://www.youtube.com/watch?v=IE8Z-srSYWY"
               />
               <VideoPlayer 
                  url="https://www.youtube.com/watch?v=YtzE4nckj1U"
               />
               <VideoPlayer 
                  url="https://www.youtube.com/watch?v=5HT3UssMgt8"
               />
               <VideoPlayer 
                  url="https://www.youtube.com/watch?v=fF7jhpAPz8o"
               />
            </div>
         </div>
      </div>
   )
}

export default App;