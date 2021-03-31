class InputMessage {
    constructor(input) {
        this.input = input;
    }

    get isInvalidClass() { return 'form__input--is-invalid' } ;

    addIsInvalidClassToInputElement() {
        this.input.classList.add(this.isInvalidClass);
    }

    addInputMessage() {}

    removeIsInvalidClassFromInputElement() {
        this.input.classList.remove(this.isInvalidClass);
    }

    removeInputMessage() {
        this.input.nextElementSibling !== null ? this.input.nextElementSibling.remove() : null;
    }
}

export default InputMessage;