import NameValidate from '../NameValidate';
import PhoneValidate from '../PhoneValidate';
import EmailValidate from '../EmailValidate';
import ServiceValidate from '../ServiceValidate';
import ZipValidate from '../ZipValidate';
import MessageValidate from '../MessageValidate';

class ValidateFactory {
    get validateTypes() {
        return { 
            NameValidate,
            PhoneValidate,
            EmailValidate, 
            ServiceValidate, 
            ZipValidate, 
            MessageValidate 
        };
    }
    static createValidate(type, target) {
        let validateBase = this.prototype.validateTypes[type];

        return (validateBase === undefined) 
            ? null
            : (type === "ServiceValidate") 
            ? new validateBase.prototype.constructor(target) 
            : new validateBase.prototype.constructor(target.value); 
    }
}

export default ValidateFactory;