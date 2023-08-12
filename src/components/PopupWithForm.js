import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit.bind(this);
        this._form = this._popup.querySelector(".popup__form");
        this._inputList = this._form.querySelectorAll(".popup__input");
        this._submitButton = this._form.querySelector(".popup__button");
        this._textSubmit = this._submitButton.textContent;
    }

    _getInputValues() {
        this._values = {};
        this._inputList.forEach((input) => {
            this._values[input.name] = input.value;
        });
        return this._values;
    }

    setInputValues(data) {
        this._inputList.forEach((input) => {
            input.value = data[input.name];
        });
    }

    setSubmitText() {
        this._submitButton.textContent = this._textSubmit;
    }

    close() {
        super.close();
        this._form.reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._submitButton.textContent = `${this._submitButton.textContent}...`;
            this._handleFormSubmit(this._getInputValues());
        });
        this.close();
    }
}
