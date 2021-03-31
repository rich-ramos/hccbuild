import Mail from './Mail';
import ValidateFactory from './validate/factory/ValidateFactory';
import InputMessageFactory from './input-message/factory/InputMessageFactory';

class Form {
    constructor() {
        this.form = document.querySelector("form");
        this.formInputs = Array.from(document.querySelectorAll(".form__input"));
        this.mail = new Mail();
        this.events();
    }

    events() {
        this.formInputs.forEach((input) => input.addEventListener('blur', (e) => this.handleBlur(e)));
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        let isValid = this.validateThatAllInputsAreNotEmpty();
        let isFormatted = this.validateThatAllInputsAreFormattedCorrectly();
        if (isValid && isFormatted) {
            e.preventDefault();
            this.processForm(e.target);
            this.displaySubmitStatusForFormMessage(e.target, "Form Submitted", "success");
            this.removeParentElementAfterThreeSeconds(".form-message__header");
            this.clearFormInputs();
        } else {
            e.preventDefault();
            this.displaySubmitStatusForFormMessage(e.target, "Please fill out all avaiable fields", "error");
            this.removeParentElementAfterThreeSeconds(".form-message__header");
        }
    }

    processForm(form) {
        const formData = new FormData(form);
        const urlFormattedFormData = new URLSearchParams(formData).toString();
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: urlFormattedFormData
        })
        .then(() => this.mail.sendMail(formData))
        .catch((error) => console.log(error));
    }

    handleBlur(e) {
        const validator = ValidateFactory.createValidate(e.target.getAttribute('data-validateType'), e.target);
        const isValid = validator.validate();
        const inputMessage = InputMessageFactory.createInputMessage(e.target.getAttribute('data-inputMessageType'), e.target);
        if (!isValid) {
            inputMessage.addIsInvalidClassToInputElement();
            inputMessage.addInputMessage();
            e.target.isValidated = false;
        } else {
            inputMessage.removeIsInvalidClassFromInputElement();
            inputMessage.removeInputMessage();
            e.target.isValidated = true;
        }
    }

    handleServiceValidation(e) {
        let isValid = this.validateServiceInput(e.target);
        if (!isValid) {
            this.addClassToElement(e.target, "form__input--is-valid");
            this.displayInputMessage(`${e.target.previousElementSibling.innerText} must have at least one selection`, e.target);
            e.target.isValidated = false;
        } else {
            this.removeClassFromElement(e.target, "form__input--is-invalid");
            this.removeSiblingElement(e.target);
            e.target.isValidated = true;
        }
    }

    validateThatAllInputsAreNotEmpty() {
        let isValid = true;
        for (let element of this.formInputs.values()) {
            if (element.value === '') {
                isValid = false;
            }
        }
        return isValid;
    }

    validateThatAllInputsAreFormattedCorrectly() {
        let isFormatted = true;
        this.formInputs.forEach((el) => {
            if (el.isValidated !== true) {
                isFormatted = false;
            }
        });
        return isFormatted;
    }

    clearFormInputs() {
        this.formInputs.forEach((el) => el.value = '');
    }

    displaySubmitStatusForFormMessage(form , message, className) {
        if (!(document.body.contains(form.previousElementSibling))) {
            this.form.insertAdjacentHTML('beforebegin',
            `
                <div class="form-message form-message--${className}">
                    <h2 class="form-message__header">${message}</h2>
                </div>
            `);
        }
    }

    removeParentElementAfterThreeSeconds(classSelector) {
        setTimeout(() => {
            document.querySelector(classSelector).parentElement.remove();
        }, 3000);
    }
}

export default Form;