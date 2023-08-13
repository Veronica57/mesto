import Popup from "./Popup.js";

export default class PopupDelete extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit.bind(this);
        this._form = this._popup.querySelector(".popup__form");
    }

    open = ({ card, cardId }) => {
        super.open();
        this._card = card;
        this._cardId = cardId;
    };

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (event) => {
            event.preventDefault();
            this._handleFormSubmit({ card: this._card, cardId: this._cardId });
        });
    }
}
