// const initialCards = [
//     {
//         name: "Архыз",
//         link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
//     },
//     {
//         name: "Челябинская область",
//         link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
//     },
//     {
//         name: "Иваново",
//         link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
//     },
//     {
//         name: "Камчатка",
//         link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
//     },
//     {
//         name: "Холмогорский район",
//         link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
//     },
//     {
//         name: "Байкал",
//         link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
//     },
// ];

// const editProfileButton = document.querySelector(".profile__edit-button");
const popupEditButton = document.querySelector(".profile__edit-button");
// const addMestoButton = document.querySelector(".profile__add-button");
const popupAddButton = document.querySelector(".profile__add-button");
const popupAddAvatarButton = document.querySelector(".profile__avatar-button");

// const selectorTemplate = "#photoTemplate";
const templateSelector = "#photoTemplate";
// const popupProfileSelector = "#editPopup";
const popupEditProfileSelector = "#editPopup";
// const popupAddMestoSelector = "#addImage";
const popupAddImagSelector = "#addImage";
// const popupImageSelector = "#openImage";
const popupShowImageSelector = "#openImage";
// const containerElementsSelector = ".photo__elements";
const imageContainerSelector = ".photo__elements";
const popupAddAvatarSelector = "#addUserAvatar"; //update
const popupDeleteSelector = "#confirmDeletePopup"; //update

const forms = {};

const userProfile = {
    nameSelector: ".profile__name",
    descriptionSelector: ".profile__description",
    userAvatarSelector: ".profile__avatar-image",
};

const configValidation = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
};

export {
    popupEditButton,
    popupAddButton,
    popupAddAvatarButton,
    templateSelector,
    popupEditProfileSelector,
    popupAddImagSelector,
    popupShowImageSelector,
    imageContainerSelector,
    popupAddAvatarSelector,
    popupDeleteSelector,
    forms,
    userProfile,
    configValidation,
};
