import { Html, Head, Main, NextScript } from "next/document";
// import {test} from '../public/plugins'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Bootstrap , fonts & icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="fonts/icon-font/css/style.css" />
        <link rel="stylesheet" href="fonts/typography-font/typo.css" />
        <link rel="stylesheet" href="fonts/fontawesome-5/css/all.css" />

        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
