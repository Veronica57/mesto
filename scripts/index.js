const openEditPopupButton = document.querySelector(".profile__edit-button");
const closePopupButton = document.querySelector(".popup__exit");
const editPopup = document.querySelector(".popup");
const userName = document.querySelector(".profile__name");
const userDescription = document.querySelector(".profile__description");
const userNameInput = document.querySelector(".popup__form-input_user_name");
const userDescriptionInput = document.querySelector(
    ".popup__form-input_user_description"
);
const formElement = document.querySelector(".popup__form");
// Open popup
function openPopup(popup) {
    popup.classList.add("popup_active");
}
// Close popup
function closePopup(popup) {
    popup.classList.remove("popup_active");
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = userNameInput.value;
    userDescription.textContent = userDescriptionInput.value;
    closePopup(editPopup);
}

formElement.addEventListener("submit", handleFormSubmit);

openEditPopupButton.addEventListener("click", function () {
    userNameInput.value = userName.textContent;
    userDescriptionInput.value = userDescription.textContent;
    openPopup(editPopup);
});

closePopupButton.addEventListener("click", function () {
    closePopup(editPopup);
});

//Cards creation
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
function createPhotos(photo) {
    const newPhoto = document
        .querySelector("#photoTemplate")
        .content.cloneNode(true);
    const photoHeading = newPhoto.querySelector(".photo__name");
    photoHeading.textContent = photo.name;
    const photoImage = newPhoto.querySelector(".photo__image");
    photoImage.setAttribute("src", photo.link);
    photoImage.setAttribute("alt", `Фотография ${photo.name}`);
    const deleteButton = newPhoto.querySelector(".photo__delete");
    deleteButton.addEventListener("click", handleDeleteButton);
    const likeButton = newPhoto.querySelector(".photo__like");
    likeButton.addEventListener("click", handleLikeButton);
    photos.append(newPhoto);
}

initialCards.forEach(createPhotos);

function handleDeleteButton(event) {
    event.preventDefault();
    const button = event.target;
    const photo = button.closest(".photo__element");
    photo.remove();
}

function handleLikeButton(event) {
    event.preventDefault();
    const like = event.target;
    like.classList.toggle("photo__like_active");
}
