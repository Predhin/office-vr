export default class NoticeBoardComponent {
  constructor(selector) {      
    this.init();
  }
  init(){
    console.log("init notice board component");
    AFRAME.registerComponent('get-notice1-mosein', {
      init: function () {
        var el = this.el;
        var cameraElement = document.getElementById('sceneCamera');  
        var createdEl;
        el.addEventListener('mouseenter', function (){
            console.log('Element Notice 1 mouse entered');
            createdEl = document.createElement('a-entity');
            createdEl.setAttribute('text',{value:'Notice 1', color:'red'});
            createdEl.setAttribute('position',{x:0.5,y:0.2,z:-0.8});
            cameraElement.appendChild(createdEl);
        });
          el.addEventListener('mouseleave', function (){
            console.log('Element Notice 1 mouse leaved');
            createdEl.parentNode.removeChild(createdEl);  
        });
      }
    });  
    AFRAME.registerComponent('get-notice2-mosein', {
      init: function () {
        var el = this.el;
        var cameraElement = document.getElementById('sceneCamera');  
        var createdEl;
        el.addEventListener('mouseenter', function (){
            console.log('Element Notice 2 mouse entered');
            createdEl = document.createElement('a-entity');
            createdEl.setAttribute('text',{value:'Notice 2', color:'red'});
            createdEl.setAttribute('position',{x:0.5,y:0.2,z:-0.8});
            cameraElement.appendChild(createdEl);
        });
          el.addEventListener('mouseleave', function (){
            console.log('Element Notice 2 mouse leaved');
            createdEl.parentNode.removeChild(createdEl);  
        });
      }
    });
    AFRAME.registerComponent('get-notice3-mosein', {
      init: function () {
        var el = this.el;
        var cameraElement = document.getElementById('sceneCamera');  
        var createdEl;
        el.addEventListener('mouseenter', function (){
            console.log('Element Notice 3 mouse entered');
            createdEl = document.createElement('a-entity');
            createdEl.setAttribute('text',{value:'Notice 3', color:'red'});
            createdEl.setAttribute('position',{x:0.5,y:0.2,z:-0.8});
            cameraElement.appendChild(createdEl);
        });
          el.addEventListener('mouseleave', function (){
            console.log('Element Notice 3 mouse leaved');
            createdEl.parentNode.removeChild(createdEl);  
        });
      }
    });  
  }
}