import FormValidator from "./FormValidator.js";

// função que tem um objeto como parametro
const config = {
  formSelector: "form",
  inputSelector: "input",
  inputErrorClass: "invalid-input",
  errorClass: "input__errorMessage-show",
  popupButton: ".input__submit",
};

// VARIABLES
const modalProfile = document.querySelector(".container-profile");
const saveProfile = document.querySelector(".input__submit-save");
const closeEditButton = document.querySelector(".button-closeProfile");
const popupEditProfile = document.querySelector(".input-profile");
const editButton = document.querySelector(".profile__button-edit");

const modalImage = document.querySelector(".container-image");
const addImage = document.querySelector(".input__submit-add");
const closeAddButton = document.querySelector(".button-closeImage");
const popupAddImage = document.querySelector(".input-image");
const addImageButton = document.querySelector(".profile__button-add");
const cards = document.querySelector(".grid__content");
const inputImageTitle = document.querySelector(".input__text-title");
const inputImageUrl = document.querySelector(".input__text-image");

const modalBigImage = document.querySelector(".popup__bigImage-container");
const openBigImage = document.querySelector(".popup__open-bigImage");
const subtitleBigImage = document.querySelector(".popup__subtitle-bigImage");
const closeBigImage = document.querySelector(".popoup__buttonClose-bigImage");

// CLOSE POPUP - PROFILE EDIT
function closeEditPopUp(event) {
  if (event.target == closeEditButton) {
    modalProfile.style.display = "none";
  }
  if (event.target == modalProfile) {
    modalProfile.style.display = "none";
  }
}
closeEditButton.addEventListener("click", closeEditPopUp);
modalProfile.addEventListener("click", closeEditPopUp);

function closeEditPopupWithEsc(event) {
  if (event.key == "Escape") {
    modalProfile.style.display = "none";
  }
}
document.addEventListener("keydown", closeEditPopupWithEsc);

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
  modalProfile.style.display = "none";
}
const formProfileValidator = new FormValidator(config, popupEditProfile);
popupEditProfile.addEventListener("submit", addProfileInfo);

// OPEN POPUP - PROFILE EDIT
function appearEditPopUp() {
  formProfileValidator.enableValidation();
  modalProfile.style.display = "block";
}
editButton.addEventListener("click", appearEditPopUp);

// OPEN POPUP - ADD IMAGE
function appearAddPopUp() {
  modalImage.style.display = "block";
}
addImageButton.addEventListener("click", appearAddPopUp);

// CLOSE POPUP - ADD IMAGE
function closeAddPopUp(event) {
  if (event.target == closeAddButton) {
    modalImage.style.display = "none";
  }
  if (event.target == modalImage) {
    modalImage.style.display = "none";
  }
}
closeAddButton.addEventListener("click", closeAddPopUp);
modalImage.addEventListener("click", closeAddPopUp);

function closeAddPopupWithEsc(event) {
  if (event.key == "Escape") {
    modalImage.style.display = "none";
  }
}
document.addEventListener("keydown", closeAddPopupWithEsc);

// INITIAL IMAGES - GRID CARD
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

// CARDS IMAGE GRID
initialCards.forEach((card) => {
  const newCard = createCard(card);
  cards.prepend(newCard);
});

function createCard(card) {
  const cardTemplate = document.querySelector(".grid__template").content;
  const cardElement = cardTemplate.querySelector(".grid__card").cloneNode(true);
  cardElement.querySelector(".grid__card-title").textContent = card.name;
  cardElement.querySelector(".grid__card-image").setAttribute("src", card.link);
  cardElement.querySelector(".grid__card-image").setAttribute("alt", card.name);

  // HEART(LIKE) BUTTON
  cardElement.querySelectorAll(".grid__button-heart").forEach((buttonHeart) => {
    buttonHeart.addEventListener("click", (event) => {
      if (event.target.classList.contains("button-heart-unliked")) {
        cardElement.querySelector(".button-heart-liked").style.display =
          "block";
        cardElement.querySelector(".button-heart-unliked").style.display =
          "none";
      } else {
        cardElement.querySelector(".button-heart-unliked").style.display =
          "block";
        cardElement.querySelector(".button-heart-liked").style.display = "none";
      }
    });
  });

  // DELETE BUTTON
  cardElement
    .querySelector(".grid__card-delete")
    .addEventListener("click", (event) => {
      event.target.parentElement.remove();
    });

  // OPEN POPUP BIG IMAGE
  cardElement
    .querySelector(".grid__card-image")
    .addEventListener("click", (event) => {
      openBigImage.setAttribute("src", card.link);
      openBigImage.setAttribute("alt", card.name);
      subtitleBigImage.textContent = card.name;

      modalBigImage.style.display = "block";
    });

  return cardElement;
}

// CLOSE POPUP BIG IMAGE
function closeBigImagePopUp() {
  modalBigImage.style.display = "none";
}
closeBigImage.addEventListener("click", closeBigImagePopUp);

// ADD NEW CARD IMAGE
function addImageCard(event) {
  event.preventDefault();

  if (inputImageTitle.value != "" && inputImageUrl.value != "") {
    const newCard = createCard({
      name: inputImageTitle.value,
      link: inputImageUrl.value,
    });
    cards.prepend(newCard);
    inputImageTitle.value = "";
    inputImageUrl.value = "";
  }
  addImage.classList.add("formButton_disabled");
  addImage.setAttribute("disabled", true);
  modalImage.style.display = "none";
}
addImage.addEventListener("click", addImageCard);
