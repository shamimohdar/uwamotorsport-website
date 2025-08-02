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
        <div className="bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
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