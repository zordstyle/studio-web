import PropTypes from "prop-types"
import '@styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
const MyApp = (props) => {
  const { Component, pageProps } = props

  return (
    <Component {...pageProps} />
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default MyApp