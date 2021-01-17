import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";
import LayoutMulti from "@components/layoutMulti";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutMulti>
      <Head>
        <title>GettingBetter</title>
        <meta
          name="Description"
          content="A microsystems framework for improving your life."
        />
      </Head>

      <Component {...pageProps} />
    </LayoutMulti>
  );
}

export default MyApp;
