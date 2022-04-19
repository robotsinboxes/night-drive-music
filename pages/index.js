import Head from 'next/head';
import styles from '../src/styles/Home.module.css';
import AudioPlayer from '../src/components/AudioPlayer';
import VideoPlayer from '../src/components/VideoPlayer';

const App = () =>{
   return (
      <div className={styles.container}>
         <Head>
            <title>Night Drive Music</title>
            <link rel="icon" href="/nd-favicon.png" />
            {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet" /> */}
         </Head>
         <main className={styles.main}>
            <div className={styles.mainWrapper}>
               <h1>NIGHT DRIVE</h1>
               <div className={styles.audioComponent}>
                  <AudioPlayer />
               </div>
               <div className={styles.videoComponent}>
                  <VideoPlayer 
                     url="https://www.youtube.com/watch?v=ne_MgdKLg04" 
                  />
               </div>
            </div>
         </main>
      </div>
   )
}

export default App;