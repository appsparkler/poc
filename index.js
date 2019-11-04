const Hapi = require('@hapi/hapi')

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  })
  server.route({
    method: 'GET',
    path: '/',
    handler: () => 'Hello World',
  })
  await server.start()
  console.log(`Server is running on ${server.info.uri}`)
}

process.on('unhandedRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
