import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import Layout from "../layout/Layout/Layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content="HD Nautika" />
        <link rel="icon" href="/assets/svg/logo1.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default appWithTranslation(MyApp);
