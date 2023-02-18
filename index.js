const openEditPopupButton = document.querySelector(".profile__edit-button");

if (!openEditPopupButton) {
    throw new Error("No openEditPopupButton!");
}

const closePopupButton = document.querySelector(".popup__exit");
if (!closePopupButton) {
    throw new Error("No closePopupButton!");
}

const editPopup = document.querySelector(".popup");
if (!editPopup) {
    throw new Error("No editPopup!");
}

// Open popup
function openPopup(popup) {
    popup.classList.add("popup_active");
}

// Close popup
function closePopup(popup) {
    popup.classList.remove("popup_active");
}

openEditPopupButton.addEventListener("click", function () {
    openPopup(editPopup);
});

closePopupButton.addEventListener("click", function () {
    closePopup(editPopup);
});

const user = {
    name: "Жак-Ив Кусто",
    description: "Исследователь океана",
};

let userName = document.querySelector(".profile__name");
userName.textContent = user.name;

let userDescription = document.querySelector(".profile__description");
userDescription.textContent = user.description;

let userNameInput = document.querySelector(".popup__form-name");
userNameInput.value = user.name;

let userDescriptionInput = document.querySelector(".popup__form-description");
userDescriptionInput.value = user.description;

const formElement = document.querySelector(".popup__form");

function handleFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = userNameInput.value;
    userDescription.textContent = userDescriptionInput.value;
    closePopup(editPopup);
}

formElement.addEventListener("submit", handleFormSubmit);
