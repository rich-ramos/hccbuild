import Validate from './base/Validate';

class PhoneValidate extends Validate {
    constructor(phoneNumber) {
        super(phoneNumber);
    }

    validate() {
        const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
        return (!re.test(this.itemToValidate)) ? false : true;
    }
}

export default PhoneValidate;