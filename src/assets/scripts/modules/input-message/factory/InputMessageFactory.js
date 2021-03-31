import NameInputMessage from '../NameInputMessage';
import PhoneInputMessage from '../PhoneInputMessage';
import EmailInputMessage from '../EmailInputMessage';
import ServiceInputMessage from '../ServiceInputMessage';
import ZipInputMessage from '../ZipInputMessage';
import MessageInputMessage from '../MessageInputMessage';

class InputMessageFactory {
    get inputMessageTypes() {
        return { 
            NameInputMessage, 
            PhoneInputMessage, 
            EmailInputMessage, 
            ServiceInputMessage,
            ZipInputMessage,
            MessageInputMessage
         };
    }
    static createInputMessage(type, input) {
        let inputMessage = this.prototype.inputMessageTypes[type];
        if (inputMessage === undefined)
            return null;

        return new inputMessage.prototype.constructor(input);
    }
}

export default InputMessageFactory;