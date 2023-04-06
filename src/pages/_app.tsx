import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { AppProps } from 'next/app';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #050A11;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
    bg: '#050A11',
    blue: '#044AFF',
    white: '#FFFFFF',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>Tony ibrahim</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
