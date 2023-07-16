const initialCards = [
    {
        name: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
        name: "Челябинская область",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
        name: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
        name: "Камчатка",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
        name: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
        name: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
];

const configValidation = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
};

const userProfile = {
    nameSelector: ".profile__name",
    descriptionSelector: ".profile__description",
};

// const allPopups = Array.from(document.querySelectorAll(".popup"));
const forms = {};
// const popupForm = document.querySelector(".popup__form");
// const popupFormAddImage = document.querySelector(".popup__form-image");
const popupEditButton = document.querySelector(".profile__edit-button");
const popupAddButton = document.querySelector(".profile__add-button");
const templateSelector = "#photoTemplate";
// const popupEditProfile = document.querySelector(".edit-popup");
const popupEditProfile = "#editPopup";

// const popupAddImage = document.querySelector(".add-popup");
const popupAddImage = "#addImage";
// const popupShowImage = document.querySelector(".show-popup");
const popupShowImage = "#openImage";
// const imageContainer = document.querySelector(".photo__elements");
const imageContainer = ".photo__elements";

export {
    initialCards,
    configValidation,
    userProfile,
    popupAddImage,
    popupEditProfile,
    // popupForm,
    popupEditButton,
    // popupFormAddImage,
    popupAddButton,
    templateSelector,
    popupShowImage,
    imageContainer,
    forms,
};
