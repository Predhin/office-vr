import Comp1Component from "./comp1/comp1Component";
export default class PostComponents {
  constructor() {
    // initialize post-components from here initialised just before body end tag
    // comp 1
    new Comp1Component();
  }
}
new PostComponents();