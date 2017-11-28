export default class EntryMonitorComponent{
    constructor (){
        this.init();
    }
    init(){
        AFRAME.registerComponent('on-entry-monitor',{
            init: function (){
                var el = this.el;
                var play = false;
                el.addEventListener('click',function (){
                    if(play){
                        console.log('pause');
                        play=false;           
                        document.getElementById('soundEntry').components.sound.stopSound();
                    } else{
                        console.log('play');
                        play=true; 
                        document.getElementById('soundEntry').components.sound.playSound();
                    }
                    
                });  
            }
        });
    }
}