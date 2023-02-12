let openedPopUpButton = document.querySelector(".profile__edit-button"); // кнопка открытия
let closePopUpButton = document.querySelector(".popup__escape-button"); // кнопка закрытия
let popUp = document.querySelector(".popup__form-container"); // сам попап
let popUpPhone = document.querySelector(".popup"); // фон попапа

openPopupButtons.forEach((button) => {
    // Перебираем все кнопки
    button.addEventListener("click", (e) => {
        // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add("active"); // Добавляем класс 'active' для фона
        popup.classList.add("active"); // И для самого окна
    });
});

closePopupButton.addEventListener("click", () => {
    // Вешаем обработчик на крестик
    popupBg.classList.remove("active"); // Убираем активный класс с фона
    popup.classList.remove("active"); // И с окна
});

// // Находим форму в DOM
// let formElement = // Воспользуйтесь методом querySelector()
// // Находим поля формы в DOM
// let nameInput = // Воспользуйтесь инструментом .querySelector()
// let jobInput = // Воспользуйтесь инструментом .querySelector()

// // Обработчик «отправки» формы, хотя пока
// // она никуда отправляться не будет
// function handleFormSubmit (evt) {
//     evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//                                                 // Так мы можем определить свою логику отправки.
//                                                 // О том, как это делать, расскажем позже.

//     // Получите значение полей jobInput и nameInput из свойства value

//     // Выберите элементы, куда должны быть вставлены значения полей

//     // Вставьте новые значения с помощью textContent
// }

// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', handleFormSubmit);
