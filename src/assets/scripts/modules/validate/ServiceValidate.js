import Validate from './base/Validate';

class ServiceValidate extends Validate {
    constructor(service) {
        super(service);
    }

    validate() {
        return this.itemToValidate.selectedIndex !== 0 ? true : false;
    }
}

export default ServiceValidate;