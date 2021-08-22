import { http } from '~/core/utils/http';

export const userService = (opts) => {
  const _http = http(opts)

  return {
    getMany: (form) => _http.post('/auth/signup', form),

    getOne: (form) => _http.post('/auth/login', form),

    updateOne: (form) => _http.post('/auth/logout', form),

    deleteOne: (form) => _http.post('/auth/check-email', form),
  }
}
