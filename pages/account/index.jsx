import { createPage } from '~/core'

const AccountPage = () => {
  return createPage({
    head: {
      title: 'Account page',
      description: 'This is the account page',
    },
    template: (context) => (
      <main>
      </main>
    ),
  })
}

export default AccountPage
