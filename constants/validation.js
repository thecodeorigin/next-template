export const FORM_RULES = Object.freeze({
  REQUIRED: { required: true, message: 'This field is required!' },
  EMAIL: { type: 'email', message: 'This field is required!' },
  CONFIRM_WITH: (fieldName) => ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue(fieldName) === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('The two values that you entered do not match!'));
    },
  }),
})