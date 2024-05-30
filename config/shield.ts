import { defineConfig } from '@adonisjs/shield'

const shieldConfig = defineConfig({
  /**
   * Configure CSP policies for your app. Refer documentation
   * to learn more
   */
  csp: {
    enabled: false,
    directives: {},
    reportOnly: false,
  },

  /**
   * Configure CSRF protection options. Refer documentation
   * to learn more
   */
  // csrf: {
  //   enabled: true,
  //   exceptRoutes: [],
  //   enableXsrfCookie: false,
  //   methods: ['POST', 'PUT', 'PATCH', 'DELETE'],
  // },

  csrf: {
      enabled: false,
      methods: ['POST', 'PUT', 'DELETE'],
      cookieOptions: {
          httpOnly: false,
          sameSite: true,
          path: '/',
          maxAge: 7200
      }
  },

  /**
   * Control how your website should be embedded inside
   * iFrames
   */
  xFrame: {
    enabled: true,
    action: 'DENY',
  },

  /**
   * Force browser to always use HTTPS
   */
  hsts: {
    enabled: true,
    maxAge: '180 days',
  },

  /**
   * Disable browsers from sniffing the content type of a
   * response and always rely on the "content-type" header.
   */
  contentTypeSniffing: {
    enabled: true,
  },
})

export default shieldConfig
