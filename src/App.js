import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroImage from './components/HeroImage';
import AudioPlayer from './components/AudioPlayer';
import Title from './components/Title';
import VideoPlayer from './components/VideoPlayer';
import Contact from './components/Connect';

const App = () =>{
   const [tracks] = useState([
      {
         "title": "After Dark",
         "album": "Position I",
         "artist": "Night Drive",
         "track_src": './tracks/01-after-dark.mp3'
      },
      {
         "title": "Drones",
         "album": "Night Drive",
         "artist": "Night Drive",
         "track_src": './tracks/02-drones.mp3'
      },
      {
         "title": "No Plans",
         "album": "Night Drive",
         "artist": "Night Drive",
         "track_src": './tracks/03-no-plans.mp3'
      },
      {
         "title": "Nocturnal",
         "album": "Night Drive",
         "artist": "Night Drive",
         "track_src": './tracks/04-nocturnal.mp3'
      },
      {
         "title": "Sea of Light",
         "album": "Night Drive",
         "artist": "Night Drive",
         "track_src": './tracks/05-sea-of-light.mp3'
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
            <div className='contactContainer'>
               <Contact />
            </div>
         </div>
      </div>
   )
}

export default App;