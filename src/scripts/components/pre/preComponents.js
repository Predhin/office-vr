import LogComponent from "./log/logComponent";
import AframeExtraComponent from "./aframeExtra/aframeExtraComponent";
export default class PreComponents {
  constructor() {
    // initialize pre-components from here initialised on head tag
    new LogComponent();        
    new AframeExtraComponent();
  }
}
new PreComponents();