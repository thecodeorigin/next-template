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

const SignupPage = () => {
  const router = useRouter()
  const { setAuth } = useAuth()
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
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
      const res = await authService().signup(data)

      setAuth(res.data.data)

      router.push(router.query.redirect || '/')
      message.success('Sign up successfully');
    } catch (err) {
      message.error (`Sign up failed: ${err.response?.data.error?.message || err.message}`);
    } finally {
      // Loading end
    }
  };

  const onFinishFailed = (err) => {};

  return usePage({
    head: {
      title: 'Sign up page',
      description: 'This is the Sign up page',
    },
    layout: LAYOUTS.AUTH,
    template: (
      <main className={[styles.formWrapper, 'shadow-md'].join(' ')}>
        <h1>Sign up with</h1>
        <div className={styles.formButtonsWrapper}>
          <Button
            className={styles.formButtonGoogle}
            size="large"
          >
            <Image src="/logo/google.svg" width="20" height="20" alt="Google logo" />
            Google
          </Button>
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
            name="fullname"
            label="Full name"
            className={styles.formInputWrapper}
          >
            <Input
              className={styles.formInputInner}
              placeholder="Enter your fullname"
            />
          </Form.Item>
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
            <Input.Password
              type="password"
              className={styles.formInputInner}
              placeholder="Enter your password"
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Confirm password"
            dependencies={['password']}
            hasFeedback
            rules={[
              FORM_RULES.REQUIRED,
              FORM_RULES.CONFIRM_WITH('password'),
            ]}
            className={styles.formInputWrapper}
          >
            <Input.Password
              type="password"
              className={styles.formInputInner}
              placeholder="Confirm your password"
            />
          </Form.Item>
          <Form.Item className="mt-3">
            <Button className={styles.formButtonSubmit} type="primary" size="large" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        <div className={styles.formFooter}>
          Already have account? <Link href="/auth/login"> Sign in now </Link>
        </div>
      </main>
    ),
  })
}

export default SignupPage
