import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import {
  initialCards,
  closePopUp,
  closePopUpProfile,
  format,
  cards,
  editButton,
  appearEditPopUp,
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

const saveProfile = document.querySelector(".input__submit-save");
const popupEditProfile = document.querySelector(".input-profile");

const addImage = document.querySelector(".input__submit-add");
const popupAddImage = document.querySelector(".input-image");
const inputImageTitle = document.querySelector(".input__text-title");
const inputImageUrl = document.querySelector(".input__text-image");

function addProfileInfo(event) {
  event.preventDefault();

  userInfo.setUserInfo(addName.value, addJob.value);

  popupEditProfile.reset();
  saveProfile.classList.add("formButton_disabled");
  saveProfile.setAttribute("disabled", true);
  closePopUpProfile();
}
const formProfileValidator = new FormValidator(config, popupEditProfile);
formProfileValidator.enableValidation();
popupEditProfile.addEventListener("submit", addProfileInfo);

editButton.addEventListener("click", () =>
  appearEditPopUp(userInfo.getUserInfo())
);

// ---------------------  CARDS  --------------------------------
// SPRINT 11

function renderCards(cardContent) {
  const card = new Card(cardContent, format.cardTemplate);
  const newCard = card.createCard();
  sectionCards.setItem(newCard);
}

const sectionCards = new Section(
  { items: initialCards, renderer: renderCards },
  format
);
sectionCards.renderItems();

//-----------------------------------------------------------------

function addImageCard(event) {
  event.preventDefault();
  if (inputImageTitle.value != "" && inputImageUrl.value != "") {
    const card = new Card(
      {
        name: inputImageTitle.value,
        link: inputImageUrl.value,
      },
      ".grid__template"
    );
    const newCard = card.createCard();
    cards.prepend(newCard);
    inputImageTitle.value = "";
    inputImageUrl.value = "";
  }
  addImage.classList.add("formButton_disabled");
  addImage.setAttribute("disabled", true);
  closePopUp();
}
const formImageValidator = new FormValidator(config, popupAddImage);
formImageValidator.enableValidation();
addImage.addEventListener("click", addImageCard);
