import { ChakraProvider, DarkMode } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';

import NavBar from '../components/Navigation';
import Contact from '../components/Contact';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <div className="bg-black text-white">
        <NavBar />
        <Component {...pageProps} />
        <Contact />
      </div>
      <Analytics />
    </ChakraProvider>
  );
}

export default MyApp;