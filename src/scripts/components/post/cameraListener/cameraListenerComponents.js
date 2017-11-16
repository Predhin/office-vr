export default class CameraListenerComponents{
    constructor (){
        this.init();
    }
    init (){
        var positionObj;
        document.getElementById('sceneCamera').addEventListener('componentchanged', function (evt) {
            if (evt.detail.name !== 'position') { return; }
            //console.log(evt.detail.newData);
            console.log(evt.detail.target.getAttribute('position'));
            positionObj = evt.detail.target.getAttribute('position');
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
          });
    }
}