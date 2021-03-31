import Validate from './base/Validate'

class NameValidate extends Validate {
    constructor(name) {
        super(name);
    }

    validate() {
        const re = /^[a-zA-Z]{2,10}$/;
        return (!re.test(this.itemToValidate)) ? false : true;
    }
}

export default NameValidate;