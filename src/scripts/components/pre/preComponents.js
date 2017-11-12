import LogComponent from "./log/logComponent";
import NoticeBoardComponent from "./noticeBoard/noticeBoardComponent";
import ClockComponent from "./clock/clockComponent";
export default class PreComponents {
  constructor() {
    // initialize pre-components from here initialised on head tag
    new LogComponent();
    new NoticeBoardComponent();
    new ClockComponent();
  }
}
new PreComponents();