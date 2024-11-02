export default class Card {
  constructor(cardData, template) {
    this._cardData = cardData;
    this._template = template;
  }

  createCard() {
    const cardTemplate = document.querySelector(this._template).content;
    this._cardElement = cardTemplate
      .querySelector(".grid__card")
      .cloneNode(true);
    this._cardElement.querySelector(".grid__card-title").textContent =
      this._cardData.name;
    this._cardElement
      .querySelector(".grid__card-image")
      .setAttribute("src", this._cardData.link);
    this._cardElement
      .querySelector(".grid__card-image")
      .setAttribute("alt", this._cardData.name);

    this._setEventListeners();

    return this._cardElement;
  }

  _setEventListeners() {
    this._likeButton();
    this._deleteCard();
    this._expandImage();
    this._closeImage();
  }

  _likeButton() {
    this._cardElement
      .querySelectorAll(".grid__button-heart")
      .forEach((buttonHeart) => {
        buttonHeart.addEventListener("click", (event) => {
          if (event.target.classList.contains("button-heart-unliked")) {
            this._cardElement.querySelector(
              ".button-heart-liked"
            ).style.display = "block";
            this._cardElement.querySelector(
              ".button-heart-unliked"
            ).style.display = "none";
          } else {
            this._cardElement.querySelector(
              ".button-heart-unliked"
            ).style.display = "block";
            this._cardElement.querySelector(
              ".button-heart-liked"
            ).style.display = "none";
          }
        });
      });
  }

  _deleteCard() {
    this._cardElement
      .querySelector(".grid__card-delete")
      .addEventListener("click", (event) => {
        event.target.parentElement.remove();
      });
  }

  _expandImage() {
    const modalBigImage = document.querySelector(".popup__bigImage-container");
    const openBigImage = document.querySelector(".popup__open-bigImage");
    const subtitleBigImage = document.querySelector(
      ".popup__subtitle-bigImage"
    );

    this._cardElement
      .querySelector(".grid__card-image")
      .addEventListener("click", (event) => {
        openBigImage.setAttribute("src", this._cardData.link);
        openBigImage.setAttribute("alt", this._cardData.name);
        subtitleBigImage.textContent = this._cardData.name;

        modalBigImage.style.display = "block";
      });
  }

  _closeImage() {
    const closeBigImage = document.querySelector(
      ".popoup__buttonClose-bigImage"
    );
    const modalBigImage = document.querySelector(".popup__bigImage-container");

    closeBigImage.addEventListener("click", () => {
      modalBigImage.style.display = "none";
    });
  }
}
