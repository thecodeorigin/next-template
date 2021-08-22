import { LAYOUTS } from '~/constants/layout'
import { usePage } from '~/core'

const PasswordResetPage = () => {
  return usePage({
    head: {
      title: 'Reset pasword page',
      description: 'This is the reset password page',
    },
    layout: LAYOUTS.AUTH,
    template: (
      <main>
      </main>
    ),
  })
}

export default PasswordResetPage
