class ModalMenu {
    constructor() {
        this.injectHtml();
        this.modal = document.querySelector('.modal-menu');
        this.modalMenuLinks = this.modal.querySelectorAll('a');
        this.closeIcon = document.querySelector('.modal-menu__close');
        this.menuIcon = document.querySelector('.site-header__menu-icon');
        this.events();
    }

    events() {
        this.menuIcon.addEventListener('click', () => this.openTheModal());
        this.closeIcon.addEventListener('click', () => this.closeTheModal());
        this.modalMenuLinks.forEach((link) => link.addEventListener('click', () => this.closeTheModal()));
        document.addEventListener('keyup', (e) => this.keyPressHandler(e));
    }

    openTheModal() {
        this.modal.classList.add('modal-menu--is-visible');
        this.menuIcon.classList.add('site-header__menu-icon--close-x');
    }

    closeTheModal() {
        this.modal.classList.remove('modal-menu--is-visible');
        this.menuIcon.classList.remove('site-header__menu-icon--close-x');
    }

    keyPressHandler(e) {
        (e.keyCode == 27) ? this.closeTheModal() : null;
    }

    injectHtml() {
        document.body.insertAdjacentHTML('beforeend',
         `
        <div class="modal-menu">
            <div class="modal-menu__content">
                <nav class="modal-menu-nav">
                    <ul class="modal-menu-nav__list">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#projects">Our Work</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </nav>
                <div class="modal-menu__close">X</div>
            </div>
        </div>
        `);
    }
}

export default ModalMenu;