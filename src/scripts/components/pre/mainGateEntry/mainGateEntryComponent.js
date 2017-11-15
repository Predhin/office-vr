export default class MainGateEntryComponent {
    constructor(selector) {      
      this.init();
    }
    init(){    
      console.log("init main gate entry");
      this.eventHandlers();  
    }
    eventHandlers (){
        AFRAME.registerComponent('building-main-gate', {
            init: function () {
              var el = this.el;
              var createdEl;
              el.addEventListener('navigation-end', function (){
                  console.log('Main gate entry clicked'); 
                  var location = window.location.href; 
                  location = location.split("/");
                  if(location.length>1){
                    location[location.length-1] = "index.html";
                  }  
                  setTimeout(function() {
                  window.location.href = location.join("/");
                  }, 0);             
              });
            }
          });  
          
    }
  }