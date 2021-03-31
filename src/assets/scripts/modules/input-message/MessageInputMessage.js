import InputMessage from './base/InputMessage';

class MessageInputMessage extends InputMessage {
    constructor(messageInput) {
        super(messageInput);
    }

    addInputMessage() {
        if(!(document.body.contains(this.input.nextElementSibling))) {
            this.input.insertAdjacentHTML("afterend",
            `
                <div class="form-message">
                    <p class="form-message__input form-message__input--error">${this.input.previousElementSibling.innerText} must not be empty</p>
                </div>
            `);
        }
    }
}

export default MessageInputMessage;