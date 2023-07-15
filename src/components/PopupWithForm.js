import Popup from "./Popup";
export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._form = this._popup.querySelector(".popup__form");
        this._inputValues = this._popup.querySelectorAll(".popup__input");
        this._handleFormSubmit = handleFormSubmit.bind(this);
    }

    _getInputValues() {
        this._values = {};
        this._inputValues.forEach((input) => {
            this._values[input.name] = input.value;
        });
        return this._values;
    }

    setInputValues(data) {
        this._inputValues.forEach((input) => {
            input.value = data[input.name];
        });
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (event) => {
            event.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        });
    }

    close() {
        this._form.reset();
        super.close();
    }
}
