import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";
import Modal from "./modules/Modal";
import Filter from "./modules/Filter";
import RevealOnScroll from "./modules/RevealOnScroll"
import Form from "./modules/Form";
// import Mail from "./modules/Mail";

new RevealOnScroll(document.querySelectorAll(".service-item"), 75);
var mobileMenu = new MobileMenu();
new Modal();
new Filter();
// new Mail();
new Form();


if (module.hot) {
    module.hot.accept();
}