import 'tailwindcss/tailwind.css'
import 'antd/dist/antd.css'
import '~/public/icons/style.css'
import '~/styles/globals.scss'
import App from 'next/app'
import reduxStore from '~/store'
import { motion } from 'framer-motion'
import { Provider } from 'react-redux'
import { AuthProvider } from '~/core/providers/auth'
import { MOTION_VARIANTS } from '~/constants/framer-motion'

function Root({ Component, pageProps, auth }) {
  const store = reduxStore.store
  
  return (
    <AuthProvider auth={auth}>
      <Provider store={store}>
        <motion.div
          variants={MOTION_VARIANTS} // Pass the variant object into Framer Motion 
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: 'linear' }} // Set the transition to linear
          className=""
        >
          <Component {...pageProps} />
        </motion.div>
      </Provider>
    </AuthProvider>
  )
}

Root.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  const auth = appContext.ctx.req?.cookies?.auth || null

  if (auth) {
    return { ...appProps, auth: JSON.parse(auth) }
  } else {
    return appProps
  }

}

export default Root;

