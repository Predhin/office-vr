import LogComponent from "./log/logComponent";
export default class PreComponents {
  constructor() {
    // initialize pre-components from here initialised on head tag
    new LogComponent();
  }
}
new PreComponents();