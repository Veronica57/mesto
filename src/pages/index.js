import "./index.css";

import {
    popupEditButton,
    popupAddButton,
    templateSelector,
    popupEditProfileSelector,
    popupAddImagSelector,
    popupShowImageSelector,
    imageContainerSelector,
    forms,
    userProfile,
    configValidation,
    popupAddAvatarSelector,
    popupDeleteSelector,
    popupAddAvatarButton,
} from "../utils/constants.js";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupDelete from "../components/PopupDelete.js";
import Api from "../components/Api.js";
import { data } from "autoprefixer";

const userInfo = new UserInfo(userProfile);

const popupImage = new PopupWithImage(popupShowImageSelector);
popupImage.setEventListeners();

const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-72",
    headers: {
        authorization: "8abff67b-bce1-4956-a9c9-3acb678266c1",
        "Content-Type": "application/json",
    },
});

api.getCards().then((res) => console.log(res));

const sectionCards = new Section((element) => {
    sectionCards.addItem(createCard(element));
}, imageContainerSelector);

const createCard = (element) => {
    const card = new Card(
        element,
        templateSelector,
        popupImage.open,
        popupDeleteCard.open,
        (likeButton, cardId) => {
            if (likeButton.classList.contains("photo__like_active")) {
                api.deleteLike(cardId)
                    .then((res) => {
                        card.toggleLike(res.likes);
                    })
                    .catch((error) =>
                        console.error(`Ошибка при удалении лайка ${error}`)
                    );
            } else {
                api.addLike(cardId)
                    .then((res) => {
                        card.toggleLike(res.likes);
                    })
                    .catch((error) =>
                        console.error(`Ошибка при добавлении лайка ${error}`)
                    );
            }
        }
    );
    return card.createCard();
};

const popupAddCard = new PopupWithForm(popupAddImagSelector, (data) => {
    api.addCard(data)
        .then((dataCard) => {
            console.log(userInfo.getId());
            dataCard.id = userInfo.getId();
            sectionCards.addItem(createCard(dataCard));
            popupAddCard.close();
        })
        .catch((error) =>
            console.error(`Ошибка при добавлении фотографии ${error}`)
        )
        .finally(() => {
            popupAddCard.setTextButton();
        });
});
popupAddCard.setEventListeners();

const popupProfileEdit = new PopupWithForm(popupEditProfileSelector, (data) => {
    api.patchUserInfo(data)
        .then((res) => {
            userInfo.setUserInfo({
                username: res.name,
                userdescription: res.about,
                useravataravatar: res.avatar,
            });
            popupProfileEdit.close();
        })
        .catch((error) =>
            console.error(
                `Ошибка при редактировании профиля ползователя ${error}`
            )
        )
        .finally(() => {
            popupProfileEdit.setTextButton();
        });
});
popupProfileEdit.setEventListeners();

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
                popupDeleteCard.setTextButton();
            });
    }
);
popupDeleteCard.setEventListeners();

const popupAddAvatar = new PopupWithForm(popupAddAvatarSelector, (data) => {
    api.patchAddAvatar(data)
        .then((res) => {
            userInfo.setUserInfo({
                nameuser: res.name,
                profession: res.about,
                avatar: res.avatar,
            });
            popupAddAvatar.close();
        })
        .catch((error) =>
            console.error(`Ошибка при изменении аватара ${error}`)
        )
        .finally(() => {
            popupAddAvatar.setTextButton();
        });
});
popupAddAvatar.setEventListeners();

Array.from(document.forms).forEach((item) => {
    const form = new FormValidator(configValidation, item);
    const name = item.name;
    forms[name] = form;
    form.enableValidation();
});

popupEditButton.addEventListener("click", () => {
    forms.editForm.resetValidation();
    popupProfileEdit.setInputsValue(userInfo.getUserInfo());
    popupProfileEdit.open();
});

popupAddButton.addEventListener("click", () => {
    formAddImage.reset();
    forms.addImageForm.resetValidation();
    popupAddCard.open();
});

popupAddAvatarButton.addEventListener("click", () => {
    forms.userAvatar.resetValidation();
    popupAddAvatar.open();
});

Promise.all([api.getInfo(), api.getCards()])
    .then(([dataUser, dataCard]) => {
        dataCard.forEach((element) => {
            element.id = dataUser._id;
        });
        userInfo.setUserInfo({
            username: dataUser.name,
            userdescription: dataUser.about,
            useravatar: dataUser.avatar,
        });
        userInfo.setId(dataUser._id);
        sectionCards.renderItems(dataCard);
    })
    .catch((error) => console.error(`Ошибка ${error}`));
