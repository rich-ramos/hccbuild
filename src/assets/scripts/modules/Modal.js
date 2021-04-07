class Modal {
    constructor() {
        this.injectHtml();
        this.modal = document.querySelector('.modal');
        this.modelImage = document.querySelector('.modal__image');
        this.closeIcon = document.querySelector('.modal__icon-close');
        this.caption = document.querySelector('.modal__caption');
        this.events();
    }

    events() {
        this.closeIcon.addEventListener('click', () => this.closeTheModal());
        document.addEventListener('keyup', e => {
            this.keyPressHandler(e);
        });
    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeTheModal();
        }
    }

    openTheModal(element) {
        this.modal.classList.add('modal--is-visible');
        this.modelImage.classList.add('modal--zoom');
        this.caption.classList.add('modal--zoom');

        this.modelImage.src = element.src;
        this.caption.innerHTML = element.alt; 
    }

    closeTheModal() {
        this.modal.classList.remove('modal--is-visible');
    }

    injectHtml() {
        document.body.insertAdjacentHTML('beforeend', 
        `
            <div class="modal">
                <span class="modal__icon-close">&times;</span>
                <img class="modal__image">
                <div class="modal__caption"></div>
            </div>
        `)
    }
}

export default Modal;