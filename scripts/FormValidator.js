export default class FormValidator {
    constructor(configValidation, form) {
        this._configValidation = configValidation;
        this._form = form;
    }

    _showInputError = (input, errorMessage, inputSelector) => {
        input.classList.add(this._configValidation.inputErrorClass);
        const errorInput = this._form.querySelector(
            `${inputSelector}-${input.name}-error`
        );
        errorInput.textContent = errorMessage;
    };

    _hideInputError = (input, inputSelector) => {
        input.classList.remove(this._configValidation.inputErrorClass);
        const errorInput = this._form.querySelector(
            `${inputSelector}-${input.name}-error`
        );
        errorInput.textContent = "";
    };

    _checkInputValidity = (input, inputSelector) => {
        if (!input.validity.valid) {
            this._showInputError(
                input,
                this._showErrorMessage(input),
                inputSelector
            );
        } else {
            this._hideInputError(input, inputSelector);
        }
    };

    _showErrorMessage = (input) => {
        const length = input.value.length;
        if (input.type === "url") {
            return "Введите адрес сайта.";
        } else if (length === 0) {
            return "Вы пропустили это поле.";
        } else {
            return `Используйте не менее 2 символов. Длина строки ${
                length === 1 ? `${length} символ` : `${length} символа`
            }`;
        }
    };

    _hasInvalidInput = () => {
        return Array.from(this._inputList).some(
            (input) => !input.validity.valid
        );
    };

    _toggleButton = ({ inactiveButtonClass }) => {
        if (this._hasInvalidInput()) {
            this._button.classList.add(inactiveButtonClass);
            this._button.disabled = true;
        } else {
            this._button.classList.remove(inactiveButtonClass);
            this._button.disabled = false;
        }
    };

    _setEventListeners = ({ inputSelector, submitButtonSelector, ...rest }) => {
        this._inputList = this._form.querySelectorAll(inputSelector);
        this._button = this._form.querySelector(submitButtonSelector);
        this._toggleButton(rest);
        this._inputList.forEach((input) => {
            input.addEventListener("input", () => {
                this._checkInputValidity(input, inputSelector);
                this._toggleButton(rest);
            });
        });
    };

    resetValidation = () => {
        this._toggleButton(this._configValidation);

        this._inputList.forEach((input) => {
            this._hideInputError(input, this._configValidation.inputSelector);
        });
    };

    enableValidation = () => {
        this._setEventListeners(this._configValidation);
    };
}
