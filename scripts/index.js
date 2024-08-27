// VARIABLES
const page = document.querySelector(".popup");
const modalProfile = document.querySelector(".container-profile");
const modalImage = document.querySelector(".container-image");
const saveProfile = document.querySelector(".input__submit-save");
const addImage = document.querySelector(".input__submit-add");
const closeEditButton = document.querySelector(".button-closeProfile");
const closeAddButton = document.querySelector(".button-closeImage");
const popupEditProfile = document.querySelector(".input-profile");
const popupAddImage = document.querySelector(".input-image");
const editButton = document.querySelector(".profile__button-edit");
const addImageButton = document.querySelector(".profile__button-add");

// COMO ADICIONAR NOVOS CARD AO GRID ???
const cardContainer = document.querySelector(".page__container");
const cardTitle = document.querySelector(".grid__card-title");
const cardImage = document.querySelector(".grid__card-image");

// INITIAL IMAGES - GRID CARD
// const initialCards = [
//   {
//     name: "Vale de Yosemite",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
//   },
//   {
//     name: "Lago Louise",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
//   },
//   {
//     name: "Montanhas Carecas",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
//   },
//   {
//     name: "Latemar",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
//   },
//   {
//     name: "Parque Nacional da Vanoise ",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
//   },
//   {
//     name: "Lago di Braies",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
//   },
// ];


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

// HEART(LIKE) BUTTON
const hearts = document.querySelectorAll("#grid__button-heart");

function heartButton(event) {
  let heart = event.target;
  if (heart.classList.contains("grid__button-heart")) {
    heart.classList.remove("grid__button-heart");
    heart.classList.add("heart-clicked");
  } else {
    heart.classList.remove("heart-clicked");
    heart.classList.add("grid__button-heart");
  }
}
hearts.forEach((heart) => heart.addEventListener("click", heartButton));
