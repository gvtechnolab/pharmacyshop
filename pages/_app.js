import Head from "next/head";
import Layout from "../src/components/Layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.css";
import "../src/styles/globals.scss";
import { store } from "../store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export default function MyApp({ Component, pageProps }) {
  let persistor = persistStore(store);
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/assets/images/pharmacyshoplogo96.png" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
              rel="stylesheet"
            />

            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
}
