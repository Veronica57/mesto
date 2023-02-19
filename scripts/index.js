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

const userName = document.querySelector(".profile__name");

const userDescription = document.querySelector(".profile__description");

const userNameInput = document.querySelector(".popup__form-input_name");
userNameInput.value = user.name;

const userDescriptionInput = document.querySelector(
    ".popup__form-input_description"
);
userDescriptionInput.value = user.description;

const formElement = document.querySelector(".popup__form");

function handleFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = userNameInput.value;
    userDescription.textContent = userDescriptionInput.value;
    closePopup(editPopup);
}

formElement.addEventListener("submit", handleFormSubmit);
