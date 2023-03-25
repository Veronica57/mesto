//profile
const editingButton = document.querySelector(".profile__edit-button");
const userName = document.querySelector(".profile__name");
const userDescription = document.querySelector(".profile__description");
const addingButton = document.querySelector(".profile__add-button");
//popup
const closingPopupButton = document.querySelectorAll(".popup__exit");
const editingPopup = document.querySelector(".edit-popup");
const userNameInput = document.querySelector(".popup__form-input_user_name");
const userDescriptionInput = document.querySelector(
    ".popup__form-input_user_description"
);
const editingForm = document.querySelector("#popupEditForm");
const imageNameInput = document.querySelector(".popup__form-input_image_name");
const imageLinkInput = document.querySelector(".popup__form-input_image_link");
const addingImagePopup = document.querySelector(".add-popup");
const addingFormImage = document.querySelector(".popup__form-image");
const showingImagePopup = document.querySelector(".show-popup");
const popupImage = document.querySelector(".popup__image");
const popupImageName = document.querySelector(".popup__image-name");
const allPopups = document.querySelectorAll(".popup");
//photo
const photosContainer = document.querySelector(".photo__elements");
const photoTemplate = document.querySelector("#photoTemplate").content;
// image and link values from form
const imageName = document.querySelector(".popup__form-input_image_name").value;
const imageLink = document.querySelector(".popup__form-input_image_link").value;
// Open popup
function openPopup(popup) {
    popup.classList.add("popup_active");
}
// Close popup
function closePopup(event) {
    event.target.closest(".popup").classList.remove("popup_active");
}
//User profile submit
function handleFormSubmit(event) {
    event.preventDefault();
    userName.textContent = userNameInput.value;
    userDescription.textContent = userDescriptionInput.value;
    closePopup(event);
}
//Delete button function
function handleDeleteButton(event) {
    const button = event.target;
    const photo = button.closest(".photo__element");
    photo.remove();
}
//Like button function
function handleLikeButton(event) {
    event.target.classList.toggle("photo__like_active");
}
//Image profile submit
function handleFormImageSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const card = { imageName, imageLink };
    prependPhoto(card);
    closePopup(event);
    form.reset();
}
//Create photo function
function createPhotos(photo) {
    const newPhoto = photoTemplate
        .querySelector(".photo__element")
        .cloneNode(true);
    const photoHeading = newPhoto.querySelector(".photo__name");
    const deletingButton = newPhoto.querySelector(".photo__delete");
    const likingButton = newPhoto.querySelector(".photo__like");
    const photoImage = newPhoto.querySelector(".photo__image");
    photoHeading.textContent = photo.name;
    photoImage.setAttribute("src", photo.link);
    photoImage.setAttribute("alt", `Фотография ${photo.name}`);
    deletingButton.addEventListener("click", handleDeleteButton);
    likingButton.addEventListener("click", handleLikeButton);
    photoImage.addEventListener("click", () => showImage(photo));
    return newPhoto;
}
function prependPhoto(photo) {
    const photoCard = createPhotos(photo);
    photosContainer.prepend(photoCard);
}
//Creation cards with array method
initialCards.forEach(prependPhoto);
//Function show image
function showImage(photo) {
    popupImage.src = photo.link;
    popupImage.alt = photo.name;
    popupImageName.textContent = photo.name;
    openPopup(showingImagePopup);
}
//close all popups
allPopups.forEach((popup) => {
    popup.addEventListener("click", (event) => {
        if (event.target !== event.currentTarget) return;
        closePopup(event);
    });
});
editingForm.addEventListener("submit", handleFormSubmit);
editingButton.addEventListener("click", () => {
    userNameInput.value = userName.textContent;
    userDescriptionInput.value = userDescription.textContent;
    openPopup(editingPopup);
});
closingPopupButton.forEach((exit) =>
    exit.addEventListener("click", closePopup)
);
addingButton.addEventListener("click", () => {
    openPopup(addingImagePopup);
});
addingFormImage.addEventListener("submit", handleFormImageSubmit);
