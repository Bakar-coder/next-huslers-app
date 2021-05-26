import React from "react";
import { Provider } from "react-redux";
import { initStore } from "../store";
import withRedux from "next-redux-wrapper";
import { ToastContainer } from "react-toastify";
import App from "next/app";
import Layout from "../components/layouts/layout";
import "react-toastify/dist/ReactToastify.css";
import "../styles/main.scss";

class MyApp extends App {
  static async getInitialProps(context) {
    const { Component, ctx } = context;
    const pageProps =
      Component.getInitialProps && (await Component.getInitialProps(ctx));
    return { ...pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Layout>
          <ToastContainer />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default withRedux(initStore, {
  debug: process.env.NODE_ENV === "development" ? true : false,
})(MyApp);
