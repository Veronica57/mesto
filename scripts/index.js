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

const photo = document.querySelector(".photo");
function createCard(card) {
    const newCard = document
        .querySelector("#photoTemplate")
        .textContent.cloneNode(true);
    const cardHeading = newCard.querySelector(".photo__name");
    cardHeading.textContent = card.name;
    const cardImage = newCard.querySelector(".photo__element");
    cardImage.setAttribute("src", card.link);
    cardImage.setAttribute("alt", card.name);
    const likeButton = newCard.querySelector(".photo__like");
    likeButton.addEventListener("like", addDeleteLike);
    photo.append(newCard);
}

initialCards.forEach(createCard);

function addDeleteLike(like) {
    like.classList.toggle("photo__like_active");
}
