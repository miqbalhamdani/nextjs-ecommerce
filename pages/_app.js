import Default from '../components/layouts/Default'
import '../assets/styles/styles.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Default>
      <Component {...pageProps} />
    </Default>
  )
}

export default MyApp
