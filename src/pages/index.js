import "./index.css";

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";

// adicionar outras funções e variaveis de utils.js
import {
  initialCards,
  closePopUp,
  closePopUpProfile,
  format,
  cards,
} from "../components/utils.js";

// função que tem um objeto como parametro
const config = {
  formSelector: ".popup__input",
  inputSelector: "input",
  inputErrorClass: "invalid-input",
  errorClass: "input__errorMessage-show",
  popupButton: ".input__submit",
};

// variaveis popup editar perfil
const saveProfile = document.querySelector(".input__submit-save");
const popupEditProfile = document.querySelector(".input-profile");

//variaveis popup adicionar imagem
const addImage = document.querySelector(".input__submit-add");
const popupAddImage = document.querySelector(".input-image");
// const cards = document.querySelector(".grid__content");
const inputImageTitle = document.querySelector(".input__text-title");
const inputImageUrl = document.querySelector(".input__text-image");

// GET PROFILE INFOS FROM INPUT
function addProfileInfo(event) {
  event.preventDefault();

  const name = document.querySelector(".profile__title");
  const job = document.querySelector(".profile__subtitle");
  const addName = document.querySelector(".input__text-name");
  const addJob = document.querySelector(".input__text-job");

  name.textContent = addName.value;
  job.textContent = addJob.value;

  popupEditProfile.reset();
  saveProfile.classList.add("formButton_disabled");
  saveProfile.setAttribute("disabled", true);
  closePopUpProfile();
}
const formProfileValidator = new FormValidator(config, popupEditProfile);
formProfileValidator.enableValidation();
popupEditProfile.addEventListener("submit", addProfileInfo);

//-----------------------------------------------------------------
// SPRINT 11

function renderCards(cardContent) {
  const card = new Card(cardContent, format.cardTemplate);
  const newCard = card.createCard();
  // cards.prepend(newCard);
  sectionCards.setItem(newCard);
}

const sectionCards = new Section(
  { items: initialCards, renderer: renderCards },
  format
);
sectionCards.renderItems();

//-----------------------------------------------------------------

// CARDS IMAGE GRID

// initialCards.forEach((cardContent) => {
//   // const card = new Card(cardContent, ".grid__template");
//   // const newCard = card.createCard();
//   // cards.prepend(newCard);
// });

// ADD NEW CARD IMAGE
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
