import Head from 'next/head';
import styles from '../src/styles/Home.module.css';
import AudioPlayer from '../src/components/AudioPlayer';

const App = () =>{
   return (
      <div className={styles.container}>
         <Head>
               <title>Night Drive Music</title>
               <link rel="icon" href="/nd-favicon.png" />
         </Head>
         <main className={styles.main}>
            <div className={styles.mainWrapper}>
               <h1>Night Drive</h1>
               <AudioPlayer />

            </div>
         </main>
      </div>
   )
}

export default App;