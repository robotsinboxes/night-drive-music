import Head from 'next/head';
import styles from '../styles/Home.module.css';
import AudioPlayer from '../components/AudioPlayer';

function HomePage() {
   return (
      <div className={styles.container}>
         <Head>
               <title>Night Drive Music</title>
               <link rel="icon" href="/nd-favicon.png" />
         </Head>
         <main className={styles.main}>
               <AudioPlayer />
         </main>
      </div>
   )
}

export default HomePage;