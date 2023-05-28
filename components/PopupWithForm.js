import Popup from "./Popup";
export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector(".popup__form");
        this._inputs = this._form.querySelectorAll(".popup__input");
    }

    _getInputValues() {
        this._inputValues = {};
        this._inputs.forEach((input) => {
            this._values[input.name] = input.value;
        });
        return this._inputValues;
    }

    setInputValues(data) {
        this._inputs.forEach((input) => {
            input.value = data[input.name];
        });
    }

    close() {
        super.close();
        this._form.reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (event) => {
            event.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close;
        });
    }
}
