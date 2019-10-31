export default class CameraListenerComponents {
    constructor() {
        this.init();
    }
    init() {
        var positionObj;
        document.getElementById('sceneCamera').addEventListener('componentchanged', function (evt, a, b) {
            if (evt.detail.name !== 'position') {
                return;
            }
            var location;
            //console.log(evt.detail.newData);
            //console.log(evt.detail.target.getAttribute('position'));
            positionObj = evt.detail.target.getAttribute('position');
            //Notice Board
            if (positionObj.x > 3 && positionObj.x < 4.6 && positionObj.z < -5.8 && positionObj.z > -8) {
                document.getElementById('notice-board-tr').setAttribute('visible', false);
                document.getElementById('notice-board-chk').setAttribute('visible', false);
                document.getElementById('notice-board-txt').setAttribute('visible', false);
            } else {
                document.getElementById('notice-board-tr').setAttribute('visible', true);
                document.getElementById('notice-board-chk').setAttribute('visible', true);
                document.getElementById('notice-board-txt').setAttribute('visible', true);
            }

            //Lobby
            if (positionObj.x > 10.7 && positionObj.x < 15 && positionObj.z < 2 && positionObj.z > -1) {
                document.getElementById('lobby-tr').setAttribute('visible', false);
                document.getElementById('lobby-chk').setAttribute('visible', false);
            } else {
                document.getElementById('lobby-tr').setAttribute('visible', true);
                document.getElementById('lobby-chk').setAttribute('visible', true);
            }


            //Home

            if (positionObj.x < 5.3 && positionObj.x > 0.5 && positionObj.z < 1.5 && positionObj.z > -1.5) {
                document.getElementById('home-tr').setAttribute('visible', false);
                document.getElementById('home-chk').setAttribute('visible', false);
            } else {
                document.getElementById('home-tr').setAttribute('visible', true);
                document.getElementById('home-chk').setAttribute('visible', true);
            }


            //Toilet-out
            if (positionObj.x > -9 && positionObj.x < -6 && positionObj.z < 3.5 && positionObj.z > -0.5) {
                document.getElementById('tlt-out-tr').setAttribute('visible', false);
                document.getElementById('tlt-out-chk').setAttribute('visible', false);
            } else {
                document.getElementById('tlt-out-tr').setAttribute('visible', true);
                document.getElementById('tlt-out-chk').setAttribute('visible', true);
            }

            //Toilet-in
            if (positionObj.x > -12.5 && positionObj.x < -9.5 && positionObj.z < 1 && positionObj.z > -1) {
                document.getElementById('tlt-in-tr').setAttribute('visible', false);
                document.getElementById('tlt-in-chk').setAttribute('visible', false);
            } else {
                document.getElementById('tlt-in-tr').setAttribute('visible', true);
                document.getElementById('tlt-in-chk').setAttribute('visible', true);
            }


            //Meeting-Inside
            if (positionObj.x > -6 && positionObj.x < -5 && positionObj.z > 4) {
                document.getElementById('meeting-in-tr').setAttribute('visible', false);
                document.getElementById('meeting-in-chk').setAttribute('visible', false);                
            } else if (positionObj.z > 5) {
                //enteredMeetingRoom = true;                
                document.getElementById('meeting-in-chk').setAttribute('visible', false);
            } else {
                document.getElementById('meeting-in-tr').setAttribute('visible', true);
                document.getElementById('meeting-in-chk').setAttribute('visible', true);
            }


            //Meeting-Outside
            /*if (positionObj.x > -10.3 && positionObj.x < -7 && positionObj.z < 5) {
                document.getElementById('meeting-out-tr').setAttribute('visible', false);
                document.getElementById('meeting-out-chk').setAttribute('visible', false);
            }*/
            if (positionObj.z < 5) {
                document.getElementById('meeting-out-chk').setAttribute('visible', false);
                document.getElementById('meeting-out-tr').setAttribute('visible', false);
                //document.getElementById('aframe_video').components.material.material.map.image.load();
                //document.getElementById('aframe_video').components.material.material.map.image.pause();
                document.getElementById('carrer_vid').load();
                document.getElementById('carrer_vid').pause();
                //document.getElementById('carrer_audio').load();
                //document.getElementById('carrer_audio').pause();
                document.getElementById('videoSound').components.sound.stopSound();
                /*var soundEl = document.querySelectorAll('a-entity[sound]');
                for (var s = 0; s < soundEl.length; s++) {
                    if (enteredMeetingRoom && soundEl[s].id !== 'office-welcome') {
                        soundEl[s].components.sound.playSound();
                    }
                }
                enteredMeetingRoom = false;*/
                //document.getElementById('carrer_vid').play();

            } else {
                document.getElementById('meeting-out-tr').setAttribute('visible', true);
                document.getElementById('meeting-out-chk').setAttribute('visible', true);
            }


            //Meeting-Seat
            if (positionObj.x > -14 && positionObj.x < -11.3 && positionObj.z < 10 && positionObj.z > 8) {
                document.getElementById('meeting-seat-tr').setAttribute('visible', false);
                document.getElementById('meeting-seat-chk').setAttribute('visible', false);
            } else {
                document.getElementById('meeting-seat-tr').setAttribute('visible', true);
                document.getElementById('meeting-seat-chk').setAttribute('visible', true);
            }


            //Manager-Inside
            if (positionObj.x > 0.9 && positionObj.x < 5 && positionObj.z > 4) {
                document.getElementById('manager-in-tr').setAttribute('visible', false);
                document.getElementById('manager-in-chk').setAttribute('visible', false);
            } else if (positionObj.z > 5) {
                document.getElementById('manager-in-chk').setAttribute('visible', false);
            } else {
                document.getElementById('manager-in-tr').setAttribute('visible', true);
                document.getElementById('manager-in-chk').setAttribute('visible', true);
            }


            //Manager-Outside
            if (positionObj.x > 2.9 && positionObj.x < 7 && positionObj.z < 4.9) {
                document.getElementById('manager-out-tr').setAttribute('visible', false);
                document.getElementById('manager-out-chk').setAttribute('visible', false);
            } else if (positionObj.z < 4.9) {
                document.getElementById('manager-out-chk').setAttribute('visible', false);
            } else {
                document.getElementById('manager-out-tr').setAttribute('visible', true);
                document.getElementById('manager-out-chk').setAttribute('visible', true);
            }


            //Manager-Seat
            if (positionObj.x > 3.8 && positionObj.x < 8 && positionObj.z > 6.5 && positionObj.z < 10.7) {
                document.getElementById('manager-seat-tr').setAttribute('visible', false);
                document.getElementById('manager-seat-chk').setAttribute('visible', false);
            } else {
                document.getElementById('manager-seat-tr').setAttribute('visible', true);
                document.getElementById('manager-seat-chk').setAttribute('visible', true);
            }


            //Exit
            if (positionObj.x > 19 && positionObj.x < 22 && positionObj.z > -5 && positionObj.z < 0.5) {
                document.getElementById('exit-tr').setAttribute('visible', false);
                document.getElementById('exit-chk').setAttribute('visible', false);
            } else {
                document.getElementById('exit-tr').setAttribute('visible', true);
                document.getElementById('exit-chk').setAttribute('visible', true);
            }


            //office-bay-out
            /*if (positionObj.x > 20.30770564550668 && positionObj.x < 22.028883144080968 && positionObj.z < -2.177395621056991) {
                location = window.location.href;
                location = location.split("/");
                if (location.length > 1) {
                    location[location.length - 1] = AppConstants.LANDING_ROUTE();
                }
                    window.location.href = location.join("/");
            }*/


        });
    }
}