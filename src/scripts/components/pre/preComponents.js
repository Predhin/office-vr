import LogComponent from "./log/logComponent";
import MainGateEntryComponent from "./mainGateEntry/mainGateEntryComponent";
import AframeExtraComponent from "./aframeExtra/aframeExtraComponent";
export default class PreComponents {
  constructor() {
    // initialize pre-components from here initialised on head tag
    new LogComponent();
    window.onload = function (){
      console.log("//////document is ready for manupulation///////");
      new MainGateEntryComponent();
    };    
    new AframeExtraComponent();
  }
}
new PreComponents();