'use strict'

module.exports = {
  plugins: ['@typescript-eslint', 'react-hooks', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
    // https://github.com/typescript-eslint/typescript-eslint/issues/101
    //project: true
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // rules that can be valid in typescript code (e.g. overloads)
        'no-dupe-class-members': 'off',
        'no-redeclare': 'off'
      }
    },
    {
      files: ['*.d.ts'],
      parserOptions: { sourceType: 'script' },
      rules: {
        strict: ['error', 'never'],
        'no-implicit-globals': 'off'
      }
    },
    {
      files: ['.eslintrc.js', '*.config.js'],
      parserOptions: { sourceType: 'script' },
      env: { node: true }
    }
  ],

  rules: {
    // #region prettier
    'prettier/prettier': 'error',

    // rules that eslint-config-pretier disables but I want anyway
    // https://github.com/prettier/eslint-config-prettier/#special-rules
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-arrow-callback': [
      'error',
      { allowNamedFunctions: true, allowUnboundThis: false }
    ],
    curly: ['error', 'all'],
    'no-tabs': 'error',
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false }
    ],

    // prettier has a soft limit of 80; add a hard limit at 110 for better readability in extreme cases
    // template strings can escape their newlines with a `\`, same with markdown and jsdoc
    'max-len': ['error', { code: 110, ignoreUrls: true }],
    // #endregion

    // #region base eslint rules
    // base rules that have @typescript-eslint versions use those instead
    // other typescript-specific rules are in a different section

    // https://eslint.org/docs/rules/#possible-errors
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-misleading-character-class': 'error',
    'no-template-curly-in-string': 'error',
    'require-atomic-updates': 'error',

    // https://eslint.org/docs/rules/#best-practices
    'no-caller': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-implicit-coercion': [
      'error',
      {
        allow: ['!!', '+']
      }
    ],
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-with': 'error',
    radix: 'error',
    yoda: 'error',

    strict: 'error',

    // https://eslint.org/docs/rules/#variables
    'no-label-var': 'error',
    'no-restricted-globals': ['error', 'name'],
    'no-shadow-restricted-names': 'error',
    'no-undef-init': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'local',
        args: 'all',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        caughtErrors: 'all'
      }
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: false, typedefs: false }
    ],

    // https://eslint.org/docs/rules/#variables
    'no-buffer-constructor': 'error',
    'no-path-concat': 'error',

    // https://eslint.org/docs/rules/#nodejs-and-commonjs
    'no-new-require': 'error',

    // https://eslint.org/docs/rules/#stylistic-issues
    '@typescript-eslint/camelcase': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    'no-new-object': 'error',
    'one-var': ['error', 'never'],
    'prefer-object-spread': 'error',

    // https://eslint.org/docs/rules/#ecmascript-6
    'no-useless-computed-key': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    // #endregion

    // #region typescript
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    // not yet published
    // '@typescript-eslint/ban-ts-ignore': 'error',
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/interface-name-prefix': ['error', 'never'],
    '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-object-literal-type-assertion': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/prefer-interface': 'error',
    // requires services
    // '@typescript-eslint/promise-function-async': 'error'
    // #endregion

    // #region react
    'react-hooks/rules-of-hooks': 'error'
    // #endregion
  }
}
