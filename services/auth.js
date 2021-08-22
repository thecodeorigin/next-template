import { http } from '~/core/utils/http';

export const authService = (opts) => {
  const _http = http(opts)

  return {
    signup: (form) => _http.post('/auth/signup', form),

    login: (form) => _http.post('/auth/login', form),

    logout: (form) => _http.post('/auth/logout', form),

    checkEmail: (form) => _http.post('/auth/check-email', form),

    checkUser: (form) => _http.post('/auth/check-user', form),

    forgotPassword: (form) => _http.post('/auth/forgot-password', form),

    verifyCode: (form) => _http.post('/auth/verify-code', form),

    resetPassword: (form) => _http.post('/auth/reset-password', form),

    refreshToken: (form) => _http.post('/auth/refresh-token', form),
  }
}
