import Popup from "./Popup";
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imagelink = this._popup.querySelector(".popup__image");
        this._imagename = this._popup.querySelector(".popup__image-name");
    }
    open = (data) => {
        super.open();
        this._imagelink.src = data.link;
        this._imagename.alt = data.name;
        this._imagename.textContent = data.name;
    };
}
