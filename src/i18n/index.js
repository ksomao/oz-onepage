import _ from "lodash";
import Home from "./Home";
import About from "./About";
import Project from "./Project";


const keyed = {
  home: Home,
  about: About,
  project: Project,
}


export default function getText(lang, category, path) {
  return _.get(keyed[category], path + "." + lang.toLowerCase(), "Invalid getText path: " + path);
}

export const allAt = (category, path) => {
  return _.keys(_.get(keyed[category]), path, "Invalid getText path: " + path);
}
