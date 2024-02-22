import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import Script from "next/script";
import Layout from "../layout/Layout/Layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
          <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}`}
        id="google-analytics"
      />

      <Script strategy="lazyOnload" id="google-analytics-two"
>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}',{
          page_path: window.location.pathname,
          });
         `}
      </Script>

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content="HD Nautika" />
        <link rel="icon" href="/assets/images/logo.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default appWithTranslation(MyApp);
