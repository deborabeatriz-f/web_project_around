// VARIABLES
const page = document.querySelector(".popup");

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
const inputImageTitle = document.querySelector(".input__text-titulo");
const inputImageUrl = document.querySelector(".input__text-image");

// OPEN POPUP - PROFILE EDIT
function appearEditPopUp() {
  modalProfile.style.display = "block";
  page.style.display = "block";
}
editButton.addEventListener("click", appearEditPopUp);

// CLOSE POPUP - PROFILE EDIT
function closeEditPopUp() {
  modalProfile.style.display = "none";
  page.style.display = "none";
}
closeEditButton.addEventListener("click", closeEditPopUp);

// GET PROFILE INFOS FROM INPUT
function addProfileInfo(event) {
  event.preventDefault();

  const name = document.querySelector(".profile__title");
  const job = document.querySelector(".profile__subtitle");
  const addName = document.querySelector(".input__text-name");
  const addJob = document.querySelector(".input__text-job");

  name.textContent = addName.value;
  job.textContent = addJob.value;

  closeEditPopUp();
}
popupEditProfile.addEventListener("submit", addProfileInfo);

// OPEN POPUP - ADD IMAGE
function appearAddPopUp() {
  modalImage.style.display = "block";
  page.style.display = "block";
}
addImageButton.addEventListener("click", appearAddPopUp);

// CLOSE POPUP - ADD IMAGE
function closeAddPopUp() {
  modalImage.style.display = "none";
  page.style.display = "none";
}
closeAddButton.addEventListener("click", closeAddPopUp);

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
  cardElement
    .querySelector(".grid__button-heart")
    .addEventListener("click", (event) => {
      if (event.target.getAttribute("src") === "../images/heart_icon.png") {
        return event.target.setAttribute("src", "../images/heart-clicked.png");
      }
      return event.target.setAttribute("src", "../images/heart_icon.png");
    });

  // DELETE BUTTON
  cardElement
    .querySelector(".grid__card-delete")
    .addEventListener("click", (event) => {
      event.target.parentElement.remove();
    });

  return cardElement;
}

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
}
addImage.addEventListener("click", addImageCard);

// HEART(LIKE) BUTTON - Sprint 7
// const hearts = document.querySelectorAll("#grid__button-heart");

// function heartButton(event) {
//   let heart = event.target;
//   if (heart.classList.contains("grid__button-heart")) {
//     heart.classList.remove("grid__button-heart");
//     heart.classList.add("heart-clicked");
//   } else {
//     heart.classList.remove("heart-clicked");
//     heart.classList.add("grid__button-heart");
//   }
// }
// hearts.forEach((heart) => heart.addEventListener("click", heartButton));
