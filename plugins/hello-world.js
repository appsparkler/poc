function registrationFunction(server, options) {
  server.route({
    method: 'GET',
    path: '/',
    handler: () => options.message,
  })
}

exports.plugin = {
  name: 'HelloWorldPlugin',
  version: '1.0.0',
  register: registrationFunction,
}
