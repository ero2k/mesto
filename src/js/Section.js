export default class Section {
  constructor({
    items,
    renderer
  }, selector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = selector;
  }

  setItem(element) {
    this._container.prepend(element);
  }

  renderItems(myprofile) {

    myprofile.then(myprofileData => {
        return myprofileData
      })
      .then(myprofileData => this._renderedItems.then(data =>
        data.forEach(item => {
          if (myprofileData._id == item.owner._id) {
            this._renderer(item, true);
          } else {
            this._renderer(item, false);
          }
        })

      ))
  }
}