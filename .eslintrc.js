module.exports = {
  env: {
    jest: true,
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    // === BASE === //
    'func-names': 0,
    'no-console': 'warn',
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,
    'no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err',
      },
    ],
    'consistent-return': 0,

    // === IMPORT === //
    'import/prefer-default-export': 0,
    'import/extensions': 0,

    // === PRETTIER === //
    'prettier/prettier': [
      'error',
      {
        printWidth: 90,
        singleQuote: true,
      },
    ],

    // === REACT === //
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/function-component-definition': 0,
    'react/no-unescaped-entities': 0,
    'react/no-array-index-key': 0,
    'react/require-default-props': 0,
    'react/prefer-stateless-function': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
      },
    ],

    // === REACT HOOKS === //
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // === JSX A11Y === //
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
  },
};
