# Husky commitlint lint-staged

- https://github.com/typicode/husky
- https://github.com/conventional-changelog/commitlint
- https://github.com/okonet/lint-staged

`package.scripts`

```json
{
  "postinstall": "husky install"
}
```

`package.devDependencies`

```json
{
  "@commitlint/cli": "^17.0.3",
  "@commitlint/config-conventional": "^17.0.3",
  "husky": "^8.0.1",
  "lint-staged": "^13.0.3"
}
```

`commitlint.config.js`

```js
module.exports = { extends: ['@commitlint/config-conventional'] };
```

`lint-staged.config.js`

```js
module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) => `yarn prettier --write ${filenames.join(' ')}`,
};
```

`.husky/pre-commmit`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

yarn lint-staged
```

`.husky/commit-msg`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

yarn commitlint --edit $1
```
