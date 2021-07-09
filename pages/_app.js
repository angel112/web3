import React from "react";
import "../styles/globalStyles.css";
import { ThemeProvider } from 'styled-components';
import theme from '@/styleguide/theme';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp;