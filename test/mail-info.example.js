// private
module.exports = {
  to: [
    'example@163.com'
  ],
  from: 'example <example@163.com>',
  smtp: {
    auth: {
      user: 'example@163.com',
      pass: 'example'
    },
    host: 'smtp.163.com',
    secureConnection: true,
    port: 465
  },
  headers: {
    'x-my-key': 'header value',
    'x-another-key': 'another value'
  }
}