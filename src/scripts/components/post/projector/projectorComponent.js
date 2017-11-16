export default class ProjectorComponents{
    constructor (){
        this.init();
    }
    init(){
        AFRAME.registerComponent('on-projector',{
            init: function (){
                var el = this.el;
                var play = false;
                el.addEventListener('click',function (){
                    console.log('Clicked Monitor');  
                    if(play){
                        console.log('pause'); 
                        play=false;
                        document.getElementById('carrer_vid').pause();
                    } else{
                        console.log('play');
                        play=true; 
                        document.getElementById('carrer_vid').play();
                    }
                    
                });
            }
        });
    }
}