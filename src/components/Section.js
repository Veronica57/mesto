export default class Section {
    constructor(renderer, containerSelector) {
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
    }

    renderItems(dataCard) {
        dataCard.forEach((element) => {
            this._renderer(element);
        });
    }

<<<<<<< HEAD
    addItem(element) {
        this._container.prepend(element);
=======
    addItem(item) {
        this._container.prepend(item);
>>>>>>> updateBranch
    }
}
