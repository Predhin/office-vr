export default class LogComponent {
  constructor(selector) {
    // comp1
    this.init();
  }
  init(){
    console.log("init log component");
    // https://aframe.io/docs/0.7.0/introduction/javascript-events-dom-apis.html
    AFRAME.registerComponent('log', {
      schema: {type: 'string'},
      init: function () {
        var stringToLog = this.data;
        console.log(stringToLog);
      }
    });
  }
}