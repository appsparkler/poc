# Understanding ESLINT Configuration

## Basic ESLINT:
- Install the linter packages in the IDE
- Add `.eslintrc` file in project root.
  If this file is blank, there won't be any linting happening

## .eslintrc
This file has all the configuration for linting files in the project.

### Readymade Configurations...
* The ready made configs that we come across such as [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier), [eslint-config-google](https://github.com/google/eslint-config-google), [eslint-config-airbnb](https://github.com/airbnb/javascript) are nothing but a `JS module` exporting a `eslint-config-object` which has properties such as `rules`, `parserOptions`, `env`, `plguins`, `globals`, etc.  These configs allow us to easily make us available

### Difference between `plugins` and `configs`:
CONFIGS | PLUGINS
--------|------
Configs is a single set of rules and can be found on NPM with the prefix `eslint-config-<configName>`.  When a config is extended, we simply pass the config-name to the `extends` options.  For ex. `extends: ["google"]` | Plugins are a set of configurations and can be searched on NPM with the prefix `eslint-plugin-<pluginName>`.  Once a plugin is installed, we need to extend it by specifying the extends as `extends: ["plugin:react/recommended"]`.


### `extends`
- A basic configuration which doesn't need any `node_modules` installed is `eslint:recommended`. We simply set `extends: ["eslint:recommended"]`.
- We can extends with `eslint-configs` or with `eslint-plugins`.

### `rules`
- If we want to set specific `rules` which are not covered by the `config` or `plugin` that we have extended, we can add them here.
  For ex:
  ```javascript
  "rules": {
     "for-direction": 0
   }
  ```

###  `parser`
- Here we set the `parser` (ES-parser) for the source files.  For ex: `parser: "babel-eslint"`.  This is important else keywords such as `import`, `const`, `let`, etc. wont work.
