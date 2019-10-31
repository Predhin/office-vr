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
                var employeeWomenModel = document.createElement('a-entity');
                employeeWomenModel.setAttribute('employee-model','');
                document.querySelector('a-scene').appendChild(employeeWomenModel); 
                var managerModel = document.createElement('a-entity');
                managerModel.setAttribute('manager-model','');
                document.querySelector('a-scene').appendChild(managerModel);            
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
      AFRAME.registerComponent('manager-model',{
        init: function (){
          var emply = this.el;
          emply.setAttribute('geometry',{primitive: 'plane', width:0.610, height: 1});
          emply.setAttribute('material',{opacity:0.0, transparent: true});
          //emply.setAttribute('material',{color:'#CCC'});
          emply.setAttribute('position',{x:6.964, y:2.013, z:12.841 });
          emply.setAttribute('rotation',{x:0, y:-176.987, z:0});

          
          emply.addEventListener('mouseenter', function (){
              console.log('manager model mouse entered');
              var soundEl = document.querySelectorAll('a-entity[sound]');
              for(var s=0; s<soundEl.length; s++){
                  if(soundEl[s].id =='manager-voice'){
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