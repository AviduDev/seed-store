import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
 return (
    <Html>
       <Head>
          <link rel="preconnect" href="<https://app.snipcart.com>" />
          <link rel="preconnect" href="<https://cdn.snipcart.com>" />
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@800;900&display=swap" rel="stylesheet"></link>
          <link
             rel="stylesheet"
             href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"
          />
       </Head>
       <body>
          <Main />
          <NextScript />
          <script async src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"></script>
          <div hidden id="snipcart" data-api-key="OWQ4MWY3YzUtY2Q2My00MDMzLWIzNmUtYTg1YzA0ZTJhNjg3NjM3ODI0MjMwMjY4NDEwMjA5" data-config-modal-style="side"></div>
       </body>
    </Html>
 );
}