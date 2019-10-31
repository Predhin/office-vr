import Comp1Component from "./comp1/comp1Component";
import NoticeBoardComponent from "./noticeBoard/noticeBoardComponent";
import EmployeeMOdelComponent from "./employeeModel/employeeModelComponent";
import ClockComponent from "./clock/clockComponent.js";
import CameraListenerComponent from "./cameraListener/cameraListenerComponents.js";
import ProjectorComponent from "./projector/projectorComponent.js";
import EntryMonitorComponent from "./entryMonitor/entryMonitorComponent.js";
import OfficeEmployeeComponent from "./officeEmployee/officeEmployeeComponent.js";
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
        new EmployeeMOdelComponent();
        new ClockComponent();
        new OfficeEmployeeComponent();
      }
    });
    new CameraListenerComponent();
    new ProjectorComponent();
    new EntryMonitorComponent();
  }
}
new PostComponents();