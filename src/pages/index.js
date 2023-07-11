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
    templateSelector,
    userInfo,
} from "../../src/utils/constants";
import Card from "../../src/components/Card";
import FormValidator from "../../src/components/FormValidator";
import PopupWithImage from "../../src/components/PopupWithImage";
import PopupWithForm from "../../src/components/PopupWithForm";
import Section from "../../src/components/Section";
import UserInfo from "../../src/components/UserInfo";

const popupImage = new PopupWithImage(showingImagePopup);
popupImage.setEventListeners();

function createNewPhotoCard(cardItem) {
    const photoCard = new Card(cardItem, templateSelector, popupImage.open);
    return photoCard.createCard();
}

const section = new Section((cardItem) => {
    section.addItem(createNewPhotoCard(cardItem));
}, photosContainer);

const userInfo = new UserInfo(userInfo);

const editProfile = new PopupWithForm(editingPopup);
editProfile.setEventListeners();

const addPhotoCard = new PopupWithForm(addingImagePopup);
addPhotoCard.setEventListeners();

//Edit profile form
const edittingFormValidation = new FormValidator(configValidation, editingForm);
edittingFormValidation.enableValidation();

//Add image form
const addingImageFormValidation = new FormValidator(
    configValidation,
    addingFormImage
);
addingImageFormValidation.enableValidation();

//open image add popup
addingButton.addEventListener("click", () => {
    addPhotoCard.open();
    addingImageFormValidation.resetValidation();
});

// edit button
editingButton.addEventListener("click", () => {
    edittingFormValidation.resetValidation();
    userInfo.setInputValues(userInfo.getUserInfo());
    editProfile.open();
});
