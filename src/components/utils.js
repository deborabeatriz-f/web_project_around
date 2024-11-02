export const initialCards = [
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

//-----------------------------------------------------------------
// SPRINT 11

export const cards = document.querySelector(".grid__content");

export const format = {
  cardTemplate: ".grid__template",
  cards,
};

//-----------------------------------------------------------------

const closeAddButton = document.querySelector(".button-closeImage");
const addImageButton = document.querySelector(".profile__button-add");
const modalImage = document.querySelector(".container-image");

const modalProfile = document.querySelector(".container-profile");
const closeEditButton = document.querySelector(".button-closeProfile");
export const editButton = document.querySelector(".profile__button-edit");
export const addName = document.querySelector(".input__text-name");
export const addJob = document.querySelector(".input__text-job");

function appearAddPopUp() {
  modalImage.style.display = "block";
}
addImageButton.addEventListener("click", appearAddPopUp);

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

export function closePopUp() {
  modalImage.style.display = "none";
}

function closeAddPopupWithEsc(event) {
  if (event.key == "Escape") {
    modalImage.style.display = "none";
  }
}
document.addEventListener("keydown", closeAddPopupWithEsc);


export function appearEditPopUp(userProfileInfo) {
  modalProfile.style.display = "block";
  addName.value = userProfileInfo.name;
  addJob.value = userProfileInfo.about;
}
editButton.addEventListener("click", appearEditPopUp);

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

export function closePopUpProfile() {
  modalProfile.style.display = "none";
}

function closeEditPopupWithEsc(event) {
  if (event.key == "Escape") {
    modalProfile.style.display = "none";
  }
}
document.addEventListener("keydown", closeEditPopupWithEsc);
