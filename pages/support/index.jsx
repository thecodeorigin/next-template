import { createPage } from "~/core/createPage"

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
