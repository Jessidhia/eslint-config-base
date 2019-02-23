'use strict'

// it's not possible to have relative "extends" (yet?), so do manual object spreading

const base = require('.')

module.exports = {
  ...base,
  root: true,
  parserOptions: { ...base.parserOptions, sourceType: 'script' },
  settings: {
    ...base.settings,
    react: {
      ...base.settings.react,
      version: '16.8'
    }
  },
  env: { ...base.env, node: true }
}
