import Popup from "./Popup";
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = document.querySelector(".popup__image");
        this._popupImageName = document.querySelector(".popup__image-name");
    }
    open(name, link) {
        super.open();
        popupImage.src = link;
        popupImage.alt = name;
        popupImageName.textContent = name;
    }
}
