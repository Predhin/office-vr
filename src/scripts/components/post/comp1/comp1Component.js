export default class Comp1Component {
  constructor(selector) {
    // comp1
    this.init();
  }
  init(){
    console.log("init comp1");
    var entityEl = document.querySelector('a-entity');
    entityEl.setAttribute('log', 'Hello, Entity!');
  }
}