import InputMessage from './base/InputMessage';

class ServiceInputMessage extends InputMessage {
    constructor(serviceInput) {
        super(serviceInput);
    }

    addInputMessage() {
        if(!(document.body.contains(this.input.nextElementSibling))) {
            this.input.insertAdjacentHTML("afterend",
            `
                <div class="form-message">
                    <p class="form-message__input form-message__input--error">${this.input.previousElementSibling.innerText} must have at least one selection</p>
                </div>
            `);
        }
    }
}

export default ServiceInputMessage;