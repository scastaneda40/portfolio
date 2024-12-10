import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta property="og:title" content="Stephen&apos;s Dev Portfolio" />
        <meta property="og:description" content="Welcome to Stephe&apos;s portfolio. Feel free to explore my most recent projects and download my resume to learn more about my work!" />
        <meta property="og:image" content="/images/stephen.jpeg" />
        <meta property="og:url" content="https://www.stevethebuilder.dev/" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
