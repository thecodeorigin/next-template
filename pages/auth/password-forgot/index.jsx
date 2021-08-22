import { LAYOUTS } from '~/constants/layout'
import { usePage } from '~/core'

const PasswordForgotPage = () => {
  return usePage({
    head: {
      title: 'Forgot password page',
      description: 'This is the forgot password page',
    },
    layout: LAYOUTS.AUTH,
    template: (
      <main>
      </main>
    ),
  })
}

export default PasswordForgotPage
