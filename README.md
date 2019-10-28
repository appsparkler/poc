# Understanding ESLINT Configuration

## Basic ESLINT:
- Install the linter packages in the IDE
- Add `.eslintrc` file in project root.
  If this file is blank, there won't be any linting happening

## Configuring ES-Lint
- Documentation Link : https://eslint.org/docs/user-guide/configuring
- Primary Configuration:
  - [`parserOptions`](https://eslint.org/docs/user-guide/configuring#specifying-parser-options)
  - [`parser`](https://eslint.org/docs/user-guide/configuring#specifying-parser)
  - [`processor`](https://eslint.org/docs/user-guide/configuring#specifying-processor)
  - [`env`](https://eslint.org/docs/user-guide/configuring#specifying-environments)
  - [`globals`](https://eslint.org/docs/user-guide/configuring#specifying-globals)
  - [`plugins`](https://eslint.org/docs/user-guide/configuring#configuring-plugins)
  - [`extends`](https://eslint.org/docs/user-guide/configuring#extending-configuration-files)
    - [Configurations](https://eslint.org/docs/user-guide/configuring#using-a-shareable-configuration-package)
    - [Plugins](https://eslint.org/docs/user-guide/configuring#using-the-configuration-from-a-plugin)
    - [Configuration-files](https://eslint.org/docs/user-guide/configuring#using-a-configuration-file)
  - [`rules`](https://eslint.org/docs/user-guide/configuring#configuring-rules)
  - [`settings`](https://eslint.org/docs/user-guide/configuring#adding-shared-settings)
  - [`root`](https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy)
  - [`overrides`](https://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns)

## Ad Hoc Configuration
  - [Disabling Rules](https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments)
  - [Using Configuration Files](https://eslint.org/docs/user-guide/configuring#using-configuration-files-1)
  - [Configuration File Formats](https://eslint.org/docs/user-guide/configuring#configuration-file-formats)
  - [Configuration Cascading and Hierarchy](https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy)
  - [Extending Configuration Files](https://eslint.org/docs/user-guide/configuring#extending-configuration-files)
  - [Configuration Based on Glob-Patterns](https://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns)
  - [Comments in Configuration Files](https://eslint.org/docs/user-guide/configuring#comments-in-configuration-files)
  - [Specifying File Extensions to Lint](https://eslint.org/docs/user-guide/configuring#specifying-file-extensions-to-lint)
  - [Ignoring Files and Directories](https://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories)
    - [Using an Alternate File](https://eslint.org/docs/user-guide/configuring#using-an-alternate-file)
    - [Using `eslintIgnore` in `package.json`](https://eslint.org/docs/user-guide/configuring#using-eslintignore-in-packagejson)
    - [Ignored File Warnings](https://eslint.org/docs/user-guide/configuring#ignored-file-warnings)
