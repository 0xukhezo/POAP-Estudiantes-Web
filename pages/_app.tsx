import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>POAP Estudiantes</title>
        <meta name="description" content="POAP Estudiantes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comforter+Brush&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Comforter+Brush&family=Pathway+Gothic+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
