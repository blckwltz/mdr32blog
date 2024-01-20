module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'next/core-web-vitals'
  ],

  plugins: ['@typescript-eslint', 'unused-imports', 'simple-import-sort'],

  rules: {
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],

    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],

    semi: ['error', 'always'],

    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipRegExps: true,
        skipTemplates: true,
      },
    ],

    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],

    quotes: ['error', 'single', 'avoid-escape'],

    'max-len': 'off',

    'max-lines': [
      'error',
      {
        max: 500,
      },
    ],

    'object-curly-spacing': ['error', 'never'],

    'array-bracket-spacing': ['error', 'never'],

    'computed-property-spacing': ['error', 'never'],

    'arrow-parens': ['error', 'always'],

    '@typescript-eslint/no-var-requires': 'off',

    '@typescript-eslint/consistent-type-imports': 'error',

    'simple-import-sort/imports': [
      'error',
      {
        // Disable blank lines between import groups.
        groups: [['^\\u0000', '^@?\\w', '^[^.]', '^\\.']],
      },
    ],

    'import/no-unresolved': 'error',
    'import/no-named-as-default-member': 'off',
    'import/no-anonymous-default-export': 'off',

    'unused-imports/no-unused-imports': 'error',
  },
}
