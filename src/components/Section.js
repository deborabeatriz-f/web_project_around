export default class Section {
  constructor({ items, renderer }, format) {
    this._items = items;
    this._renderer = renderer;
    this._container = format.cards;
    this._format = format;
  }

  setItem(element) {
    this._container.append(element);
  }

  renderItems() {
    this._items.forEach((cardContent) => {
      this._renderer(cardContent);
    });
  }
}
