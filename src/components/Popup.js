export default class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
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
        window.removeEventListener("keydown", this._handleEscClose);
    }

    setEventListeners() {
        this._popup.addEventListener("mousedown", (event) => {
            if (
                event.target.classList.contains("popup__exit") ||
                event.target.classList.contains("popup_active")
            ) {
                this.close();
            }
        });
    }
}
