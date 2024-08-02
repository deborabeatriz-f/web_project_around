// VARIABLES
const modal = document.querySelector(".popup__container");
const editButton = document.querySelector(".profile__button-edit");
const addButton = document.querySelector(".input__submit-add");
const closeEditButton = document.querySelector(".popup__button-close");
const page = document.querySelector(".popup");
const popupEditProfile = document.querySelector(".popup__input");

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
