export default class Card {
  constructor(
    cardData,
    template,
    openImagePopup,
    openPopupCofirmation,
    handleLike
  ) {
    this._cardData = cardData;
    this._template = template;
    this._openImagePopup = openImagePopup;
    this._openPopupConfirmation = openPopupCofirmation;
    this._handleLike = handleLike;
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
    const likedHeart = this._cardElement.querySelector(".button-heart-liked");
    const unlikedHeart = this._cardElement.querySelector(
      ".button-heart-unliked"
    );

    if (this._cardData.isLiked) {
      likedHeart.style.display = "block";
      unlikedHeart.style.display = "none";
    }

    this._cardElement
      .querySelectorAll(".grid__button-heart")
      .forEach((buttonHeart) => {
        buttonHeart.addEventListener("click", (event) => {
          if (event.target.classList.contains("button-heart-unliked")) {
            // chama api e adiciona o like
            this._handleLike(this._cardData._id, true);
            likedHeart.style.display = "block";
            unlikedHeart.style.display = "none";
          } else {
            // chama api e remove o like
            this._handleLike(this._cardData._id, false);
            unlikedHeart.style.display = "block";
            likedHeart.style.display = "none";
          }
        });
      });
  }

  _deleteCard() {
    this._cardElement
      .querySelector(".grid__card-delete")
      .addEventListener("click", (event) => {
        this._openPopupConfirmation(
          this._cardData._id,
          event.target.parentElement
        );
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
