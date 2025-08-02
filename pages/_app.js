import { ChakraProvider } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';

import NavBar from '../components/Navigation';
import Contact from '../components/Contact';
import { ThemeProvider } from '../lib/ThemeContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ChakraProvider>
        <div className="bg-black dark:bg-white text-white dark:text-gray-900 transition-colors duration-300">
          <NavBar />
          <Component {...pageProps} />
          <Contact />
        </div>
        <Analytics />
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;