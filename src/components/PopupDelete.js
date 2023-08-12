import Popup from "./Popup.js";

export default class PopupDelete extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit.bind(this);
        this._submitButton = this._form.querySelector(".popup__button");
        this._submitText = this._submitButton.textContent;
    }

    setSubmitText() {
        this._submitButton.textContent = this._submitText;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (event) => {
            event.preventDefault();
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
