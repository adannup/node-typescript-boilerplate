# DOCS

## [ESLint (Getting Started)](https://eslint.org/docs/user-guide/getting-started)

### Installation and Usage
Prerequisites: `Node.js` (`^10.12.0`, or `>=12.0.0`) built with SSL support. (If you are using an official Node.js distribution, SSL is always built in.)

You can install ESLint using npm or yarn:
```javascript
npm install eslint --save-dev

# or

yarn add eslint --dev
```

You should then set up a configuration file:

```javascript
$ npx eslint --init
```

After that, you can run ESLint on any file or directory like this:
```javascript
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

* `"off"` or `0` - turn the rule off
* `"warn"` or `1` - turn the rule on as a warning (doesn't affect exit code)
* `"error"` or `2` - turn the rule on as an error (exit code will be 1)
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

NOTE: if you want to add comments in eslint rules, you should choose `JavaScript`.

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