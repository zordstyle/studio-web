import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
      <Html lang="en">
        <Head />
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
}

// MyDocument.getInitialProps = async (ctx) => {
//
//   const originalRenderPage = ctx.renderPage;
//   const sheet = new ServerStyleSheet()
//
//   try {
//     ctx.renderPage = () =>
//       originalRenderPage({
//         enhanceApp: (App) => (props) => {
//           return <App {...props} />
//         },
//       })
//
//     const initialProps = await Document.getInitialProps(ctx);
//
//     return {
//       ...initialProps,
//       styles: (
//         <>
//           {initialProps.styles}
//         </>
//       ),
//     }
//   } catch (error) {
//     console.error(error)
//   }
// }