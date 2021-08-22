import { LAYOUTS } from '~/constants/layout'
import { usePage } from '~/core'

const VerifyCodePage = () => {
  return usePage({
    head: {
      title: 'Verify code page',
      description: 'This is the verify code page',
    },
    layout: LAYOUTS.AUTH,
    template: (
      <main>
      </main>
    ),
  })
}

export default VerifyCodePage
