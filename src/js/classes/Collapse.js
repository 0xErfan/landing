class Collapse {

    collapseWrapper;
    init_height;
    init_is_open;

    constructor(elem, init_height = 40, init_is_open = false) {
        this.collapseWrapper = elem
        this.init_height = Number(init_height)
        this.init_is_open = init_is_open
    }

    initialize() {

        if (!this.collapseWrapper) throw new Error('Passed collapseWrapper element not found buddy.');

        const toggle_collapse_btn = this.collapseWrapper?.querySelector('.toggle_collapse');
        const max_collapse_height = this.collapseWrapper.clientHeight;
        const collapse_arrow_toggle = this.collapseWrapper?.querySelector('.arrow-toggler')

        const collapse_wrapper_styles = {
            'max-height': `${this.init_height}px`,
            'transition': 'all 0.3s ease',
            'overflow': 'hidden',
        }

        collapse_arrow_toggle && collapse_arrow_toggle.style.setProperty('transition', 'all 0.3s ease')

        Object.entries(collapse_wrapper_styles).forEach(([key, value]) => {
            this.collapseWrapper.style.setProperty(key, value, 'important')
        })

        toggle_collapse_btn.onclick = () => {

            const isOpen = this.collapseWrapper.className.includes('open')

            collapse_arrow_toggle && collapse_arrow_toggle.style.setProperty('rotate', isOpen ? '0deg' : '180deg', 'important')
            this.collapseWrapper.style.setProperty('max-height', isOpen ? `${this.init_height}px` : `${max_collapse_height}px`)
            this.collapseWrapper.classList.toggle('open')

        }

        if (this.init_is_open) toggle_collapse_btn?.click()

        return this;
    }

}

export default Collapse;