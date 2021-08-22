import { usePage } from '~/core'

const SupportPage = () => {
  return usePage({
    head: {
      title: 'Support page',
      description: 'This is the support page',
    },
    auth: true,
    template: (context) => (
      <main>
      </main>
    ),
  })
}

export default SupportPage
