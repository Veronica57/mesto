export default class Section {
    constructor(renderer, containerSelector) {
        // this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems(cardsData) {
        cardsData.forEach((element) => {
            this._renderer(element);
        });
    }

    addItem(element) {
        this._container.prepend(element);
    }
}
