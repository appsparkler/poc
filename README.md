
# A mini-project with Webpack-build done with from a different-project - [`app-scripts-cli`](../../webpack/app-scripts-cli)

### :whale:This project is a combination of two projects:
1. The project on branch [webpack/app-scripts-cli](../../webpack/app-scripts-cli)
1. The project on this branch.

Getting Started:
- `clone` [`webpack/app-scripts-cli`](../../webpack/app-scripts-cli) branch in one folder, `yarn` it and `yarn link` it.
- Next clone the project on this branch in another folder.  Remember, since you `yarn link`ed the `app-scripts-cli` project, you have a `app-scripts` command line available to you which will be utilized in this project. Execute `yarn link app-scripts` inside this project to make it available here.  Now, exectue `yarn build`.  This should build your project.
