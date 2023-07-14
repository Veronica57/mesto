import Popup from "./Popup";
export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit, form) {
        super(popupSelector);
        this._form = form;
        this._handleFormSubmit = handleFormSubmit.bind(this);
        // this._submittingButton = this._popup.querySelector(".popup__button");
    }

    _getInputValues() {
        this._inputs = this._form.querySelectorAll(".popup__input");
        this._inputValues = {};
        this._inputs.forEach((input) => {
            this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    }

    // setInputValues(data) {
    //     this._inputs.forEach((input) => {
    //         input.value = data[input.name];
    //     });
    // }

    close() {
        super.close();
        this._form.reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (event) => {
            event.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }
}
