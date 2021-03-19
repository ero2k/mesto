export default class Section {
    constructor({items,renderer}, selector){
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = selector;
    }

    setItem(element) {
        this._container.prepend(element);
      }

    renderItems(fun) {
      fun.then(res => res.json()).then(data => console.log(data))
      // fun.forEach(item => {
      //   console.log(item)
      //     // this._renderer(item);
      //   });
      }
}