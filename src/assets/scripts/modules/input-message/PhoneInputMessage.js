import InputMessage from './base/InputMessage';

class PhoneInputMessage extends InputMessage {
    constructor(nameInput) {
        super(nameInput);
    }

    addInputMessage() {
        if(!(document.body.contains(this.input.nextElementSibling))) {
            this.input.insertAdjacentHTML("afterend",
            `
                <div class="form-message">
                    <p class="form-message__input form-message__input--error">${this.input.previousElementSibling.innerText} must be in the format 555-555-5555 or (555)555-5555</p>
                </div>
            `);
        }
    }
}

export default PhoneInputMessage;