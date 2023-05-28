export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupClosingButton = this._popup.querySelector(".popup__exit");
    }
    _handleEscClose = (event) => {
        if (event.key === "Escape") {
            this.close();
        }
    };
    open() {
        this._popup.classList.add("popup_active");
        window.addEventListener("keydown", this._handleEscClose);
    }
    close() {
        this._popup.classList.remove("popup_active");
        window.addEventListener("keydown", this._handleEscClose);
    }
    setEventListeners() {
        this._popup.addEventListener("click", (event) => {
            if (event.target !== event.currentTarget) {
                this.close();
            }
        });
        this._popupClosingButton.addEventListener("click", () => this.close());
    }
}
