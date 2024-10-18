export default class Card {
  constructor(cardData, template) {
    this._cardData = cardData;
    this._template = template;
  }

  createCard() {
    const cardTemplate = document.querySelector(this._template).content;
    const cardElement = cardTemplate
      .querySelector(".grid__card")
      .cloneNode(true);
    cardElement.querySelector(".grid__card-title").textContent =
      this._cardData.name;
    cardElement
      .querySelector(".grid__card-image")
      .setAttribute("src", this._cardData.link);
    cardElement
      .querySelector(".grid__card-image")
      .setAttribute("alt", this._cardData.name);

    // HEART(LIKE) BUTTON - metodo privado para ser manipulador
    cardElement
      .querySelectorAll(".grid__button-heart")
      .forEach((buttonHeart) => {
        buttonHeart.addEventListener("click", (event) => {
          if (event.target.classList.contains("button-heart-unliked")) {
            cardElement.querySelector(".button-heart-liked").style.display =
              "block";
            cardElement.querySelector(".button-heart-unliked").style.display =
              "none";
          } else {
            cardElement.querySelector(".button-heart-unliked").style.display =
              "block";
            cardElement.querySelector(".button-heart-liked").style.display =
              "none";
          }
        });
      });

    // DELETE BUTTON - metodo privado para ser manipulador
    cardElement
      .querySelector(".grid__card-delete")
      .addEventListener("click", (event) => {
        event.target.parentElement.remove();
      });

    // OPEN POPUP BIG IMAGE
    cardElement
      .querySelector(".grid__card-image")
      .addEventListener("click", (event) => {
        openBigImage.setAttribute("src", this._cardData.link);
        openBigImage.setAttribute("alt", this._cardData.name);
        subtitleBigImage.textContent = this._cardData.name;

        modalBigImage.style.display = "block";
      });

    return cardElement;
  }
}
