export default class CameraListenerComponents{
    constructor (){
        this.init();
    }
    init (){
        var positionObj,sceneName;
        document.getElementById('sceneCamera').addEventListener('componentchanged', function (evt,a,b) {
            if (evt.detail.name !== 'position') { return; }
            //console.log(evt.detail.newData);
            console.log(evt.detail.target.getAttribute('position'));
            positionObj = evt.detail.target.getAttribute('position');
            sceneName = this.getAttribute("scene-name");
            if(sceneName === 'in'){
                //Notice Board
                if(positionObj.x>3.4 && positionObj.x<4.6 && positionObj.z<-5.8 && positionObj.z >-7){
                    document.getElementById('notice-board-tr').setAttribute('visible', false);
                }
                else{
                    document.getElementById('notice-board-tr').setAttribute('visible', true);   
                }

                //Toilet-out
                if(positionObj.x>-8.5 && positionObj.x<-4.5 && positionObj.z<3 && positionObj.z>1){
                    document.getElementById('tlt-out-tr').setAttribute('visible', false);
                }
                else{
                    document.getElementById('tlt-out-tr').setAttribute('visible', true);   
                }

                //Toilet-in
                if(positionObj.x>-12.5 && positionObj.x<-9 && positionObj.z<1 && positionObj.z >0.2){
                    document.getElementById('tlt-in-tr').setAttribute('visible', false);
                }
                else{
                    document.getElementById('tlt-in-tr').setAttribute('visible', true);   
                }
                //office-bay-out
                if(positionObj.x>20.30770564550668  && positionObj.x<22.028883144080968 && positionObj.z<-2.177395621056991){
                        var location = window.location.href; 
                        location = location.split("/");
                        if(location.length>1){
                            location[location.length-1] = "outside.html";
                        }  
                        setTimeout(function() {
                            window.location.href = location.join("/");
                        }, 0);    
                    //document.getElementById('tlt-in-tr').setAttribute('visible', false);
                }
            }
            else if(sceneName === 'out'){
                //office-bay-in
                if(positionObj.x>-0.27605577415742544  && positionObj.x<0.36647626082554974 && positionObj.z<1.6916169745572174){
                        var location = window.location.href; 
                        location = location.split("/");
                        if(location.length>1){
                            location[location.length-1] = "index.html";
                        }  
                        setTimeout(function() {
                            window.location.href = location.join("/");
                        }, 0);    
                    //document.getElementById('tlt-in-tr').setAttribute('visible', false);
                }
            }
          });
    }
}