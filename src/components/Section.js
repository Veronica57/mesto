// export default class Section {
//     constructor({ renderer }, containerSelector) {
//         this._renderer = renderer;
//         this._container = document.querySelector(containerSelector);
//     }

//     renderItems(items) {
//         items.forEach((element) => {
//             this._renderer(element);
//         });
//     }

//     addItem(item) {
//         this._container.prepend(item);
//     }
// }

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

    addItem(DomElement) {
        this._container.prepend(DomElement);
    }
}
