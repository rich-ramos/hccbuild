import InputMessage from './base/InputMessage';

class NameInputMessage extends InputMessage {
    constructor(nameInput) {
        super(nameInput);
    }

    addInputMessage() {
        if(!(document.body.contains(this.input.nextElementSibling))) {
            this.input.insertAdjacentHTML("afterend",
            `
                <div class="form-message">
                    <p class="form-message__input form-message__input--error">${this.input.previousElementSibling.innerText} must be between 2 and 10 characters</p>
                </div>
            `);
        }
    }
}

export default NameInputMessage;