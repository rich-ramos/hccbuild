class Form {
    constructor() {
        this.form = document.querySelector("form");
        this.formInputs = document.querySelectorAll(".form__input");
        this.events();
    }

    events() {
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();
        var isValid = this.validateFormInputs();
        if (isValid) {
            this.displayMessage("Form Submitted", "success");
            this.clearFormInputs();
        } else {
            this.displayMessage("Form not submitted", "failure");
        }
    }

    clearFormInputs() {
        this.formInputs.forEach((el) => el.value = '');
    }

    validateFormInputs() {
        var isValid = true;
        for (var element of this.formInputs.values()) {
            if (element.value === '') {
                isValid = false;
            }
        }
        return isValid;
    }

    displayMessage(message, className) {
        this.form.insertAdjacentHTML('beforebegin', 
        `
            <div class="form-message form-message--${className}">
                <h2>${message}</h2>
            </div>
        `);

        this.removeMessageAfterThreeSeconds(".form-message");
    }

    removeMessageAfterThreeSeconds(selector) {
        setTimeout(() => {
            document.querySelector(selector).remove();
        }, 3000);
    }
}

export default Form;