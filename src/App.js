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
                  width='80vw'
               />
            </div>
         </div>
      </div>
   )
}

export default App;