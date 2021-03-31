import Validate from './base/Validate';

class EmailValidate extends Validate {
    constructor(email) {
        super(email);
    }

    validate() {
        const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        return (!re.test(this.itemToValidate)) ? false: true;
    }
}

export default EmailValidate;