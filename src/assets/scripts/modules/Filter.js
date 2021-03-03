class Filter {
    constructor() {
        this.projectItems = document.querySelectorAll('.project-item');
        this.filterItems = document.querySelectorAll('.filter__item');
        this.events();
    }

    events() {
        this.filterItems.forEach(el => el.addEventListener('click', () => this.toggleFilter(el)));
    }

    toggleFilter(element) {
        this.toggleActiveClass(element);
        var filter = element.getAttribute('data-filter');
        this.projectItems.forEach(el => {
            var matchingLink = el.getAttribute('data-filter');
            filter == 'All' || filter == matchingLink ? 
                (el.classList.add('project-item--show'), el.classList.remove('project-item--hide')) : 
                (el.classList.add('project-item--hide'), el.classList.remove('project-item--show'));
        });
    }

    toggleActiveClass(active) {
        this.filterItems.forEach(el => {
            el.classList.remove('filter__item--active');
            el.classList.add('filter__item--light');
        });
        active.classList.add('filter__item--active');
        active.classList.remove('filter__item--light');
    }
}

export default Filter;