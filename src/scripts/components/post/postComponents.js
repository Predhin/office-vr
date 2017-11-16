import Comp1Component from "./comp1/comp1Component";
import NoticeBoardComponent from "./noticeBoard/noticeBoardComponent";
import ClockComponent from "./clock/clockComponent.js";
import CameraListenerComponent from "./cameraListener/CameraListenerComponents.js";
export default class PostComponents {
  constructor() {
    // initialize post-components from here initialised just before body end tag
    // comp 1
    new Comp1Component();
    this.init();        
  }
  init (){
    AFRAME.registerComponent('load-custom-scene',{
      init:function (){
        new NoticeBoardComponent();
        new ClockComponent();
      }
    });
    new CameraListenerComponent();
  }
}
new PostComponents();