export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems() {
        this._renderedItems.forEach(({ name, link }) => {
            this._renderer({ name, link });
        });
    }

    addItem(DomElement) {
        this._container.prepend(DomElement);
    }
}
