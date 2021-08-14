import Head from 'next/head'

const createPage = (context) => {
  return (
    <>
      <Head>
        <title>{context?.head?.title || 'Hello world!'}</title>
        <meta name="description" content={context?.head?.description || 'Hello world!'} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {context?.template(context)}
    </>
  )
}

export default createPage
