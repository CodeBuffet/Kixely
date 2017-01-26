class ServiceManager {
  constructor(args) {
    this.availableServices = {}
  }

  addService(name, service) {
    this.availableServices[name] = service
  }
}

module.exports = ServiceManager
