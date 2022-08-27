import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../app/Layout/Layout";
import { Toaster } from "react-hot-toast";
import StateProvider from "../app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StateProvider>
        <Toaster />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateProvider>
    </>
  );
}

export default MyApp;
