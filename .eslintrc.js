module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
  },
  'extends': [
    'google',
    'plugin:react/recommended',
  ],
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'module',
      },
    },
  ],
  'parserOptions': {
    'ecmaVersion': '2021',
  },
  'plugins': [
    'react',
  ],
  'rules': {
  },
};
