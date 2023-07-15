import "./index.css";
import {
    initialCards,
    configValidation,
    popupAddImage,
    popupEditProfile,
    popupForm,
    popupEditButton,
    popupFormAddImage,
    popupAddButton,
    templateSelector,
    popupShowImage,
    imageContainer,
    userProfile,
} from "../../src/utils/constants";
import Card from "../../src/components/Card";
import FormValidator from "../../src/components/FormValidator";
import PopupWithImage from "../../src/components/PopupWithImage";
import PopupWithForm from "../../src/components/PopupWithForm";
import Section from "../../src/components/Section";
import UserInfo from "../../src/components/UserInfo";

const popupOpenImage = new PopupWithImage(popupShowImage);
popupOpenImage.setEventListeners();

const newCard = (element) => {
    const card = new Card(element, templateSelector, popupOpenImage.open);
    return card.createCard();
};

const sectionCards = new Section(
    {
        items: initialCards,
        renderer: (element) => {
            sectionCards.addItem(newCard(element));
        },
    },
    imageContainer
);
sectionCards.renderItems();

const userInfo = new UserInfo(userProfile);

const popupProfileEdit = new PopupWithForm(popupEditProfile, (data) => {
    userInfo.setUserInfo(data);
    popupProfileEdit.close();
});
popupProfileEdit.setEventListeners();

const popupAddCard = new PopupWithForm(popupAddImage, (data) => {
    sectionCards.addItem(newCard(data));
    popupAddCard.close();
});
popupAddCard.setEventListeners();

const popupFormValidation = new FormValidator(configValidation, popupForm);
popupFormValidation.enableValidation();

const formAddCardValidation = new FormValidator(
    configValidation,
    popupFormAddImage
);
formAddCardValidation.enableValidation();

popupEditButton.addEventListener("click", () => {
    popupProfileEdit.open();
    popupFormValidation.resetValidation();
    popupProfileEdit.setInputValues(userInfo.getUserInfo());
});

popupAddButton.addEventListener("click", () => {
    formAddCardValidation.resetValidation();
    popupAddCard.open();
});
