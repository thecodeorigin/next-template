import { LAYOUT_COMPONENTS, DEFAULT_LAYOUT } from '~/constants/layout'
import { useRouter } from 'next/router'
import { useAuth } from '~/core/providers/auth'
import Head from 'next/head'
import useClientOnly from './useClientOnly'

const usePage = (context) => {

  const { isClient } = useClientOnly()
  const { auth } = useAuth()
  const router = useRouter()

  if (context.auth && !auth && isClient) {
    router.push('auth/login?redirect=' + router.route)
    return null
  } else if (context.authNotRequired && auth && isClient) {
    router.push('/')
    return null
  }

  const DeclarativeLayout = LAYOUT_COMPONENTS[context.layout || DEFAULT_LAYOUT]

  return (
    <>
      <Head>
        <title>{context?.head?.title || 'Hello world!'}</title>
        <meta name="description" content={context?.head?.description || 'Hello world!'} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DeclarativeLayout>
        {context?.template}
      </DeclarativeLayout>
    </>
  )
}

export default usePage
