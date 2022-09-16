# Eslint Prettier

- https://eslint.org/
- https://eslint.org/docs/latest/rules/
- https://prettier.io/
- https://prettier.io/docs/en/options.html
- https://zh-hans.reactjs.org/docs/hooks-rules.html
- https://github.com/lydell/eslint-plugin-simple-import-sort
- https://github.com/sweepline/eslint-plugin-unused-imports

## React

`package.scripts`

```json
{
  "lint": "yarn lint:eslint && yarn lint:next",
  "lint:eslint": "eslint '**/*.{ts,tsx}' --fix"
}
```

`package.devDependencies`

```json
{
  "@typescript-eslint/eslint-plugin": "^5.30.5",
  "@typescript-eslint/parser": "^5.30.5",
  "eslint": "^8.19.0",
  "eslint-config-prettier": "^8.5.0",
  "eslint-plugin-prettier": "^4.2.1",
  "eslint-plugin-react": "^7.30.1",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-simple-import-sort": "^7.0.0",
  "eslint-plugin-unused-imports": "^2.0.0",
  "prettier": "2.7.1"
}
```

`.eslintrc`

```json
{
  "env": {
    "browser": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "react-hooks", "@typescript-eslint", "simple-import-sort", "unused-imports"],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "unused-imports/no-unused-imports": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

`.eslintignore`

```json
.*.js
*.config.js
build
public
coverage
```

`.prettierrc`

```json
{
  "semi": false,
  "singleQuote": true,
  "useTabs": false,
  "printWidth": 120
}
```

`.prettierignore`

```json
# Ignore artifacts:
build
public
coverage
```

## Next

`package.devDependencies`

```json
{
  "@typescript-eslint/eslint-plugin": "^5.27.0",
  "@typescript-eslint/parser": "^5.27.0",
  "eslint": "^8.16.0",
  "eslint-config-next": "^12.1.6",
  "eslint-config-prettier": "^8.5.0",
  "eslint-plugin-prettier": "^4.0.0",
  "eslint-plugin-react": "^7.30.0",
  "eslint-plugin-react-hooks": "^4.5.0",
  "eslint-plugin-simple-import-sort": "^7.0.0",
  "eslint-plugin-unused-imports": "^2.0.0",
  "prettier": "^2.6.2"
}
```

`.eslintrc`

```js
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports', 'prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'unused-imports/no-unused-imports': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  ignorePatterns: ['.*.js', '*.config.js', 'public'],
};
```

`.prettierrc`

```js
module.exports = {
  semi: false,
  trailingComma: 'es5',
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 120,
};
```
