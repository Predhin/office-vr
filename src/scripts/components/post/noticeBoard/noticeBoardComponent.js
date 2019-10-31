export default class NoticeBoardComponent {
  constructor(selector) {      
    this.init();
  }
  init(){    
    console.log("init notice board component");
    this.templateInit();
    this.setProperties();
    this.eventHandlers();  
  }
  templateInit(){
    document.querySelector('a-scene').addEventListener('loaded', function (){
          /*<a-entity get-notice1-mosein
              geometry="primitive: plane; width:0.5; height: 0.7" material="opacity:0.0; transparent: true" position="6.8 3.28 -7.9" rotation="0 -90 0"></a-entity>  
    <a-entity get-notice2-mosein
              geometry="primitive: plane; width:0.8; height: 0.75" material="opacity:0.0; transparent: true" position="6.8 3.2 -6.2" rotation="0 -90 0"></a-entity>  
    <a-entity get-notice3-mosein
              geometry="primitive: plane; width:0.4; height: 0.65" material="opacity:0.0; transparent: true" position="6.8 1.83 -6.26" rotation="0 -90 8"></a-entity>
    <a-entity get-clock1-mosein
              geometry="primitive: plane; width:.65; height: .65" material="opacity: 0.0; transparent: true" position="-7.85 3.24 -6.05" rotation="0 90 0"></a-entity> 
              */
              var noticeBoardItem1El = document.createElement('a-entity');
              noticeBoardItem1El.setAttribute('notice-board-item1','');
              noticeBoardItem1El.setAttribute('get-notice1-mosein','');
              document.querySelector('a-scene').appendChild(noticeBoardItem1El);
              var noticeBoardItem2El = document.createElement('a-entity');
              noticeBoardItem2El.setAttribute('notice-board-item2','');
              noticeBoardItem2El.setAttribute('get-notice2-mosein','');
              document.querySelector('a-scene').appendChild(noticeBoardItem2El);
              var noticeBoardItem3El = document.createElement('a-entity');
              noticeBoardItem3El.setAttribute('notice-board-item3','');
              noticeBoardItem3El.setAttribute('get-notice3-mosein','');
              document.querySelector('a-scene').appendChild(noticeBoardItem3El);              
      });    
  }
  setProperties (){
    AFRAME.registerComponent('notice-board-item1',{
      init: function (){
        var nbItem1 = this.el;
        nbItem1.setAttribute('geometry',{primitive: 'plane', width:0.5, height: 0.7});
        nbItem1.setAttribute('material',{opacity:0.0, transparent: true});
        nbItem1.setAttribute('position',{x:6.8, y:3.28, z:-7.9});
        nbItem1.setAttribute('rotation',{x:0, y:-90, z:0});
      }
    });
    AFRAME.registerComponent('notice-board-item2',{
      init: function (){
        var nbItem2 = this.el;
        nbItem2.setAttribute('geometry',{primitive: 'plane', width:0.8, height: 0.75});
        nbItem2.setAttribute('material',{opacity:0.0, transparent: true});
        nbItem2.setAttribute('position',{x:6.8, y:3.2, z:-6.2});
        nbItem2.setAttribute('rotation',{x:0, y:-90, z:0});
      }
    });
    AFRAME.registerComponent('notice-board-item3',{
      init: function (){
        var nbItem3 = this.el;
        nbItem3.setAttribute('geometry',{primitive: 'plane', width:0.4, height: 0.65});
        nbItem3.setAttribute('material',{opacity:0.0, transparent: true});
        nbItem3.setAttribute('position',{x:6.8, y:1.83, z:-6.26});
        nbItem3.setAttribute('rotation',{x:0, y:-90, z:8});
      }
    });
  }
  eventHandlers (){
      AFRAME.registerComponent('get-notice1-mosein', {
          init: function () {
            var el = this.el;
            var imageEl;
            el.addEventListener('mouseenter', function (){
                console.log('Element Notice 1 mouse entered');
                imageEl = document.getElementById('notice_image1');
                imageEl.setAttribute('visible',true);
            });
              el.addEventListener('mouseleave', function (){
                console.log('Element Notice 1 mouse leaved');
                imageEl.setAttribute('visible',false);  
            });
          }
        });  
        AFRAME.registerComponent('get-notice2-mosein', {
          init: function () {
            var el = this.el;
            var imageEl;
            el.addEventListener('mouseenter', function (){
                console.log('Element Notice 2 mouse entered');
                imageEl = document.getElementById('notice_image2');
                imageEl.setAttribute('visible',true);                                
            });
              el.addEventListener('mouseleave', function (){
                console.log('Element Notice 2 mouse leaved');
                imageEl.setAttribute('visible',false);  
            });
          }
        });
        AFRAME.registerComponent('get-notice3-mosein', {
          init: function () {
            var el = this.el;
            var imageEl;
            el.addEventListener('mouseenter', function (){
                console.log('Element Notice 3 mouse entered');
                imageEl = document.getElementById('notice_image3');
                imageEl.setAttribute('visible',true); 
            });
              el.addEventListener('mouseleave', function (){
                console.log('Element Notice 3 mouse leaved');
                imageEl.setAttribute('visible',false);  
            });
          }
        });
        
  }
}