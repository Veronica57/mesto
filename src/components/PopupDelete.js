import Popup from "./Popup";

export default class PopupDelete extends Popup {
    constructor(popupSelector, submit) {
        super(popupSelector);
        this._submit = submit;
        this._submitButton = this._form.querySelector(".popup__button");
        this._submitButtonText = this._submitButton.textContent;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (event) => {
            event.preventDefault();
            this._submitButton.textContent = `${this._submitButton.textContent}...`;
            this._submit({ card: this._element, cardId: this._cardId });
        });
    }

    setSubmitButtonText() {
        this._submitButton.textContent = this._submitButtonText;
    }

    open = ({ card, cardId }) => {
        super.open();
        this._card = card;
        this._cardId = cardId;
    };
}
