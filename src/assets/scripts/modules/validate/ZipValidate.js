import Validate from './base/Validate';

class ZipValidate extends Validate {
    constructor(zip) {
        super(zip);
    }

    validate() {
        const re = /^[0-9]{5}(-[0-9]{4})?$/;
        return (!re.test(this.itemToValidate)) ? false : true;
    }
}

export default ZipValidate;