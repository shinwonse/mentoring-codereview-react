module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    'simple-import-sort',
    'sort-destructure-keys',
    'sort-keys-fix',
    'typescript-sort-keys',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-param-reassign': ['error', { props: false }],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': 'error',
    'react/no-danger': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      'typescript': {}
    }
  },
};
