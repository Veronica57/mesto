let openEditPopupButton = document.querySelector(".profile__edit-button");

if (!openEditPopupButton) {
    throw new Error("No openEditPopupButton!");
}

const editPopup = document.querySelector(".popup");

openEditPopupButton.addEventListener("click", openEditPopup);

function openEditPopup() {
    editPopup.classList.add("popup_active");
}

let closePopupButton = document.querySelector(".popup__escape-button");

closePopupButton.addEventListener("click", closePopup);
function closePopup() {
    editPopup.classList.remove("popup_active");
}

const user = {
    name: "Жак-Ив Кусто",
    description: "Исследователь океана",
};

const nameInput = document.querySelector("#input_name");
nameInput.value = user.name;
const jobInput = document.querySelector("#input_description");
jobInput.value = user.description;

function handleFormSubmit(evt) {
    evt.preventDefault();
    let job = document.querySelector(".profile__name");
    (".profile__description");

    job.textContent = jobInput;

    nameInput.value = nameInput.textContent;
}

let formElement = document.querySelector(".popup__form");
formElement.addEventListener("submit", handleFormSubmit);
