import 'tailwindcss/tailwind.css'
import 'antd/dist/antd.css'
import '~/public/icons/style.css'
import '~/styles/globals.scss'
import Default from '~/core/layout/default'

function Root({ Component, pageProps }) {
  return (
    <Default>
      <Component {...pageProps} />
    </Default>
  )
}

export default Root;

