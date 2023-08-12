import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit.bind(this);
        this._form = this._popup.querySelector(".popup__form");
        this._inputList = this._form.querySelectorAll(".popup__input");
        this._submitButton = this._form.querySelector(".popup__button");
        this._submitText = this._submitButton.textContent;
    }

    setInputsValue(formValues) {
        this._inputList.forEach((input) => {
            input.value = formValues[input.name];
        });
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (event) => {
            event.preventDefault();
            this._submitButton.textContent = `${this._submitButton.textContent}...`;
            this._handleFormSubmit(this._getInputsValue());
        });
    }

    _getInputsValue() {
        this._values = {};
        this._inputList.forEach((input) => {
            this._values[input.name] = input.value;
        });
        return this._values;
    }

    setSubmitText() {
        this._submitButton.textContent = this._submitText;
    }

    close() {
        super.close();
        this._form.reset();
    }
}
