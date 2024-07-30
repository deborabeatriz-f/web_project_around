// PROFILE EDIT BUTTON

let modal = document.querySelector(".profile__modal");
let editButton = document.querySelector(".profile__button-edit");
let addButton = document.querySelector(".input__submit-add");
let closeEditButton = document.querySelector(".modal__button-close");
let page = document.querySelector(".page");

function appearEditPopUp() {
  modal.style.display = "block";
  // FILTER - ADICIONAR CAMADA - COR
  // page.style.filter = "blur (10px)";
}
editButton.addEventListener("click", appearEditPopUp);

function closeEditPopUp() {
  modal.style.display = "none";
  // FILTER - RETIRAR CAMADA - COR
  // page.style.filter = "blur (0px)";
}
closeEditButton.addEventListener("click", closeEditPopUp);
modal.addEventListener("click", closeEditPopUp);

//INSERT HTML PROFILE INFOS FROM EDIT

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
