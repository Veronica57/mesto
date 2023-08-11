import Popup from "./Popup.js";

export default class PopupDelete extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit.bind(this);
        this._form = this._popup.querySelector(".popup__form");
        this._submitButton = this._form.querySelector(".popup__save");
        // this._textButton = this._submitButton.textContent;
    }

    setTextButton() {
        this._submitButton.textContent = this._textButton;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._submitButton.textContent = `${this._submitButton.textContent}...`;

            this._handleFormSubmit({ card: this._card, cardId: this._cardId });
        });
    }

    open = ({ card, cardId }) => {
        super.open();
        this._card = card;
        this._cardId = cardId;
    };
}
