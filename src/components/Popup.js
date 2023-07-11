export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupClosingButton = this._popup.querySelector(".popup__exit");
        this._form = this._popup.querySelector(".popup__form");
    }
    _handleEscClose = (event) => {
        if (event.key === "Escape") {
            this.close();
        }
    };

    _handleCloseButton = () => {
        this.close();
    };

    _closePopupOverlay = (event) => {
        if (event.target === event.currentTarget) {
            this.close();
        }
    };

    open() {
        this._popup.classList.add("popup_active");
        document.addEventListener("keydown", this._handleEscClose);
    }
    close() {
        this._popup.classList.remove("popup_active");
        document.removeEventListener("keydown", this._handleEscClose);
    }

    setEventListeners() {
        this._popup.addEventListener("click", this._closePopupOverlay);
        this._popupClosingButton.addEventListener(
            "click",
            this._handleCloseButton
        );
    }
}
