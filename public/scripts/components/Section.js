export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;

    this._container = containerSelector;
  }

  //отрисовка элементов
  render() {
    this._items.forEach((item) => {
      this._renderer(item)
    });
  }

  //добавление DOM-элемента в контейнер
  addItem(element) {
    this._container.prepend(element);
  }
}
