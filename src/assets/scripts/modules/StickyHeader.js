import throttle from 'lodash/throttle';

class StickHeader {
    constructor() {
        this.siteHeaderContainer = document.querySelector('.site-header-container');
        this.siteHeaderLogo = this.siteHeaderContainer.querySelector('.site-header__logo');
        this.events();
    }

    events() {
        window.addEventListener('scroll', throttle(() => this.runOnScroll(), 200));
    }

    runOnScroll() {
        (window.scrollY > 60) 
        ? (this.siteHeaderContainer.classList.add('site-header-container--mini-nav'),
            this.siteHeaderLogo.classList.add('site-header__logo--mini-nav-enabled')) 
        : (this.siteHeaderContainer.classList.remove('site-header-container--mini-nav'), 
            this.siteHeaderLogo.classList.remove('site-header__logo--mini-nav-enabled'));
    }
}

export default StickHeader;