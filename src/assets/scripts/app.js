import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu.js";

var mobileMenu = new MobileMenu();

if (module.hot) {
    module.hot.accept();
}