module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  env: {
    node: true,
    jest: true,
    mocha: true,
  },
  rules: {
    'no-console': 'error',
    'no-debugger': 'off',
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'only-multiline',
    }],
    // Vue
    // Off
    'vue/no-v-html': 'error',
    // Allow :query='gql => gql`query { foo (bar: "text with quotes") }`' as GraphQL only support double quotes (") for text in queries
    'vue/html-quotes': 'off',
  },
  globals: {
    $: true,
    smartlook: true,
    grecaptcha: true,
    _: true,
    google: true,
    gapi: true,
    storage: true,
    LOCATION_URL_BASE: true,
    LOCATION_URL: true,
    browser: true,
    screenfull: true,
    OT: true,
    Raven: true,
    md5: true,
    countdown: true,
    videojs: true,
    ifvisible: true,
    YT: true,
    platform: true,
    ga: true,
    analytics: true,
    accounting: true,
    Headway: true,
    jscolor: true,
    descriptionEditor: true,
    nullable: true,
    growsumo: true,
  },
  overrides: [
    {
      files: ['**/*.spec.js'],
      rules: {
        'prefer-const': 'off',
      },
    },
  ],
}
