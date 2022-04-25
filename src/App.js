import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Title from './components/Title';
import AudioPlayer from './components/AudioPlayer';
import VideoPlayer from './components/VideoPlayer';

const App = () =>{
   return (
      <div className='main'>
         <div className='heroComponent'>
            <Hero />
         </div>
         <div className='navBar'>
            <Navbar />
         </div>
         <div className='container'>
            <div id='audioPlayer' className='audioComponent'>
               <Title title='MUSIC' />
               <AudioPlayer />
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