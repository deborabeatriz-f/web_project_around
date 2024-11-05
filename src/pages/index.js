import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import {
  initialCards,
  // closePopUp,
  // closePopUpProfile,
  format,
  cards,
  editButton,
  // appearEditPopUp,
  addName,
  addJob,
} from "../components/utils.js";

const userInfo = new UserInfo(".profile__title", ".profile__subtitle");

// função que tem um objeto como parametro
const config = {
  formSelector: ".popup__input",
  inputSelector: "input",
  inputErrorClass: "invalid-input",
  errorClass: "input__errorMessage-show",
  popupButton: ".input__submit",
};

function addProfileInfo(values) {
  userInfo.setUserInfo(values.name, values.about);
  saveProfile.classList.add("formButton_disabled");
  saveProfile.setAttribute("disabled", true);
}

const formProfileValidator = new FormValidator(config, popupEditProfile);
formProfileValidator.enableValidation();

export const popupEditProfile = new PopupWithForm(
  ".container-profile",
  addProfileInfo
);
popupEditProfile.setEventListeners();

function addImageCard(values) {
  if (values.name != "" && values.link != "") {
    const card = new Card(
      {
        name: values.name,
        link: values.link,
      },
      ".grid__template",
      (card) => popupImage.open(card)
    );
    const newCard = card.createCard();
    cards.prepend(newCard);
  }
  addImage.classList.add("formButton_disabled");
  addImage.setAttribute("disabled", true);
  popupAddCard.close();
}
export const popupAddCard = new PopupWithForm(".container-image", addImageCard);
popupAddCard.setEventListeners();

const popupImage = new PopupWithImage(
  ".popup__bigImage-container",
  ".popup__open-bigImage",
  ".popup__subtitle-bigImage"
);
popupImage.setEventListeners();

const saveProfile = document.querySelector(".input__submit-save");

const addImage = document.querySelector(".input__submit-add");
const popupAddImage = document.querySelector(".input-image");

editButton.addEventListener("click", () => {
  const userProfileInfo = userInfo.getUserInfo();
  addName.value = userProfileInfo.name;
  addJob.value = userProfileInfo.about;
  popupEditProfile.open();
});

function renderCards(cardContent) {
  const card = new Card(cardContent, format.cardTemplate, (card) =>
    popupImage.open(card)
  );

  const newCard = card.createCard();
  sectionCards.setItem(newCard);
}

const sectionCards = new Section(
  { items: initialCards, renderer: renderCards },
  format
);
sectionCards.renderItems();

const formImageValidator = new FormValidator(config, popupAddImage);
formImageValidator.enableValidation();
