function registrationFunction(server, options) {
  const routeConfig = {
    method: 'GET',
    path: '/',
    handler: () => options.message || 'Hello World',
  }
  server.route(routeConfig)
}

exports.plugin = {
  name: 'HelloWorldPlugin',
  version: '1.0.0',
  register: registrationFunction,
}
