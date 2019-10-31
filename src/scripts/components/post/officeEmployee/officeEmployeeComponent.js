export default class OfficeEmployeeComponent {
    constructor() {
        this.init();
    }
    init() {
        this.templateInit();
        this.setProperties();
        this.eventHandlers();
    }
    templateInit() {
        document.querySelector('a-scene').addEventListener('loaded', function () {
            var officeEmployeeEl = document.createElement('a-entity');
            officeEmployeeEl.setAttribute('office-employee', '');
            officeEmployeeEl.setAttribute('start-guy-speech','');
            document.querySelector('a-scene').appendChild(officeEmployeeEl);
        });

    }
    setProperties() {
        AFRAME.registerComponent('office-employee', {
            init: function () {
                var officeEmployeeEl = this.el;
                officeEmployeeEl.setAttribute('geometry', { primitive: 'plane', width: 0.610, height: 0.5 });
                officeEmployeeEl.setAttribute('material', { opacity: 0.0, transparent: true });
                officeEmployeeEl.setAttribute('position', { x: 4.205, y: 2.601, z: -9.77});
                officeEmployeeEl.setAttribute('rotation', { x: 12.4, y: -2.349, z: 0 });                
            }
        });
    }
    eventHandlers(){
        AFRAME.registerComponent('start-guy-speech',{
            init: function (){
                var elmnt = this.el;
                elmnt.addEventListener('mouseenter',function(){
                    document.getElementById('officeEmployeeGuySpeech').components.sound.playSound();
                });                
            }
        });
    }
    registerComponents() {
        AFRAME.registerComponent('start-speech', {
            init: function () {
                var elmnt = this.el;
                elmnt.addEventListener('mouseenter', function () {
                    console.log('office man model mouse entered');
                    document.getElementById('office-welcome').components.sound.playSound();
                });
            }
        });
    }
}