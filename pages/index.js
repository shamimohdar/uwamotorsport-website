import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Slideshow from "../components/Slideshow"

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export default function Home() {
  return (
    <div>
      <Head>
        <title>UWAM | Home</title>
        <meta name="description" content="We are the University of Western Australia Motorsport team." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Slideshow 
        Image1="assets/main/2021-car.jpeg"
        Image2="assets/main/header_comp.png"
        Image3="assets/main/mission.png"
        Image4="assets/main/header_comp.png"
        Image5="assets/main/mission.png"
      />
      <About />
    </div>
  )
}
