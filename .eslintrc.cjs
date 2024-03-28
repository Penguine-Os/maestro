module.exports = {
  root: true,
  extends: ['@nuxt/eslint-config', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    // Global
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    // Vue
    'vue/multi-word-component-names': 0,
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 5
        }
      }
    ],
    'vue/no-v-html': 0,
    prettier: 'error'
  }
}
