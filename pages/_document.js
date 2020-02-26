import React from "react";
// components
import Document, { Head, Main, NextScript } from "next/document";
import Helmet from "react-helmet";
// libs
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags, helmet: Helmet.renderStatic() };
  }

  getHeaderComponents = () => {
    const { helmet } = this.props;

    return (
      <>
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        {helmet.script.toComponent()}
      </>
    );
  };

  render() {
    const { styleTags } = this.props;

    return (
      <html>
        <Head>
          <Helmet defaultTitle="Meebli">
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Helmet>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
          />
          {this.getHeaderComponents()}
          {styleTags}
        </Head>
        <body style={{ margin: 0, padding: 0 }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
