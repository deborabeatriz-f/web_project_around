export default class Card {
  constructor(cardData, template, openImagePopup) {
    this._cardData = cardData;
    this._template = template;
    this._openImagePopup = openImagePopup;
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
    this._cardElement
      .querySelector(".grid__card-image")
      .addEventListener("click", () => {
        this._openImagePopup({
          link: this._cardData.link,
          name: this._cardData.name,
        });
      });
  }
}
