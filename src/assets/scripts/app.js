import "../styles/styles.css";
import ModalMenu from './modules/ModalMenu';
import Modal from "./modules/Modal";
import Filter from "./modules/Filter";
import RevealOnScroll from "./modules/RevealOnScroll"
import Form from "./modules/Form";

new ModalMenu();
new RevealOnScroll(document.querySelectorAll(".service-item"), 75);
new Modal();
new Filter();
new Form();


if (module.hot) {
    module.hot.accept();
}