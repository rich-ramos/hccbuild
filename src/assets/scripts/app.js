import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu.js";
import Modal from "./modules/Modal.js";

var mobileMenu = new MobileMenu();
new Modal();


if (module.hot) {
    module.hot.accept();
}