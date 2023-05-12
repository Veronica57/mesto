export default class FormValidator {
    constructor(config, form) {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._form = form;
    }

    _showInputError = (input, errorMessage, inputSelector) => {
        input.classList.add(this._inputErrorClass);
        const errorInput = this._form.querySelector(
            `${inputSelector}-${input.name}-error`
        );
        errorInput.textContent = errorMessage;
    };

    _hideInputError = (input, inputSelector) => {
        input.classList.remove(this._inputErrorClass);
        const errorInput = this._form.querySelector(
            `${inputSelector}-${input.name}-error`
        );
        errorInput.textContent = "";
    };

    _checkInputValidity = (form, input, inputSelector) => {
        if (!input.validity.valid) {
            this._showInputError(
                form,
                input,
                showErrorMessage(input),
                inputSelector
            ); // input.validationMessage
        } else {
            this._hideInputError();
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
        Array.from(this._inputList).some((input) => !input.validity.valid);
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
        toggleButton(rest);
        this._inputList.forEach((input) => {
            input.addEventListener("input", () => {
                this._checkInputValidity(input, inputSelector);
                this._toggleButton(rest);
            });
        });
    };

    resetValidation() {
        this._toggleButton(
            this._formSelector,
            this._inputSelector,
            this._submitButtonSelector,
            this._inactiveButtonClass,
            this._inputErrorClass
        );

        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement, this._inputSelector);
        });
    }

    enableValidation = () => {
        this._setEventListeners(
            this._formSelector,
            this._inputSelector,
            this._submitButtonSelector,
            this._inactiveButtonClass,
            this._inputErrorClass
        );
    };
}
