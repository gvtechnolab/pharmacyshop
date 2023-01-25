import Head from "next/head";
import Layout from "../src/components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "../src/styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/pharmacyshopfavicon30.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
