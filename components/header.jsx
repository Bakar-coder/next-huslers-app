import React from "react";
import Head from "next/head";

function Header(props) {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <link rel="stylesheet" href="/assets/css/ionicons.min.css"/>
      <title>Ghetto Hustlers Entertainment</title>
    </Head>
  );
}

export default Header;
