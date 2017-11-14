import LogComponent from "./log/logComponent";
import NoticeBoardComponent from "./noticeBoard/noticeBoardComponent";
import ClockComponent from "./clock/clockComponent";
import AframeExtraComponent from "./aframeExtra/aframeExtraComponent";
export default class PreComponents {
  constructor() {
    // initialize pre-components from here initialised on head tag
    new LogComponent();
    window.onload = function (){
      new NoticeBoardComponent();
      new ClockComponent();
    };    
    new AframeExtraComponent();
  }
}
new PreComponents();