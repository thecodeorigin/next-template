import 'tailwindcss/tailwind.css'
import 'antd/dist/antd.css'
import '~/public/icons/style.css'
import '~/styles/globals.scss'
import Default from '~/core/layout/default'
import reduxStore from '~/store'

import { Provider } from 'react-redux'

function Root({ Component, pageProps }) {
  return (
    <Default>
      <Provider store={reduxStore.store}>
        <Component {...pageProps} />
      </Provider>
    </Default>
  )
}

export default Root;

