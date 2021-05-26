import React from "react";
import Head from "next/head";

function Header(props) {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />

      <link
        rel='icon'
        type='/image/png'
        href='icon/favicon-32x32.png'
        sizes='32x32'
      />
      <link rel='apple-touch-icon' href='/icon/favicon-32x32.png' />

      <link rel="stylesheet" href="/css/bootstrap-reboot.min.css"/>
	<link rel="stylesheet" href="/css/bootstrap-grid.min.css"/>
	<link rel="stylesheet" href="/css/owl.carousel.min.css"/>
	<link rel="stylesheet" href="/css/jquery.mCustomScrollbar.min.css"/>
	<link rel="stylesheet" href="/css/nouislider.min.css"/>
	<link rel="stylesheet" href="/css/ionicons.min.css"/>
	<link rel="stylesheet" href="/css/plyr.css"/>
	<link rel="stylesheet" href="/css/photoswipe.css"/>
	<link rel="stylesheet" href="/css/default-skin.css"/>
	<link rel="stylesheet" href="/css/main.css"/>
	<link rel="stylesheet" href="/css/magnific-popup.css"/>
	<link rel="stylesheet" href="/css/select2.min.css"/>
	<link rel="stylesheet" href="/css/admin.css"/>


	
	<link rel="icon" type="image/png" href="/icon/favicon-32x32.png" sizes="32x32"/>
	<link rel="apple-touch-icon" href="/icon/favicon-32x32.png"/>


      <meta name='description' content='' />
      <meta name='keywords' content='' />
      <meta name='author' content='Wabomba Bakar'></meta>
      <title>Ghetto Hustlers Entertainment</title>
    </Head>
  );
}

export default Header;
