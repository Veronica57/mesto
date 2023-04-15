const configValidation = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    // inputErrorClass: "popup__input_type_error",
};

const showInputError = (form, input, errorMessage, inputSelector) => {
    input.classList.add("popup__input_type_error"); // inputErrorClass
    const errorInput = form.querySelector(
        `${inputSelector}_${input.name}-error`
    );
    errorInput.textContent = errorMessage;
};

// const showErrorMessage = (input) => {
//     const length = input.value.length;
//     if (input.type === "url") {
//         return "Введите адрес сайта.";
//     } else if (length === 0) {
//         return "Вы пропустили это поле.";
//     } else {
//         return `Минимально допустимое число символов: 2. Длина текста ${
//             length === 1 ? `${length} символ` : `${length} символа`
//         }`;
//     }
// };

const hideInputError = (form, input, inputSelector) => {
    input.classList.remove("popup__input_type_error"); //"popup__input_type_error"
    const errorInput = form.querySelector(
        `${inputSelector}_${input.name}-error`
    );
    errorInput.textContent = "";
};

const checkInputValidity = (form, input, inputSelector) => {
    if (!input.validity.valid) {
        showInputError(form, input, input.validationMessage, inputSelector);
    } else {
        hideInputError(form, input, inputSelector);
    }
};

// const disableButton = (button, { inactiveButtonClass }) => {
//     button.classList.add(inactiveButtonClass);
//     button.disabled = true;
// };

// const enableButton = (button, { inactiveButtonClass }) => {
//     button.classList.remove(inactiveButtonClass);
//     button.disabled = false;
// };

const toggleButton = (inputList, button, { inactiveButtonClass }) => {
    if (hasInvalidInput(inputList)) {
        button.classList.add(inactiveButtonClass);
        button.disabled = true;
    } else {
        button.classList.remove(inactiveButtonClass);
        button.disabled = false;
    }
};

const hasInvalidInput = (inputList) =>
    Array.from(inputList).some((input) => !input.validity.valid);

const setEventListeners = (
    form,
    { inputSelector, submitButtonSelector, ...rest }
) => {
    const inputList = form.querySelectorAll(inputSelector);
    const button = form.querySelector(submitButtonSelector);
    toggleButton(inputList, button, rest);
    inputList.forEach((input) => {
        input.addEventListener("input", () => {
            checkInputValidity(form, input, inputSelector);
            toggleButton(inputList, button, rest);
        });
    });
};

const enableValidation = ({ formSelector, ...rest }) => {
    const formList = document.querySelectorAll(formSelector);
    formList.forEach((form) => setEventListeners(form, rest));
};

enableValidation(configValidation);
