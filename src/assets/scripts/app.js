import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu.js";
import Modal from "./modules/Modal.js";
import Filter from "./modules/Filter.js";

var mobileMenu = new MobileMenu();
new Modal();
new Filter();


if (module.hot) {
    module.hot.accept();
}