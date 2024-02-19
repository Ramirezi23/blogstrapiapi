module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'mr07V4yGLITzv/zWEGa86Q=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'QAGXintCUI85JXQ9abAYdw=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'dJ7+F86LIbjFqI1MH0YD2A=='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
