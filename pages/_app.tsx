import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ARCADE LOTTO</title>
        <meta name="description" content="Play Now To Win Big!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content="Play Now To Win Big!" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@arcadelotto" />
        <meta name="twitter:title" content="ARCADE LOTTO" />
        <meta name="twitter:description" content="Play Now To Win Big!" />
        <meta name="twitter:creator" content="@arcadelotto" />
        <meta
          name="twitter:image"
          content="https://storage.fleek.zone/get-thrifty-team-bucket/arcade-lotto/arcadelotto-meta.png"
        />

        <meta property="og:title" content="ARCADE LOTTO" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://arcadelotto.com/" />
        <meta
          property="og:image"
          content="https://storage.fleek.zone/get-thrifty-team-bucket/arcade-lotto/arcadelotto-meta.png"
        />
        <meta property="og:description" content="Play Now To Win Big!" />
        <meta property="og:site_name" content="ARCADE LOTTO" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
