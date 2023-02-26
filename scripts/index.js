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
