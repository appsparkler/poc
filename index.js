const Hapi = require('@hapi/hapi')
const HelloWorldPlugin = require('./plugins/hello-world')

async function registerHelloWorldPluginOnServer(server) {
  await server.register({
    plugin: HelloWorldPlugin,
    options: {
      msg: 'Hey! Wassup?',
    },
  })
}

async function startServer(server) {
  await server.start()
  console.log(`Server is running on ${server.info.uri}`)
}

function setupServer() {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  })
  return server
}

function handleUnhandledRejections() {
  process.on('unhandedRejection', (err) => {
    console.log(err)
    process.exit(1)
  })
}

async function init() {
  const server = setupServer()
  await registerHelloWorldPluginOnServer.call(this, server)
  await startServer.call(this, server)
}

handleUnhandledRejections()

init()
