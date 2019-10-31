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
                        //soundCtrl('play');
                        // document.getElementById('aframe_video').components.material.material.map.image.pause();
                        document.getElementById('carrer_vid').pause();                        
                        document.getElementById('videoSound').components.sound.stopSound();
                    } else{
                        console.log('play');
                        play=true; 
                        soundCtrl('pause');
                        document.getElementById('soundEntry').components.sound.stopSound();
                        // document.getElementById('aframe_video').components.material.material.map.image.play();
                        document.getElementById('carrer_vid').load();
                        document.getElementById('carrer_vid').play();
                        document.getElementById('videoSound').components.sound.playSound();
                    }
                    
                });   
                
                //sound on all the backgroud sounds when scene is ready
                document.querySelector('a-scene').addEventListener('loaded', function (){
                    setTimeout(function() {
                        soundCtrl('play',true);
                    }, 2000); 
                });

                 
                
                //sound on all the backgroud sounds when scene is ready
                document.getElementById('videoSound').addEventListener('sound-ended', function (){
                    soundCtrl('play'); 
                });


                function soundCtrl(action,isFirstTime){
                    var soundEl = document.querySelectorAll('a-entity[sound]');
                    for(var s=0; s<soundEl.length; s++){
                        if((isFirstTime || (!isFirstTime && soundEl[s].id !=='office-welcome')) && soundEl[s].id !== 'manager-voice'){
                            if(action === 'play'){
                                soundEl[s].components.sound.playSound();
                            }
                            if(action === 'pause'){
                                soundEl[s].components.sound.pauseSound();
                            }
                        }
                    }
                    //document.getElementById('carrer_vid').play();
                }
            }
        });
    }
}