const editButton = document.querySelector(".profile__edit-button");
const closePopupButton = document.querySelectorAll(".popup__exit");
const editPopup = document.querySelector(".edit-popup");
const userName = document.querySelector(".profile__name");
const userDescription = document.querySelector(".profile__description");
const userNameInput = document.querySelector(".popup__form-input_user_name");
const userDescriptionInput = document.querySelector(
    ".popup__form-input_user_description"
);
const formElement = document.querySelector(".popup__form");
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

const photos = document.querySelector(".photo__elements");
const photoTemplate = document.querySelector("#photoTemplate").content;
// add card
const openAddPopupButton = document.querySelector(".profile__add-button");
const imageNameInput = document.querySelector(".popup__form-input_image_name");
const imageLinkInput = document.querySelector(".popup__form-input_image_link");
const addImagePopup = document.querySelector(".add-popup");
const addImageExit = document.querySelector(".popup__exit-image");
const addFormImage = document.querySelector(".popup__form-image");
//show popup
const showImagePopup = document.querySelector(".show-popup");
const popupImage = document.querySelector(".popup__image");
const popupImageName = document.querySelector(".popup__image-name");
const popupTotal = document.querySelectorAll(".popup");

// Open popup
function openPopup(popup) {
    popup.classList.add("popup_active");
}
// Close popup
function closePopup() {
    document.querySelector(".popup_active").classList.remove("popup_active");
}

//User profile submit
function handleFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = userNameInput.value;
    userDescription.textContent = userDescriptionInput.value;
    closePopup();
}

//Delete button function
function handleDeleteButton(event) {
    event.preventDefault();
    const button = event.target;
    const photo = button.closest(".photo__element");
    photo.remove();
}

//Like button function
function handleLikeButton(event) {
    event.preventDefault();
    event.target.classList.toggle("photo__like_active");
}
//Image profile submit
function handleFormImageSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector(".popup__form-input_image_name").value;
    const link = form.querySelector(".popup__form-input_image_link").value;
    const card = { name, link };
    prependPhoto(card);
    closePopup();
    form.reset();
}

function createPhotos(photo) {
    const newPhoto = photoTemplate
        .querySelector(".photo__element")
        .cloneNode(true);
    const photoHeading = newPhoto.querySelector(".photo__name");
    const deleteButton = newPhoto.querySelector(".photo__delete");
    const likeButton = newPhoto.querySelector(".photo__like");
    const photoImage = newPhoto.querySelector(".photo__image");
    photoHeading.textContent = photo.name;
    photoImage.setAttribute("src", photo.link);
    photoImage.setAttribute("alt", `Фотография ${photo.name}`);
    deleteButton.addEventListener("click", handleDeleteButton);
    likeButton.addEventListener("click", handleLikeButton);
    photoImage.addEventListener("click", () => showImage(photo));
    return newPhoto;
}

function prependPhoto(photo) {
    const photoCard = createPhotos(photo);
    photos.prepend(photoCard);
}

//Creation cards with array method
initialCards.forEach(prependPhoto);

//Function show image
function showImage(photo) {
    popupImage.src = photo.link;
    popupImage.alt = photo.name;
    popupImageName.textContent = photo.name;
    openPopup(showImagePopup);
}

//close all popups

popupTotal.forEach((popup) => {
    popup.addEventListener("click", (event) => {
        if (event.target !== event.currentTarget) return;
        closePopup();
    });
});

formElement.addEventListener("submit", handleFormSubmit);

editButton.addEventListener("click", () => {
    userNameInput.value = userName.textContent;
    userDescriptionInput.value = userDescription.textContent;
    openPopup(editPopup);
});

closePopupButton.forEach((exit) => exit.addEventListener("click", closePopup));

openAddPopupButton.addEventListener("click", () => {
    openPopup(addImagePopup);
});

addFormImage.addEventListener("submit", handleFormImageSubmit);
