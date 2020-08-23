import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta httpEquiv='content-type' content='text/html; charset=utf-8' />
          <meta name='author' content='Wabomba Bakar' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <body className='body'>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
