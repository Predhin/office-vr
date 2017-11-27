export default class EmployeeMOdelComponent {
    constructor(selector) {      
      this.init();
    }
    init(){    
      console.log("init employee model component");
      this.templateInit();
      this.setPropertiesAddEventListeners();
    }
    templateInit(){
      document.querySelector('a-scene').addEventListener('loaded', function (){
                var noticeBoardItem1El = document.createElement('a-entity');
                noticeBoardItem1El.setAttribute('employee-model','');
                document.querySelector('a-scene').appendChild(noticeBoardItem1El);            
        });    
    }
    setPropertiesAddEventListeners (){
      AFRAME.registerComponent('employee-model',{
        init: function (){
          var emply = this.el;
          emply.setAttribute('geometry',{primitive: 'plane', width:0.610, height: 2});
          emply.setAttribute('material',{opacity:0.0, transparent: true});
          //emply.setAttribute('material',{color:'#CCC'});
          emply.setAttribute('position',{x:18.578, y:1.539, z:-2.781 });
          emply.setAttribute('rotation',{x:0, y:46, z:0});

          
          emply.addEventListener('mouseenter', function (){
              console.log('employee model mouse entered');
              var soundEl = document.querySelectorAll('a-entity[sound]');
              for(var s=0; s<soundEl.length; s++){
                  if(soundEl[s].id =='office-welcome'){
                      soundEl[s].components.sound.playSound();
                      //soundEl[s].components.sound.pauseSound();
                  }
              }
          });
          //     emply.addEventListener('mouseleave', function (){
          //   });
        }
      });
    }
  }