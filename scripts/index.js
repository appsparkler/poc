const build = require('./build')
const [,, task] = process.argv
if (task === 'build') build()
