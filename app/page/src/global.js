import ServiceManager from './ServiceManager.js'
var app = {
  serviceManager: new ServiceManager()
};
Object.freeze(app);

var builtinServices = ['whatsapp']
for (var service in builtinServices) {
  name = builtinServices[service];
  app.serviceManager.addService(name, require(`./services/${name}`));
}

window.app = app;
