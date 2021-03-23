class Form {
    constructor() {
        this.form = document.querySelector("form");
        this.formInputs = Array.from(document.querySelectorAll(".form__input"));
        this.firstName = document.getElementById("firstName");
        this.lastName = document.getElementById("lastName");
        this.phone = document.getElementById("phone");
        this.email = document.getElementById("email");
        this.service = document.getElementById("service");
        this.zip = document.getElementById("zip");
        this.message = document.getElementById("message");
        this.events();
    }

    events() {
        this.firstName.addEventListener("blur", (e) => this.handleNameValidation(e));
        this.lastName.addEventListener("blur", (e) => this.handleNameValidation(e));
        this.phone.addEventListener("blur", (e) => this.handlePhoneValidation(e));
        this.email.addEventListener("blur", (e) => this.handleEmailValidation(e));
        this.service.addEventListener("blur", (e) => this.handleServiceValidation(e));
        this.zip.addEventListener("blur", (e) => this.handleZipValidation(e));
        this.message.addEventListener("blur", (e) => this.handleMessageValidation(e));
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        let isValid = this.validateThatAllInputsAreNotEmpty();
        let isFormatted = this.validateThatAllInputsAreFormattedCorrectly();
        if (isValid && isFormatted) {
            this.submitFormAjax();
            // this.displaySubmitStatusForFormMessage(e.target, "Form Submitted", "success");
            // this.removeParentElementAfterThreeSeconds(".form-message__header");
            // this.clearFormInputs();
        }
        // else {
        //     this.displaySubmitStatusForFormMessage(e.target, "Please fill out all avaiable fields", "error");
        //     this.removeParentElementAfterThreeSeconds(".form-message__header");
        //     e.preventDefault();
        // }
    }

    submitFormAjax() {
        let myForm = document.querySelector(".form");
        let formData = new FormData(myForm);
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        }).then(() => this.displaySuccessfulMessage()).catch((error) => alert(error));
    }

    handleNameValidation(e) {
        let isValid = this.validateNameInput(e.target);
        if (!isValid) {
            this.addClassToElement(e.target, "form__input--is-invalid");
            this.displayInputMessage(`${e.target.previousElementSibling.innerText} must be between 2 and 10 characters`, e.target);
            e.target.isValidated = false;
        } else {
            this.removeClassFromElement(e.target, "form__input--is-invalid");
            this.removeSiblingElement(e.target);
            e.target.isValidated = true;
        }
    }

    handlePhoneValidation(e) {
        let isValid = this.validatePhoneInput(e.target);
        if (!isValid) {
            this.addClassToElement(e.target, "form__input--is-invalid");
            this.displayInputMessage(`${e.target.previousElementSibling.innerText} must be in a valid phone number format`, e.target);
            e.target.isValidated = false;
        } else {
            this.removeClassFromElement(e.target, "form__input--is-invalid");
            this.removeSiblingElement(e.target);
            e.target.isValidated = true;
        }
    }

    handleEmailValidation(e) {
        let isValid = this.validateEmailInput(e.target);
        if (!isValid) {
            this.addClassToElement(e.target, "form__input--is-invalid");
            this.displayInputMessage(`${e.target.previousElementSibling.innerText} must be in a valid email format`, e.target);
            e.target.isValidated = false;
        } else {
            this.removeClassFromElement(e.target, "form__input--is-invalid");
            this.removeSiblingElement(e.target);
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

    handleZipValidation(e) {
        let isValid = this.validateZipInput(e.target);
        if (!isValid) {
            this.addClassToElement(e.target, "form__input--is-valid");
            this.displayInputMessage(`${e.target.previousElementSibling.innerText} must be at least 5 numbers`, e.target);
            e.target.isValidated = false;
        } else {
            this.removeClassFromElement(e.target, "form__input--is-invalid");
            this.removeSiblingElement(e.target);
            e.target.isValidated = true;
        }
    }

    handleMessageValidation(e) {
        let isValid = this.validateMessageInput(e.target);
        if (!isValid) {
            this.addClassToElement(e.target, "form__input--is-valid");
            this.displayInputMessage(`${e.target.previousElementSibling.innerText} must not be empty`, e.target);
            e.target.isValidated = false;
        } else {
            this.removeClassFromElement(e.target, "form__input--is-invalid");
            this.removeSiblingElement(e.target);
            e.target.isValidated = true;
        }
    }
    
    validateNameInput(element) {
        const re = /^[a-zA-Z]{2,10}$/;
        return this.elementValueMatchesRegExp(element, re);
    }

    validatePhoneInput(element) {
        const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
        return this.elementValueMatchesRegExp(element, re);
    }

    validateEmailInput(element) {
        const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        return this.elementValueMatchesRegExp(element, re);
    }

    validateServiceInput(element) {
        return element.selectedIndex !== 0 ? true : false;
    }

    validateZipInput(element) {
        const re = /^[0-9]{5}(-[0-9]{4})?$/;
        return this.elementValueMatchesRegExp(element, re);
    }

    validateMessageInput(element) {
        return element.value === '' ? false : true;
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


    addClassToElement(element, className) {
        element.classList.add(className);
    }

    removeClassFromElement(element, className) {
        element.classList.remove(className);
    }

    displayInputMessage(message, element) {
        if(!(document.body.contains(element.nextElementSibling))) {
            element.insertAdjacentHTML("afterend",
            `
                <div class="form-message">
                    <p class="form-message__input form-message__input--error">${message}</p>
                </div>
            `);
        }
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

    removeSiblingElement(element) {
        element.nextElementSibling !== null ? element.nextElementSibling.remove() : null;
    }

    removeParentElementAfterThreeSeconds(classSelector) {
        setTimeout(() => {
            document.querySelector(classSelector).parentElement.remove();
        }, 3000);
    }

    elementValueMatchesRegExp(element, regExp) {
        let isValid = (!regExp.test(element.value)) ? false : true;
        return isValid;
    }
}

export default Form;