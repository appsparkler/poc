# Understanding ESLINT Configuration

## Basic ESLINT:
- Install the linter packages in the IDE
- Add `.eslintrc` file in project root.
  If this file is blank, there won't be any linting happening

## Configuring ES-Lint
- Documentation Link : https://eslint.org/docs/user-guide/configuring
- Primary Configuration:
  - [`parserOptions`](https://eslint.org/docs/user-guide/configuring#specifying-parser-options)
  - `parser`
  - `processor`
  - `env`
  - `globals`
  - `plugins`
  - [extends](https://eslint.org/docs/user-guide/configuring#extending-configuration-files)
    - [configurations](https://eslint.org/docs/user-guide/configuring#using-a-shareable-configuration-package)
    - [plugins](https://eslint.org/docs/user-guide/configuring#using-the-configuration-from-a-plugin)
    - [configuration-files](https://eslint.org/docs/user-guide/configuring#using-a-configuration-file)
  - [rules](https://eslint.org/docs/user-guide/configuring#configuring-rules)
  - [settings](https://eslint.org/docs/user-guide/configuring#adding-shared-settings)
  - [root](https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy)
  - [overrides](https://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns)

## [Disabling Rules](https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments)

## [Using Configuration Files](https://eslint.org/docs/user-guide/configuring#using-configuration-files-1)

## [Configuration File Formats](https://eslint.org/docs/user-guide/configuring#configuration-file-formats)

## [Configuration Cascading and Hierarchy](https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy)

## [Extending Configuration Files](https://eslint.org/docs/user-guide/configuring#extending-configuration-files)

## [Configuration Based on Glob-Patterns](https://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns)

## [Comments in Configuration Files](https://eslint.org/docs/user-guide/configuring#comments-in-configuration-files)

## [Specifying File Extensions to Lint](https://eslint.org/docs/user-guide/configuring#specifying-file-extensions-to-lint)

## [Ignoring Files and Directories](https://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories)
- [Using an Alternate File](https://eslint.org/docs/user-guide/configuring#using-an-alternate-file)
- [Using `eslintIgnore` in `package.json`](https://eslint.org/docs/user-guide/configuring#using-eslintignore-in-packagejson)
- [Ignored File Warnings](https://eslint.org/docs/user-guide/configuring#ignored-file-warnings)


  ### `extends`
  - A basic configuration which doesn't need any `node_modules` installed is `eslint:recommended`. We simply set `extends: ["eslint:recommended"]`.
  - We can extends with `eslint-configs` or with `eslint-plugins`.
  - [Documentation Link](https://eslint.org/docs/user-guide/configuring#using-a-configuration-file)

  ### `rules`
  - If we want to set specific `rules` which are not covered by the `config` or `plugin` that we have extended, we can add them here.
    For ex:
    ```javascript
    "rules": {
       "for-direction": 0
     }
    ```

  ###  `parser`
  - Here we set the `parser` (ES-parser) for the source files.  By default `eslintrc` utilizes [Espree](https://github.com/eslint/espree) and if we are OK with this `parser`, we don't need to set anything for this property.  On the other hand, if we want `babel-eslint`, we need to install `babel-eslint` and `eslint` and set `parser: "babel-eslint"`.  `parserOptions` needs to be define irrespective of `parser` being defined or not.
  - Documentation Link:

  ### `parserOptions`
  - Under this setting, we define the various options for the parser - for ex. - which `ecmaVersion` to work with

  ### `env`
  - Env is for `environment`.  It pre-defines the environment for which `eslint-rules` need to be applied.
    - Documentation Link: https://eslint.org/docs/user-guide/configuring#specifying-environments
