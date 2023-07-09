import "./index.css";
import {
    initialCards,
    editingButton,
    addingButton,
    configValidation,
    userName,
    userDescription,
    popupImage,
    editingPopup,
    editingForm,
    addingFormImage,
    addingImagePopup,
    imageName,
    imageLink,
    allPopups,
    photosContainer,
    popupImageName,
    showingImagePopup,
    userDescriptionInput,
    userNameInput,
    photoTemplate,
} from "../utils/constants";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";
import Section from "../components/Section";
import UserInfo from "../components/UserInfo";

//profile
const userInfo = new UserInfo({ userName, userDescription });

//imagePopup
const popupWithImage = new PopupWithImage(popupImage);
popupWithImage.setEventListeners();

//section
const section = new Section({
    items: initialCards,
    renderer: ({ name, link }) => {
        newSection.addItem(createPhotoCard({ name, link }));
    },
});

// create cards function with class
const createPhotoCard = (name, link) => {
    const photoCard = new Card({ name, link }, "#photoTemplate", showImage);
    const photoCardElement = photoCard.createCard();
    return photoCardElement;
};

const prependPhoto = ({ name, link }) => {
    const photoCard = createPhotoCard(name, link);
    photosContainer.prepend(photoCard);
};

//Creation cards with array method
initialCards.forEach(prependPhoto);

section.renderItems();

//popupProfile
const popupEditForm = new PopupWithForm(editingForm, (data) => {
    userInfo.setUserInfo(data);
});
popupEditForm.setEventListeners();

//addMesto
const popupAddForm = new PopupWithForm(addingImagePopup, (data) => {
    section.addItem(createPhotoCard(data));
});
popupAddForm.setEventListeners();

//User profile submit
function handleFormSubmit(event) {
    event.preventDefault();
    userName.textContent = userNameInput.value;
    userDescription.textContent = userDescriptionInput.value;
    closePopup(editingPopup);
}

//Edit profile form
const edittingFormValidation = new FormValidator(configValidation, editingForm);
edittingFormValidation.enableValidation();

//Submit edit form
editingForm.addEventListener("submit", handleFormSubmit);

editingButton.addEventListener("click", () => {
    edittingFormValidation.resetValidation();
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
    addingImageFormValidation.resetValidation();
});

addingFormImage.addEventListener("submit", handleFormImageSubmit);
