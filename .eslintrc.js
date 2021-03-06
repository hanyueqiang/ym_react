module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      rules: {
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-no-undef': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
  },
  env: {
    browser: true,
    es2020: true,
    node: true,
    commonjs: true,
  },
  globals: {
    React: true,
    ReduxConnect: true,
    Axios: true,
    UseEffect: true,
  },
  ignorePatterns: ['dist/'],
};
