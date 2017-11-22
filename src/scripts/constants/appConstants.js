export default class AppConstants {
  static LANDING_ROUTE() {
    if (LOCAL_WEBPACK_BUILD) {
      // webpack build
      return "index.html";
    } else {
      // production build
      return "";
    }
  }
  static OFFICE_ROUTE() {
    if (LOCAL_WEBPACK_BUILD) {
      // webpack build
      return "office.html";
    } else {
      // production build
      return "office";
    }
  }
}