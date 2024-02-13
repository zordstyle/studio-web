import PropTypes from "prop-types";
import "@styles/globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Head from "next/head";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
const MyApp = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>가람 프로덕션</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default MyApp;
