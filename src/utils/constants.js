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

//edit button
const editingButton = document.querySelector(".profile__edit-button");
//add button
const addingButton = document.querySelector(".profile__add-button");
//Form validation config
const configValidation = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
};

const popupImage = document.querySelector(".popup__image");
const editingPopup = document.querySelector(".edit-popup"); // редактировать профиль
const editingForm = document.querySelector("#popupEditForm");
const addingFormImage = document.querySelector(".popup__form-image");
const addingImagePopup = document.querySelector(".add-popup");
const imageName = addingFormImage.querySelector(".popup__input_image_name");
const imageLink = addingFormImage.querySelector(".popup__input_image_link");
const allPopups = Array.from(document.querySelectorAll(".popup"));

const userNameInput = document.querySelector(".popup__input_user_name");
const userDescriptionInput = document.querySelector(
    ".popup__input_user_description"
);

const showingImagePopup = document.querySelector(".show-popup"); //Открытие карточки
//class PopupImage ////

//class PopupImage ///
const popupImageName = document.querySelector(".popup__image-name");
/////

//photo
const templateSelector = "#photoTemplate"; //селектор карточки
const photosContainer = document.querySelector(".photo__elements"); //карточка
const userInfo = {
    nameSelector: ".profile__name",
    descriptionSelector: ".profile__description",
};
// const popupFormSelector = allPopups.querySelector(".popup__form");

// const photoTemplate = document.querySelector("#photoTemplate").content;

export {
    userInfo, // данные пользователя
    templateSelector, //селектор карточки
    initialCards,
    editingButton,
    addingButton,
    configValidation,
    userName,
    userDescription,
    popupImage,
    editingPopup,
    editingForm,
    addingFormImage,
    addingImagePopup,
    imageName,
    imageLink,
    allPopups,
    photosContainer,
    popupImageName,
    showingImagePopup,
    userDescriptionInput,
    userNameInput,
    photoTemplate,
};
