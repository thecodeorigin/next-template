import { Form, Input, Button, message } from 'antd';
import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'

import { LAYOUTS } from '~/constants/layout'
import { usePage } from '~/core'

import styles from '~/styles/pages/auth.module.scss'
import { authService } from '~/services/auth';
import { useRouter } from 'next/router';
import { FORM_RULES } from '~/constants/validation';

import { useAuth } from '~/core/providers/auth';
import { getError } from '~/core/utils/error';

import { GoogleLogin } from 'react-google-login';

const LoginPage = () => {
  const router = useRouter()
  const { setAuth } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onFormChange = (data) => {
    setFormData({
      ...formData,
      ...data
    });
  };

  const onFinish = async (data) => {
    try {
      // Loading start
      const res = await authService().login(data)

      if (res.data.data) {
        setAuth(res.data.data)
  
        router.push(router.query.redirect || '/')
        message.success('Login successfully');
      }
    } catch (err) {
      message.error (`Login failed: ${getError(err)}`);
    } finally {
      // Loading end
    }
  };

  const onFinishFailed = (err) => {};

  const handleLoginWithGoogleSuccess = (payload) => {
    console.log(payload)
  }

  const handleLoginWithGoogleFail = (err) => {
    console.log(err)
  }

  return usePage({
    head: {
      title: 'Login page',
      description: 'This is the Login page',
    },
    layout: LAYOUTS.AUTH,
    template: (
      <main className={[styles.formWrapper, 'shadow-md'].join(' ')}>
        <h1>Log in with</h1>
        <div className={styles.formButtonsWrapper}>
          {/* Pop-up method */}
          <GoogleLogin
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
            render={renderProps => (
              <Button
                onClick={renderProps.onClick}
                className={styles.formButtonGoogle}
                size="large"
              >
                <Image src="/logo/google.svg" width="20" height="20" alt="Google logo" />
                Google
              </Button>
            )}
            onSuccess={handleLoginWithGoogleSuccess}
            onFailure={handleLoginWithGoogleFail}
            isSignedIn={true}
            cookiePolicy={'single_host_origin'}
          />
        </div>
        <Form
          layout="vertical"
          name="form-sign-in"
          initialValues={formData}
          onFinish={onFinish}
          onValuesChange={onFormChange}
          onFinishFailed={onFinishFailed}
          className={styles.formInner}
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[FORM_RULES.REQUIRED, FORM_RULES.EMAIL]}
            className={styles.formInputWrapper}
          >
            <Input
              className={styles.formInputInner}
              placeholder="Enter your email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[FORM_RULES.REQUIRED]}
            className={styles.formInputWrapper}
          >
            <Input
              type="password"
              className={styles.formInputInner}
              placeholder="Enter your password"
            />
          </Form.Item>
          <Form.Item className="mt-3">
            <Button className={styles.formButtonSubmit} type="primary" size="large" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        <div className={styles.formFooter}>
          Not a member? <Link href="/auth/signup"> Sign up now </Link>
        </div>
      </main>
    ),
  })
}

export default LoginPage
