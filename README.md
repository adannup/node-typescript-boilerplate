# DOCS

## [ESLint (Getting Started)](https://eslint.org/docs/user-guide/getting-started)

### Installation and Usage

Prerequisites: `Node.js` (`^10.12.0`, or `>=12.0.0`) built with SSL support. (If you are using an official Node.js distribution, SSL is always built in.)

You can install ESLint using npm or yarn:

```console
npm install eslint --save-dev

# or

yarn add eslint --dev
```

You should then set up a configuration file:

```console
$ npx eslint --init
```

After that, you can run ESLint on any file or directory like this:

```console
$ npx eslint yourfile.js
```

It is also possible to install ESLint globally rather than locally (using `npm install eslint --global`). However, this is not recommended, and any plugins or shareable configs that you use must be installed locally in either case.

### Configuration

Note: If you are coming from a version before 1.0.0 please see the migration guide.

After running `eslint --init`, you'll have a `.eslintrc.{js,yml,json}` file in your directory. In it, you'll see some rules configured like this:

```javascript
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```

The names `"semi"` and `"quotes"` are the names of rules in ESLint. The first value is the error level of the rule and can be one of these values:

- `"off"` or `0` - turn the rule off
- `"warn"` or `1` - turn the rule on as a warning (doesn't affect exit code)
- `"error"` or `2` - turn the rule on as an error (exit code will be 1)
  The three error levels allow you fine-grained control over how ESLint applies rules (for more configuration options and details, see the configuration docs).

Your `.eslintrc.{js,yml,json}` configuration file will also include the line:

```javascript
{
    "extends": "eslint:recommended"
}
```

Because of this line, all of the rules marked "" on the rules page will be turned on. Alternatively, you can use configurations that others have created by searching for "eslint-config" on npmjs.com. ESLint will not lint your code unless you extend from a shared configuration or explicitly turn rules on in your configuration.

### Project Installation

For this project use:

```javascript
$ npx eslint --init
```

```console
$ npx eslint --init
? How would you like to use ESLint? (Use arrow keys)
  To check syntax only
  To check syntax and find problems
❯ To check syntax, find problems, and enforce code style
```

```console
? What type of modules does your project use? (Use arrow keys)
❯ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these
```

```console
? Which framework does your project use? (Use arrow keys)
  React
  Vue.js
❯ None of these
```

```console
? Does your project use TypeScript? (y/N) y
```

```console
? Where does your code run? (Press <space> to select, <a> to toggle all, <i> to
invert selection)
 ◯ Browser
❯◉ Node
```

```console
? How would you like to define a style for your project? (Use arrow keys)
❯ Use a popular style guide
  Answer questions about your style
  Inspect your JavaScript file(s)
```

```console
? Which style guide do you want to follow? (Use arrow keys)
❯ Airbnb (https://github.com/airbnb/javascript)
  Standard (https://github.com/standard/standard)
  Google (https://github.com/google/eslint-config-google)
```

> NOTE: if you want to add comments in eslint rules, you should choose `JavaScript`.

```console
? What format do you want your config file to be in? (Use arrow keys)
  JavaScript
  YAML
❯ JSON
```

```console
Checking peerDependencies of eslint-config-airbnb-base@latest
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

@typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.21.2 @typescript-eslint/parser@latest
? Would you like to install them now with npm? (Y/n) Y
```

## [Prettier](https://prettier.io/docs/en/install.html)

### Install

First, install Prettier locally:

```console
npm install --save-dev --save-exact prettier
```

Then, create an empty config file to let editors and other tooling know you are using Prettier:

```console
echo {}> .prettierrc.json
```

Next, create a `.prettierignore` file to let the Prettier CLI and editors know which files to not format. Here’s an example:

```
# Ignore artifacts:
build
coverage
```

> Tip! Base your .prettierignore on .gitignore and .eslintignore (if you have one).

If you have a CI setup, run the following as part of it to make sure that everyone runs Prettier. This avoids merge conflicts and other collaboration issues!

```console
prettier --check .
```

`--check` only checks that files are already formatted.

## [Integrate typescript-eslint with Prettier](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#usage-with-prettier)

If you use `prettier`, there is also a helpful config to help ensure ESLint doesn't report on formatting issues that prettier will fix: eslint-config-prettier.

Using this config is as simple as adding it to the end of your extends:

```javascript
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
+   'prettier/@typescript-eslint',
  ],
};
```

## [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)

### Installation

```console
npm install --save-dev eslint-plugin-prettier
npm install --save-dev --save-exact prettier
```

`eslint-plugin-prettier` does not install Prettier or ESLint for you. You must install these yourself.

Then, in your `.eslintrc.json`:

```json
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

### Recommended Configuration

This plugin works best if you disable all other ESLint rules relating to code formatting, and only enable rules that detect patterns in the AST. (If another active ESLint rule disagrees with `prettier` about how code should be formatted, it will be impossible to avoid lint errors.) You can use [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to disable all formatting-related ESLint rules.

If your desired formatting does not match the prettier output, you should use a different tool such as prettier-eslint instead.

To integrate this plugin with `eslint-config-prettier`, you can use the "recommended" configuration:

In addition to the above installation instructions, install `eslint-config-prettier`:

```console
npm install --save-dev eslint-config-prettier
```

Then you need to add `plugin:prettier/` recommended as the last extension in your `.eslintrc.json`:

```json
{
  "extends": ["plugin:prettier/recommended"]
}
```

This does three things:

* Enables `eslint-plugin-prettier`.
* Sets the `prettier/prettier` rule to `"error"`.
* Extends the `eslint-config-prettier` configuration.

# [Testing (ts-jest)](https://github.com/kulshekhar/ts-jest)

### Getting Started
These instructions will get you setup to use ts-jest in your project. For more detailed documentation, please check online documentation.

#### Prerequisites

`npm i -D jest typescript`

#### Installing
`npm i -D ts-jest @types/jest`

#### Creating config
`npx ts-jest config:init`

## [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)

### Installation

```console
$ npm install --save-dev eslint eslint-plugin-jest
```

> Note: If you installed ESLint globally then you must also install `eslint-plugin-jest` globally.

### Usage
Add `jest` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["jest"]
}
```

### Recommended
This plugin exports a recommended configuration that enforces good testing practices.

To enable this configuration use the `extends` property in your `.eslintrc` config file:

```json
{
  "extends": ["plugin:jest/recommended"]
}
```