// VARIABLES
let modal = document.querySelector(".popup__container");
let editButton = document.querySelector(".profile__button-edit");
let addButton = document.querySelector(".input__submit-add");
let closeEditButton = document.querySelector(".popup__button-close");
let page = document.querySelector(".popup");

// PROFILE EDIT POPUP OPEN
function appearEditPopUp() {
  modal.style.display = "block";
  page.style.display = "block";
}
editButton.addEventListener("click", appearEditPopUp);

// PROFILE EDIT POPUP CLOSE
function closeEditPopUp() {
  modal.style.display = "none";
  page.style.display = "none";
}
closeEditButton.addEventListener("click", closeEditPopUp);

// GET PROFILE INFOS FROM INPUT
function addProfileInfo() {
  let name = document.querySelector(".profile__title");
  let job = document.querySelector(".profile__subtitle");
  let addName = document.querySelector(".input__text-name");
  let addJob = document.querySelector(".input__text-job");

  name.textContent = addName.value;
  job.textContent = addJob.value;
}
addButton.addEventListener("click", addProfileInfo);

// HEART(LIKE) BUTTON
let hearts = document.querySelectorAll("#grid__button-heart");

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
