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
    imageLink,
    imageName,
    userNameInput,
    userDescriptionInput,
} from "../../src/utils/constants";
import Card from "../../src/components/Card";
import FormValidator from "../../src/components/FormValidator";
import PopupWithImage from "../../src/components/PopupWithImage";
import PopupWithForm from "../../src/components/PopupWithForm";
import Section from "../../src/components/Section";
import UserInfo from "../../src/components/UserInfo";

// Create cards
const createPhotoCard = ({ name, link }) => {
    const photoCard = new Card(
        { name, link },
        templateSelector,
        popupShowImage.open
    );
    return photoCard.createCard();
};

const prependPhoto = ({ name, link }) => {
    const photoCard = createPhotoCard(name, link);
    sectionCards.addItem(photoCard);
};

const sectionCards = new Section(
    {
        items: initialCards,
        renderer: prependPhoto,
    },
    photosContainer
);

// const sectionCards = new Section(
//     {
//         items: initialCards,
//         renderer: (element) => {
//             const card = new Card(
//                 element,
//                 templateSelector,
//                 popupShowImage.open
//             );
//             return card.createCard();
//         },
//     },
//     photosContainer
// );
// sectionCards.renderItems();

// Popup photo
const popupShowImage = new PopupWithImage(showingImagePopup);
popupShowImage.setEventListeners();

//Image profile submit
const handleFormImageSubmit = (event) => {
    event.preventDefault();
    const card = { name: imageName.value, link: imageLink.value };
    prependPhoto(card);
    addingImageFormValidation.resetValidation();
    addPhotoCard.close();
};

const addPhotoCard = new PopupWithForm(
    addingImagePopup,
    handleFormImageSubmit,
    addingFormImage
);
addPhotoCard.setEventListeners();

// User data
const userInformation = new UserInfo(userInfo);

const handleFormSubmit = (event) => {
    event.preventDefault();
    userInformation.setUserInfo({
        name: userNameInput.value,
        description: userDescriptionInput.value,
    });
    editProfile.close();
};

// Edit profile
const editProfile = new PopupWithForm(
    editingPopup,
    handleFormSubmit,
    editingForm
);
editProfile.setEventListeners();

editingButton.addEventListener("click", () => {
    const { name, description } = userInformation.getUserInfo();
    userNameInput.value = name;
    userDescriptionInput.value = description;
    edittingFormValidation.resetValidation();
    editProfile.open();
});

addingButton.addEventListener("click", () => {
    addingImageFormValidation.resetValidation();
    addPhotoCard.open();
});

// const addPhotoCard = new PopupWithForm(addingImagePopup, (inputs) => {
//     sectionCards.addItem(sectionCards.renderedItems(inputs));
//     addPhotoCard.close();
// });
// addPhotoCard.setEventListeners();

// const editProfile = new PopupWithForm(editingPopup, (inputs) => {
//     userInformation.setUserInfo(inputs);
// });
// editProfile.setEventListeners();

const edittingFormValidation = new FormValidator(configValidation, editingForm);
edittingFormValidation.enableValidation();

const addingImageFormValidation = new FormValidator(
    configValidation,
    addingFormImage
);
addingImageFormValidation.enableValidation();
