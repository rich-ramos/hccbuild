import Validate from './base/Validate';

class MessageValidate extends Validate {
    constructor(message) {
        super(message);
    }

    validate() {
        return this.itemToValidate === '' ? false : true;
    }
}

export default MessageValidate;