import { useRouter } from 'next/router';
import { Button, message } from 'antd';
import { LAYOUTS } from '~/constants/layout'
import { usePage } from '~/core'
import { useAuth } from '~/core/providers/auth';
import { authService } from '~/services/auth';
import { GoogleLogout } from 'react-google-login';
import dev from '~/core/utils/dev';

const AccountPage = () => {
  const router = useRouter()
  const { auth, setAuth } = useAuth()

  const handleLogoutSuccess = async () => {
    try {
      await authService({ auth }).logout()
    } catch (err) {
      dev.error(err)
    } finally {
      setAuth(null)
  
      router.push('/auth/login')
      message.success('Sign out successfully');
    }
  }

  return usePage({
    head: {
      title: 'Account page',
      description: 'This is the account page',
    },
    auth: true,
    layout: LAYOUTS.DEFAULT,
    template: (
      <main>
        <GoogleLogout
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
          buttonText="Logout"
          render={renderProps => (
            <Button
              onClick={renderProps.onClick}
              type="primary"
              size="large"
              danger
            >
              <i className="icon-switch" />
              <span style={{ marginLeft: 5 }}>Logout</span>
            </Button>
          )}
          onLogoutSuccess={handleLogoutSuccess}
        />
      </main>
    ),
  })
}

export default AccountPage
