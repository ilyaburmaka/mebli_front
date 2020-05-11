import App from 'next/app'
import React from 'react'
// libs
import { css, createGlobalStyle } from 'styled-components'
import CurrentProvider from '../contexts/currentContext'
// styles
import CssBaseline from '@material-ui/core/CssBaseline'
const libsStyles = css``

const GlobalStyle = createGlobalStyle`
  ${libsStyles};

  * {
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
    background-color: #fffaf6;

  }

  body {
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
  }
    @font-face {
        font-family: 'MyriadPro';
        src: url("/themes/fonts/Myriard.otf");
    }
`

class AppComponent extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <GlobalStyle />
        <CssBaseline/>
        <CurrentProvider>
          <Component {...pageProps} />
        </CurrentProvider>
      </>
    )
  }
}

export default AppComponent
