const Hapi = require('@hapi/hapi')
const HelloWorldPlugin = require('./plugins/hello-world').plugin

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  })
  await server.register({
    plugin: HelloWorldPlugin,
    options: {
      msg: 'Hey! Wassup',
    },
  })
  await server.start()
  console.log(`Server is running on ${server.info.uri}`)
}

process.on('unhandedRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
