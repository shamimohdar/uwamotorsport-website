import { ChakraProvider, DarkMode } from '@chakra-ui/react';

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
    </ChakraProvider>
  );
}

export default MyApp;
