export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems() {
        this._renderedItems.forEach((element) => {
            this._renderer(element);
        });
    }

    addItem(DomElement) {
        this._container.prepend(DomElement);
    }
}
