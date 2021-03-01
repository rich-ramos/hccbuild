class Modal {
    constructor() {
        this.modal = document.getElementById("modal");
        this.image = document.getElementById("myImg");
        this.modalImg = document.getElementById("img01");
        this.caption = document.querySelector(".modal__caption");
        this.close = document.querySelector(".modal__close");
        this.events();
    }

    events() {
        this.image.addEventListener('click', () => this.DisplayModal());
        this.close.addEventListener('click', () => this.CloseModal());
    }

    DisplayModal() {
        this.modal.style.display = "block";
        this.modalImg.src = this.image.src;
        this.caption.innerHTML = this.image.alt;
    }

    CloseModal() {
        this.modal.style.display = "none";
    }
}

export default Modal;