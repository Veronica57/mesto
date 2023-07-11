export default class Section {
    constructor(renderer, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderedItems(data) {
        data.forEach((item) => {
            this._renderer(item);
        });
    }

    addItem(DomElement) {
        this._container.prepend(DomElement);
    }
}
