import initialCards from "./constants.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

//profile
const editingButton = document.querySelector(".profile__edit-button");
const userName = document.querySelector(".profile__name");
const userDescription = document.querySelector(".profile__description");
const addingButton = document.querySelector(".profile__add-button");
//popup
const closingPopupButtons = Array.from(
    document.querySelectorAll(".popup__exit")
);
const editingPopup = document.querySelector(".edit-popup");
const userNameInput = document.querySelector(".popup__input_user_name");
const userDescriptionInput = document.querySelector(
    ".popup__input_user_description"
);
const editingForm = document.querySelector("#popupEditForm");
// const imageNameInput = document.querySelector(".popup__input_image_name");
// const imageLinkInput = document.querySelector(".popup__input_image_link");
const addingImagePopup = document.querySelector(".add-popup");
const addingFormImage = document.querySelector(".popup__form-image");
const showingImagePopup = document.querySelector(".show-popup");
const popupImage = document.querySelector(".popup__image");
const popupImageName = document.querySelector(".popup__image-name");
const allPopups = Array.from(document.querySelectorAll(".popup"));
//photo
const photosContainer = document.querySelector(".photo__elements");
const photoTemplate = document.querySelector("#photoTemplate").content;
// image and link values from form
const imageName = addingFormImage.querySelector(".popup__input_image_name");
const imageLink = addingFormImage.querySelector(".popup__input_image_link");
//Form validation config
const configValidation = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
};

//Function close by escape button
function closePopupByEscapeButton(event) {
    if (event.key === "Escape")
        closePopup(
            allPopups.find((popup) => popup.classList.contains("popup_active"))
        );
}
// Open popup
function openPopup(popup) {
    popup.classList.add("popup_active");
    window.addEventListener("keydown", closePopupByEscapeButton);
}
// Close popup
function closePopup(popup) {
    popup.classList.remove("popup_active");
    window.removeEventListener("keydown", closePopupByEscapeButton);
}
//User profile submit
function handleFormSubmit(event) {
    event.preventDefault();
    userName.textContent = userNameInput.value;
    userDescription.textContent = userDescriptionInput.value;
    closePopup(editingPopup);
}
// //Delete button function
// function handleDeleteButton(event) {
//     const button = event.target;
//     const photo = button.closest(".photo__element");
//     photo.remove();
// }

// //Like button function
// function handleLikeButton(event) {
//     event.target.classList.toggle("photo__like_active");
// }

//Image profile submit
function handleFormImageSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const card = { name: imageName.value, link: imageLink.value };
    prependPhoto(card);
    closePopup(addingImagePopup);
    form.reset();
}
// create cards function with class
function createPhotos(data) {
    const newPhoto = new Card(data, photoTemplate, showImage);
    return newPhoto;
}

// //Create photo function
// function createPhotos(name, link) {
//     const newPhoto = photoTemplate
//         .querySelector(".photo__element")
//         .cloneNode(true);
//     const photoHeading = newPhoto.querySelector(".photo__name");
//     const deletingButton = newPhoto.querySelector(".photo__delete");
//     const likingButton = newPhoto.querySelector(".photo__like");
//     const photoImage = newPhoto.querySelector(".photo__image");
//     photoHeading.textContent = name;
//     photoImage.setAttribute("src", link);
//     photoImage.setAttribute("alt", `Фотография ${name}`);
//     deletingButton.addEventListener("click", handleDeleteButton);
//     likingButton.addEventListener("click", handleLikeButton);
//     photoImage.addEventListener("click", () => showImage(name, link));
//     return newPhoto;
// }
function prependPhoto(data) {
    const photoCard = createPhotos(data);
    photosContainer.prepend(photoCard);
}
//Creation cards with array method
initialCards.forEach(prependPhoto);
//Function show image
function showImage(name, link) {
    popupImage.src = link;
    popupImage.alt = name;
    popupImageName.textContent = name;
    openPopup(showingImagePopup);
}
//close all popups
allPopups.forEach((popup) => {
    popup.addEventListener("click", (event) => {
        if (event.target !== event.currentTarget) return;
        closePopup(popup);
    });
});

// close all buttons
closingPopupButtons.forEach((exit) => {
    const button = exit.closest(".popup");
    exit.addEventListener("click", () => closePopup(button));
});

//Edit profile form
const edittingFormValidation = new FormValidator(configValidation, editingForm);
edittingFormValidation.enableValidation();

//Submit edit form
editingForm.addEventListener("submit", handleFormSubmit);

editingButton.addEventListener("click", () => {
    userNameInput.value = userName.textContent;
    userDescriptionInput.value = userDescription.textContent;
    openPopup(editingPopup);
});

//Add image form
const addingImageFormValidation = new FormValidator(
    configValidation,
    addingFormImage
);
addingImageFormValidation.enableValidation();

//open image add popup
addingButton.addEventListener("click", () => {
    openPopup(addingImagePopup);
    const submitButton = addingFormImage.querySelector(".popup__button");
    submitButton.classList.add("popup__button_disabled");
    submitButton.disabled = "true";
});

addingFormImage.addEventListener("submit", handleFormImageSubmit);
