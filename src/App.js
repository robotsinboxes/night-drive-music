import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
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
            <div className='audioComponent'>
               <AudioPlayer />
            </div>
            <div className='videoComponent'>
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