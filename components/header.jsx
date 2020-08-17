import React from "react";
import Head from "next/head";
import { Helmet } from "react-helmet";

function Header(props) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      {/*<meta*/}
      {/*  name="description"*/}
      {/*  content="Wabomba Bakar Sofware Engineer And Web Developer Portfolio"*/}
      {/*/>*/}
      {/*<meta name="author" content="Wabomba Bakar" />*/}
      {/*<meta*/}
      {/*  property="og:title"*/}
      {/*  content="Wabomba Bakar : Software Engineer And Web Developer"*/}
      {/*/>*/}
      {/*<meta*/}
      {/*  property="og:description"*/}
      {/*  content="Wabomba Bakar : Software Engineer And Web Developer"*/}
      {/*/>*/}
      {/*<meta property="og:image" content="" />*/}
      {/*<meta name="format-detection" content="telephone=no" />*/}
      <title>Ghetto Hustlers Entertainment</title>
      <script src="https://widget.northeurope.cloudapp.azure.com:9443/v0.1.0/mobile-money-widget-mtn.js"></script>
    </Head>
  );
}

export default Header;
