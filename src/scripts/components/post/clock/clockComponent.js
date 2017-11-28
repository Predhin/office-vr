export default class ClockComponent{
    constructor(selector){
        this.init();       
    }
    init(){ 
        console.log('In clock component');
        this.templateInit();
        this.setProperties();
        this.eventHandlers();        
    }
    templateInit(){
        
          document.querySelector('a-scene').addEventListener('loaded', function (){              
                  var clockItem1El = document.createElement('a-entity');
                  clockItem1El.setAttribute('clock-item1','');
                  clockItem1El.setAttribute('get-clock-mosein','');
                  document.querySelector('a-scene').appendChild(clockItem1El);
                  var clockItem2El = document.createElement('a-entity');
                  clockItem2El.setAttribute('clock-item2','');
                  clockItem2El.setAttribute('get-clock-mosein','');
                  document.querySelector('a-scene').appendChild(clockItem2El);
                  var clockItem3El = document.createElement('a-entity');
                  clockItem3El.setAttribute('clock-item3','');
                  clockItem3El.setAttribute('get-clock-mosein','');
                  document.querySelector('a-scene').appendChild(clockItem3El);                               
          });
        
      }
      setProperties (){
        AFRAME.registerComponent('clock-item1',{
          init: function (){
            var clkItem1 = this.el;
            clkItem1.setAttribute('geometry',{primitive: 'plane', width:0.65, height: 0.65});
            clkItem1.setAttribute('material',{opacity:0.0, transparent: true});
            clkItem1.setAttribute('position',{x:-7.85, y:3.24, z:-6.05});
            clkItem1.setAttribute('rotation',{x:0, y:90, z:0});
          }
        });
        AFRAME.registerComponent('clock-item2',{
          init: function (){
            var clkItem2 = this.el;
            clkItem2.setAttribute('geometry',{primitive: 'plane', width:0.7, height: 0.7});
            clkItem2.setAttribute('material',{opacity:0.0, transparent: true});
            clkItem2.setAttribute('position',{x:13.45, y:3.4, z:-4.85});
            clkItem2.setAttribute('rotation',{x:0, y:0, z:0});
          }
        });
        AFRAME.registerComponent('clock-item3',{
            init: function (){
              var clkItem2 = this.el;
              clkItem2.setAttribute('geometry',{primitive: 'plane', width:0.7, height: 0.7});
              clkItem2.setAttribute('material',{opacity:0.0, transparent: true});
              clkItem2.setAttribute('position',{x:11.8, y:3, z:8.65});
              clkItem2.setAttribute('rotation',{x:0, y:-90, z:0});
            }
          });         
      }
      eventHandlers (){
        AFRAME.registerComponent('get-clock-mosein',{
            init: function () {
                var el = this.el;
                var cameraElement = document.getElementById('sceneCamera');  
                var createdEl;
                el.addEventListener('mouseenter', function (){
                    console.log('Element Clock 1 mouse entered');
                    var d = new Date();
                    var hr = d.getHours();
                    var min = d.getMinutes();
                    hr = hr < 10 ? '0'+hr : hr; 
                    min = min < 10 ? '0'+min : min;
                    var time = 'Time is :  '+hr+' : '+min;
                    createdEl = document.createElement('a-entity');
                    createdEl.setAttribute('text',{value:time, color:'#EF3701'});
                    createdEl.setAttribute('position',{x:0.3,y:0.05,z:-0.7});
                    cameraElement.appendChild(createdEl);
                });
                  el.addEventListener('mouseleave', function (){
                    console.log('Element Clock 1 mouse leaved');
                    createdEl.parentNode.removeChild(createdEl);  
                });
            }
        });
            
      }
}