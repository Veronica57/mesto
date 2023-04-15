const configValidation = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
};

//enable validation
const enableValidation = ({ formSelector, ...rest }) => {
    const formList = document.querySelectorAll(formSelector);
    formList.forEach((form) => setEventListeners(form, rest));
};

//set event listeners
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

//show input error
const showInputError = (
    form,
    input,
    errorMessage,
    inputSelector,
    inputErrorClass
) => {
    input.classList.add(inputErrorClass); // inputErrorClass
    const errorInput = form.querySelector(
        `${inputSelector}-${input.name}-error`
    );
    errorInput.textContent = errorMessage;
};

//hide input error
const hideInputError = (form, input, inputSelector, inputErrorClass) => {
    input.classList.remove(inputErrorClass); //"popup__input_type_error"
    const errorInput = form.querySelector(
        `${inputSelector}-${input.name}-error`
    );
    errorInput.textContent = "";
};

//check input validity
const checkInputValidity = (form, input, inputSelector) => {
    if (!input.validity.valid) {
        showInputError(form, input, showErrorMessage(input), inputSelector); // input.validationMessage
    } else {
        hideInputError(form, input, inputSelector);
    }
};

//show error message
const showErrorMessage = (input) => {
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

//invalid input
const hasInvalidInput = (inputList) =>
    Array.from(inputList).some((input) => !input.validity.valid);

// //disable button
// const disableButton = (button, inactiveButtonClass) => {
//     button.classList.add(inactiveButtonClass);
//     button.disabled = true;
// };
// //enable button
// const enableButton = (button, inactiveButtonClass) => {
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

enableValidation(configValidation);
