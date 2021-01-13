import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="/fonts/style.css" rel="stylesheet" />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-LKN8VFTX88"
          ></script>

          <script src="/ga.js" async></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
