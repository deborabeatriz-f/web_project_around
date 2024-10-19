// INITIAL IMAGES - GRID CARD
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

const closeAddButton = document.querySelector(".button-closeImage");
const addImageButton = document.querySelector(".profile__button-add");
const modalImage = document.querySelector(".container-image");

const modalProfile = document.querySelector(".container-profile");
const closeEditButton = document.querySelector(".button-closeProfile");
const editButton = document.querySelector(".profile__button-edit");

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

export function closePopUp() {
  modalImage.style.display = "none";
}

function closeAddPopupWithEsc(event) {
  if (event.key == "Escape") {
    modalImage.style.display = "none";
  }
}
document.addEventListener("keydown", closeAddPopupWithEsc);

// OPEN POPUP - PROFILE EDIT
function appearEditPopUp() {
  modalProfile.style.display = "block";
}
editButton.addEventListener("click", appearEditPopUp);

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

export function closePopUpProfile(){
   modalProfile.style.display = "none";
}

function closeEditPopupWithEsc(event) {
  if (event.key == "Escape") {
    modalProfile.style.display = "none";
  }
}
document.addEventListener("keydown", closeEditPopupWithEsc);
