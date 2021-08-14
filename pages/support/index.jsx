import { createPage } from '~/core'

const SupportPage = () => {
  return createPage({
    head: {
      title: 'Support page',
      description: 'This is the support page',
    },
    template: (context) => (
      <main>
      </main>
    ),
  })
}

export default SupportPage
