import InputMessage from './base/InputMessage';

class ZipInputMessage extends InputMessage {
    constructor(zipInput) {
        super(zipInput);
    }

    addInputMessage() {
        if(!(document.body.contains(this.input.nextElementSibling))) {
            this.input.insertAdjacentHTML("afterend",
            `
                <div class="form-message">
                    <p class="form-message__input form-message__input--error">${this.input.previousElementSibling.innerText} must be 5 digit ZIP or Postal Code</p>
                </div>
            `);
        }
    }
}

export default ZipInputMessage;