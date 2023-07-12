import "./index.css";
import {
    initialCards,
    editingButton,
    addingButton,
    configValidation,
    editingPopup,
    editingForm,
    addingFormImage,
    addingImagePopup,
    photosContainer,
    showingImagePopup,
    templateSelector,
    userInfo,
} from "../../src/utils/constants";
import Card from "../../src/components/Card";
import FormValidator from "../../src/components/FormValidator";
import PopupWithImage from "../../src/components/PopupWithImage";
import PopupWithForm from "../../src/components/PopupWithForm";
import Section from "../../src/components/Section";
import UserInfo from "../../src/components/UserInfo";

const popupShowImage = new PopupWithImage(showingImagePopup);
popupShowImage.setEventListeners();

const sectionCards = new Section(
    {
        items: initialCards,
        renderer: (cardItem) => {
            const photoCard = new Card(
                cardItem,
                templateSelector,
                popupShowImage.open
            );
            return photoCard.createCard();
        },
    },
    photosContainer
);
sectionCards.renderedItems();

const userInformation = new UserInfo(userInfo);

const editProfile = new PopupWithForm(editingPopup, (inputs) => {
    userInformation.setUserInfo(inputs);
});
editProfile.setEventListeners();

const addPhotoCard = new PopupWithForm(addingImagePopup, (inputs) => {
    sectionCards.addItem(sectionCards.renderedItems(inputs));
    addPhotoCard.close();
});
addPhotoCard.setEventListeners();

const edittingFormValidation = new FormValidator(configValidation, editingForm);
edittingFormValidation.enableValidation();

const addingImageFormValidation = new FormValidator(
    configValidation,
    addingFormImage
);
addingImageFormValidation.enableValidation();

editingButton.addEventListener("click", () => {
    edittingFormValidation.resetValidation();
    editProfile.setInputValues(userInformation.getUserInfo());
    editProfile.open();
});

addingButton.addEventListener("click", () => {
    addingImageFormValidation.resetValidation();
    addPhotoCard.open();
});
