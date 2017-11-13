var extras = require('aframe-extras');
export default class AframeExtraComponent {
  constructor(selector) {
    // comp1
    this.init();
  }
  init() {
    console.log("init checkpoint component");
    // https://aframe.io/docs/0.7.0/introduction/javascript-events-dom-apis.html
    // Register a checkpoint component.
    AFRAME.registerComponent('checkpoint', extras.misc.checkpoint);

    // Register a particular package, and its dependencies.
    extras.controls.registerAll();

    // Register everything.
    extras.registerAll();
  }
}