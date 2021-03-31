import InputMessage from './base/InputMessage';

class EmailInputMessage extends InputMessage {
    constructor(emailInput) {
        super(emailInput);
    }

    addInputMessage() {
        if(!(document.body.contains(this.input.nextElementSibling))) {
            this.input.insertAdjacentHTML("afterend",
            `
                <div class="form-message">
                    <p class="form-message__input form-message__input--error">${this.input.previousElementSibling.innerText} must be in a valid email format</p>
                </div>
            `);
        }
    }
}

export default EmailInputMessage;