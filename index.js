let openEditPopupButton = document.querySelector(".profile__edit-button");

if (!openEditPopupButton) {
    throw new Error("No openEditPopupButton!");
}

let closePopupButton = document.querySelector(".popup__escape-button");
if (!closePopupButton) {
    throw new Error("No closePopupButton!");
}

let editPopup = document.querySelector(".popup");
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

///////

userNameInput.addEventListener("input", function (event) {
    let value = event.target.value;
    userName.textContent = value;
});
userDescriptionInput.addEventListener("input", function (event) {
    let value = event.target.value;
    userDescription.textContent = value;
});

let formElement = document.querySelector(".popup__form");

function handleFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = userNameInput.value;
    userDescription.textContent = userDescriptionInput.value;
}

formElement.addEventListener("submit", handleFormSubmit);

// let saveButton = document.querySelector(".popup__save-button");
// saveButton.onclick = function () {
//     userName.textContent = userNameInput.value;
//     userDescription.textContent = userDescriptionInput.value;
// }