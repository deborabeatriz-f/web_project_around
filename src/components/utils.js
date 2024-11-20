import { popupEditProfile, popupAddCard } from "../pages/index.js";
// import api from "../components/Api.js";

// export let initialCards = [];
// api.getInitialCards().then((data) => {
//   console.log(data);
//   initialCards.push({ ...data });
// });

// export const initialCards = [
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

export const cards = document.querySelector(".grid__content");

export const format = {
  cardTemplate: ".grid__template",
  cards,
};

const closeAddButton = document.querySelector(".button-closeImage");
const addImageButton = document.querySelector(".profile__button-add");

const closeEditButton = document.querySelector(".button-closeProfile");
export const editButton = document.querySelector(".profile__button-edit");
export const addName = document.querySelector(".input__text-name");
export const addJob = document.querySelector(".input__text-job");

addImageButton.addEventListener("click", () => popupAddCard.open());
closeAddButton.addEventListener("click", () => popupAddCard.close());

closeEditButton.addEventListener("click", () => popupEditProfile.close());
