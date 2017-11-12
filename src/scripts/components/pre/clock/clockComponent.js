export default class ClockComponent{
    constructor(selector){
        this.init();       
    }
    init(){
        console.log('In clock component');
        AFRAME.registerComponent('get-clock1-mosein',{
            init: function () {
                var el = this.el;
                var cameraElement = document.getElementById('sceneCamera');  
                var createdEl;
                el.addEventListener('mouseenter', function (){
                    console.log('Element Clock 1 mouse entered');
                    var d = new Date();
                    var hr = d.getHours();
                    var min = d.getMinutes();
                    var time = 'Time is :  '+hr+' : '+min;
                    createdEl = document.createElement('a-entity');
                    createdEl.setAttribute('text',{value:time, color:'red'});
                    createdEl.setAttribute('position',{x:0.5,y:0.2,z:-0.8});
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