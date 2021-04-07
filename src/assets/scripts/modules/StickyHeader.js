import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class StickyHeader {
    constructor() {
        this.siteHeaderContainer = document.querySelector('.site-header-container');
        this.siteHeaderLogo = this.siteHeaderContainer.querySelector('.site-header__logo');
        this.pageSections = Array.from(document.body.children).filter((child) => { return child.hasAttribute('data-matching-link');});
        this.browserHeight = window.innerHeight;
        this.previousScrollY = window.scrollY;
        this.events();
    }

    events() {
        window.addEventListener('scroll', throttle(() => this.runOnScroll(), 200));
        window.addEventListener("resize", debounce(() => {
            this.browserHeight = window.innerHeight;
        }, 333));
    }

    runOnScroll() {
        this.determineScrollDirection();
        (window.scrollY > 60) 
        ? (this.siteHeaderContainer.classList.add('site-header-container--mini-nav'),
            this.siteHeaderLogo.classList.add('site-header__logo--mini-nav-enabled')) 
        : (this.siteHeaderContainer.classList.remove('site-header-container--mini-nav'), 
            this.siteHeaderLogo.classList.remove('site-header__logo--mini-nav-enabled'));
        
        this.pageSections.forEach((el) => this.calcSection(el));
    }

    determineScrollDirection() {
        (window.scrollY > this.previousScrollY) 
        ? this.scrollDirection = 'down'
        : this.scrollDirection = 'up';
        this.previousScrollY = window.scrollY;
    }

    calcSection(element) {
        if (window.scrollY + this.browserHeight > element.offsetTop 
            && window.scrollY < element.offsetTop + element.offsetHeight) {
            let scrollPercent = element.getBoundingClientRect().y / this.browserHeight * 100;
            if (scrollPercent < 18 && scrollPercent > -0.1 && this.scrollDirection == 'down' 
                || scrollPercent < 33 && this.scrollDirection == 'up') {
                let matchingLink = element.getAttribute('data-matching-link');
                document.querySelectorAll(`.primary-nav a:not(${matchingLink})`)
                    .forEach((el) => el.classList.remove('is-current-link'));
                document.querySelector(matchingLink).classList.add('is-current-link');
            }
        }
    }
}

export default StickyHeader;