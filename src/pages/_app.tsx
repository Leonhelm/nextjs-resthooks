import React from "react";
import App from "next/app";
import { CacheProvider } from 'rest-hooks';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <CacheProvider>
        <Component {...pageProps} />
      </CacheProvider>
    );
  }
}
