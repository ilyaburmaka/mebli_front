import App from 'next/app'
import React from 'react'
// libs
import { css, createGlobalStyle } from 'styled-components'
// styles

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
        <Component {...pageProps} />
      </>
    )
  }
}

export default AppComponent
