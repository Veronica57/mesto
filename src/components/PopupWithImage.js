import Popup from "./Popup";
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector(".popup__image");
        this._popupImageName = this._popup.querySelector(".popup__image-name");
    }
    open = (data) => {
        super.open();
        this._popupImage.src = data.link;
        this._popupImage.alt = data.name;
        this._popupImageName.textContent = data.name;
    };
}
