// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  plugins: ['import', 'prettier', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: true,
      typescript: true,
    },
  },
  rules: {
    'import/no-relative-packages': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': [
      'error',
      'always',
      // hide known extensions that are resolved by webpack
      {
        js: 'never',
        ts: 'never',
      },
    ],
    // prettier compatibility
    'max-len': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 100,
        tabWidth: 2,
      },
    ],
    // only for use with getter-setters
    'no-underscore-dangle': 0,
    // to correctly work on windows with some tools that create windows line-endings
    // this will be correct by git when committed
    'linebreak-style': 0,
    // TypeScript-specific adjustments
    'no-undef': 'off', // TypeScript handles this
    'no-unused-vars': 'off', // Allow interface parameters to be unused
    'class-methods-use-this': 0, // Already set but good for mixins
    'no-useless-constructor': 'off', // TypeScript constructors might be needed for types
    'lines-between-class-members': 'off', // Allow compact class definitions
    'no-plusplus': 'off', // Allow ++ operator
    'default-param-last': 'off', // TypeScript has different parameter handling
    'no-unused-expressions': 'off', // Allow type assertions
  },
};
