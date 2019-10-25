# Understanding ESLINT Configuration

## Basic ESLINT:
- Install the linter packages in the IDE
- Add `.eslintrc` file in project root.
  If this file is blank, there won't be any linting happening

## .eslintrc
This file has all the configuration for linting files in the project.

### Readymade Config
* The ready made configs that we come across such as [eslint-plugin-create-react-app](), [eslint-config-google](), [eslint-config-vue]() are nothing but a `JS module` exporting a `eslint-config-object` which has properties such as `rules`, `parserOptions`, `env`, `plguins`, `globals`, etc.  These configs allow us to easily make us available

### `extends`
- A basic configuration which doesn't need any `node_modules` installed is `eslint:recommended`.  
- To extend a `configuration`, we need to install a config with the

### `rules`
1.
1.

###  `parser`

### Difference between `plugins` and `configs`:
CONFIGS | Configs is a single set of rules and can be found on NPM with the prefix `eslint-config-<configName>`.  When a config is extended, we simply pass the config-name to the `extends` options.  For ex. `extends: ["google"]`
________
PLUGINS | Plugins are a set of configurations and can be searched on NPM with the prefix `eslint-plugin-<pluginName>`.  Once a plugin is installed, we need to extend it by specifying the
________
