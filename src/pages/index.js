import "./index.css";
import {
    initialCards,
    configValidation,
    popupAddImage,
    popupEditProfile,
    // popupForm,
    popupEditButton,
    // popupFormAddImage,
    popupAddButton,
    templateSelector,
    popupShowImage,
    imageContainer,
    userProfile,
    forms,
} from "../../src/utils/constants";
import Card from "../../src/components/Card";
import FormValidator from "../../src/components/FormValidator";
import PopupWithImage from "../../src/components/PopupWithImage";
import PopupWithForm from "../../src/components/PopupWithForm";
import Section from "../../src/components/Section";
import UserInfo from "../../src/components/UserInfo";
import Api from "../../src/components/Api";
import PopupDelete from "../../src/components/PopupDelete";

const userInfo = new UserInfo(userProfile);

const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-72",
    headers: {
        authorization: "8abff67b-bce1-4956-a9c9-3acb678266c1",
        "Content-Type": "application/json",
    },
});

api.getCards().then((res) => console.log(res));

const popupDeleteCard = new PopupDelete(
    popupDeleteSelector,
    ({ card, cardId }) => {
        api.deleteCard(cardId)
            .then(() => {
                card.deleteCard();
                popupDeleteCard.close();
            })
            .catch((error) =>
                console.error(`Ошибка при удалении фотографии ${error}`)
            )
            .finally(() => {
                popupDeleteCard.setSubmitButtonText();
            });
    }
);

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

const popupAddCard = new PopupWithForm(popupAddImage, (data) => {
    sectionCards.addItem(newCard(data));
    popupAddCard.close();
});
popupAddCard.setEventListeners();

const popupProfileEdit = new PopupWithForm(popupEditProfile, (data) => {
    userInfo.setUserInfo(data);
    popupProfileEdit.close();
});
popupProfileEdit.setEventListeners();

Array.from(document.forms).forEach((element) => {
    const form = new FormValidator(configValidation, element);
    const name = element.name;
    forms[name] = form;
    form.enableValidation();
});

// const popupFormValidation = new FormValidator(configValidation, popupForm);
// popupFormValidation.enableValidation();

// const formAddCardValidation = new FormValidator(
//     configValidation,
//     popupFormAddImage
// );
// formAddCardValidation.enableValidation();

popupEditButton.addEventListener("click", () => {
    forms.editForm.resetValidation();
    popupProfileEdit.setInputValues(userInfo.getUserInfo());
    popupProfileEdit.open();
});

popupAddButton.addEventListener("click", () => {
    forms.addImageForm.resetValidation();
    popupAddCard.open();
});
