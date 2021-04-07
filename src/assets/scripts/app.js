import "../styles/styles.css";
import Filter from "./modules/Filter";
import StickyHeader from "./modules/StickyHeader"
import RevealOnScroll from "./modules/RevealOnScroll"
import Form from "./modules/Form";

new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".service-item"), 75);
new Filter();
new Form();
let modalMenu;
let modal;

document.querySelector('.site-header__menu-icon').addEventListener('click', () => {
    if (typeof modalMenu == "undefined") {
        import(/* webpackChunkName: "modalMenu" */ './modules/ModalMenu')
            .then((modalMenuObject) => { 
                modalMenu = new modalMenuObject.default();
                setTimeout(() => modalMenu.openTheModal(), 200);
            })
            .catch((error) => console.log(error));
    } else {
        modalMenu.openTheModal();
    }
});

document.querySelectorAll('.project-item__image').forEach((image) => {
    image.addEventListener('click', (e) => {
        if (typeof modal == "undefined") {
            import(/* webpackChunkName: "modal" */ './modules/Modal')
                .then((modalObject) => {
                    modal = new modalObject.default();
                    setTimeout(() => modal.openTheModal(e.target), 200);
                })
                .catch((error) => console.log(error));
        } else {
            modal.openTheModal(e.target);
        }
    })
})

if (module.hot) {
    module.hot.accept();
}