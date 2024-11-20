import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import {
  // initialCards,
  // closePopUp,
  // closePopUpProfile,
  format,
  cards,
  editButton,
  // appearEditPopUp,
  addName,
  addJob,
} from "../components/utils.js";
import api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

const userInfo = new UserInfo(
  ".profile__title",
  ".profile__subtitle",
  ".profile__image"
);

// Informações do Usuário
let userInfoObj;

api.getUserInfo().then((result) => {
  userInfoObj = result;
  userInfo.setUserInfo(result.name, result.about, result.avatar);
});

// Função que tem um Objeto como Parametro
const config = {
  formSelector: ".popup__input",
  inputSelector: "input",
  inputErrorClass: "invalid-input",
  errorClass: "input__errorMessage-show",
  popupButton: ".input__submit",
};

// Adicionar e Alterar Informações do Usuário
function addProfileInfo(values) {
  userInfo.setUserInfo(values.name, values.about, userInfoObj.avatar);
  saveProfile.textContent = "Salvando...";
  api
    .setUserInfo(values.name, values.about)
    .finally(() => (saveProfile.textContent = "Salvar"));
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

// Editar Avatar
const popupAvatar = new PopupWithForm(".popup__container-avatar", editAvatar);
popupAvatar.setEventListeners();

const avatarBtn = document.querySelector(".profile__btn-avatar");
avatarBtn.addEventListener("click", () => popupAvatar.open());

function editAvatar(value) {
  userInfo.setUserInfo(userInfoObj.name, userInfoObj.about, value.avatar);
  const saveAvatar = document.querySelector(".input__submit-avatar");
  saveAvatar.textContent = "Salvando...";
  api
    .setAvatar(value.avatar)
    .finally(() => (saveAvatar.textContent = "Salvar"));
}

// Deletar Card
const popupDeleteConfirmation = new PopupWithConfirmation(
  ".popup__container-deleteCard",
  (id, cardElement) => {
    api.deleteCard(id).then(() => {
      cardElement.remove();
    });
  }
);
popupDeleteConfirmation.setEventListeners();

// Adicionar e Remover Like
function handleLike(idCard, isLiked) {
  if (!isLiked) {
    return api.unlikedCard(idCard);
  }
  return api.likedCard(idCard);
}

// Adicionar Nome e Imagem no Card
function addImageCard(values) {
  addImage.textContent = "Criando...";
  if (values.name != "" && values.link != "") {
    const card = new Card(
      {
        name: values.name,
        link: values.link,
      },
      ".grid__template",
      (card) => popupImage.open(card),
      (id, cardElement) => popupDeleteConfirmation.open(id, cardElement),
      (idCard, isLiked) => handleLike(idCard, isLiked)
    );
    const newCard = card.createCard();
    cards.prepend(newCard);

    api
      .newCard(values.name, values.link)
      .finally(() => (addImage.textContent = "Criar"));
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

// Cards Iniciais
function renderCards(cardContent) {
  const card = new Card(
    cardContent,
    format.cardTemplate,
    (card) => popupImage.open(card),
    (id, cardElement) => popupDeleteConfirmation.open(id, cardElement),
    (idCard, isLiked) => handleLike(idCard, isLiked)
  );

  const newCard = card.createCard();
  sectionCards.setItem(newCard);
}

let sectionCards;

api.getInitialCards().then((data) => {
  sectionCards = new Section(
    {
      items: data,
      renderer: (cardContent) => renderCards(cardContent),
    },
    format
  );
  sectionCards.renderItems();
});

const formImageValidator = new FormValidator(config, popupAddImage);
formImageValidator.enableValidation();
