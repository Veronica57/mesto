export default class FormValidator {
    constructor(configValidation, form) {
        this._configValidation = configValidation;
        this._form = form;
        this._inputList = form.querySelectorAll(
            this._configValidation.inputSelector
        );
        this._button = form.querySelector(
            this._configValidation.submitButtonSelector
        );
    }

    _showInputError() {
        this._input.classList.add(this._configValidation.inputErrorClass);
        this._errorInput.textContent = this._input.validationMessage;
        this._errorInput.classList.add(this._configValidation.activeErrorClass);
    }

    _hideInputError() {
        this._input.classList.remove(this._configValidation.inputErrorClass);
        this._errorInput.classList.remove(
            this._configValidation.activeErrorClass
        );
        this._errorInput.textContent = "";
    }

    _checkInputValidity = () => {
        this._errorInput = this._form.querySelector(
            `${this._configValidation.inputSelector}-${this._input.name}-error`
        );
        if (!this._input.validity.valid) {
            this._showInputError();
        } else {
            this._hideInputError();
        }
    };

    _hasInvalidInput = () => {
        return Array.from(this._inputList).some(
            (input) => !input.validity.valid
        );
    };

    _enableButton() {
        this._button.classList.remove(
            this._configValidation.inactiveButtonClass
        );
        this._button.disabled = false;
    }

    _disableButton() {
        this._button.classList.add(this._configValidation.inactiveButtonClass);
        this._button.disabled = true;
    }

    _toggleButton = () => {
        if (this._hasInvalidInput()) {
            this._disableButton();
        } else {
            this._enableButton();
        }
    };

    _setEventListeners = () => {
        this._inputList.forEach((input) => {
            input.addEventListener("input", () => {
                this._input = input;
                this._checkInputValidity();
                this._toggleButton();
            });
        });
    };

    resetValidation = () => {
        this._inputList.forEach((input) => {
            this._input = input;
            this._errorInput = this._form.querySelector(
                `${this._configValidation.inputSelector}-${this._input.name}-error`
            );
            if (!this._input.validity.valid) {
                this._hideInputError();
            }
        });
        this._disableButton();
    };

    enableValidation = () => {
        this._setEventListeners();
    };
}
