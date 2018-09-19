/**
 * Provide a way to handle a stateful singleton using the service locator pattern
 */
class ServiceLocator {
  constructor() {
    this.reset();
  }
  registerInstance(key, instance){
    this.registry.set(key, instance);
  }
  getInstance(key){
    return this.registry.get(key);
  }
  removeInstance(key){
    return this.registry.delete(key);
  }
  reset(){
    this.registry = new Map();
  }
};
export const locator = new ServiceLocator();
export default ServiceLocator;
