module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:prettier/recommended', 'airbnb'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    semi: [2, 'never'],
    'prettier/prettier': 'error',
    'object-shorthand': [
      2,
      'always',
      {
        avoidExplicitReturnArrows: true,
      },
    ],
    'function-paren-newline': 0,
    'class-methods-use-this': 0,
    'comma-dangle': 0,
    'prefer-destructuring': [
      2,
      {
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
    ],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 1,
    'import/no-unresolved': 1,
    'import/prefer-default-export': 0,
    'jsx-a11y/label-has-for': 0, // allow implicit label for input implementation
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'linebreak-style': 'off',
    'no-await-in-loop': 0,
    'no-console': 0,
    'no-empty-function': 1,
    'no-param-reassign': 0, // [].reduce are easier with this turned off,
    'no-restricted-syntax': [2, 'DebuggerStatement', 'LabeledStatement', 'WithStatement'],
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': 1,
    'react/sort-comp': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-closing-bracket-location': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/destructuring-assignment': [0, 'always'],
    'react/no-array-index-key': 0,
    'react/require-default-props': 1,
    'no-mixed-operators': 0,
    'react/no-did-mount-set-state': 0, // dom size detection after mount may require setState in didMount
    'react/jsx-one-expression-per-line': 0,
    camelcase: 0,
    'react/prop-types': 0,
  },
}
