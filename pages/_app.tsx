import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

import React, { useState } from "react";
import AddressContext from "../src/context/AddressContext";

export default function App({ Component, pageProps }: AppProps) {
  const [addressCont, setAddressCont] = useState();
  const [nftCollection, setNftCollection] = useState();
  const [poapsCollection, setPoapsCollection] = useState();

  return (
    <>
      <Head>
        <title>POAP Oddisey</title>
        <meta name="description" content="POAP Oddisey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AddressContext.Provider
        value={{
          addressCont,
          nftCollection,
          poapsCollection,
          setAddressCont,
          setNftCollection,
          setPoapsCollection,
        }}
      >
        <Component {...pageProps} />
      </AddressContext.Provider>
    </>
  );
}
