import React from 'react'
import Responsive
  from 'react-responsive-decorator';
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import $ from 'jquery';
import getText from "../i18n";
import {LanguageContext} from "../Context/LanguageProvider";


class Navbar extends React.Component {
  static contextType = LanguageContext;

  constructor(props) {
    super(props);


    this.toggle = this.toggle.bind(this);
    this.child = React.createRef();
    this.state = {
      isMobile: false
    };
  }


  componentDidMount() {
    this.props.media({maxWidth: 1286}, () => {
      this.setState({
        isMobile: true
      });
    });

    this.props.media({minWidth: 1286}, () => {
      this.setState({
        isMobile: false
      });
    });
  }

  toggle() {
    this.setState({
      isMobile: !this.state.isMobile,
      scrolling: false,
    });
  }

  scroll(ev, section, offset = 0, isMobile) {
    ev.preventDefault()
    var page = $(`.${section}`)
    var speed = 750
    $('html, body').animate({scrollTop: $(page).offset().top + offset}, speed)
    if (isMobile) {
      this.child.current.toggleMobileMenu()
    }
  }

  render() {
    return (
      <div>
        {this.state.isMobile ?
          <NavMobile ref={this.child}>
            <li className="nav-item">
              <span
                onClick={(ev) => this.scroll(ev, 'agencySection', 0, true)}>
                {getText(this.context.lang, "home", "nav.agency")}</span>
            </li>
            <li className="nav-item">
              <span
                onClick={(ev) => this.scroll(ev, 'expertiseSection', 0, true)}>
                {getText(this.context.lang, "home", "nav.expertise")}</span>
            </li>
            <li className="nav-item">
              <span
                onClick={(ev) => this.scroll(ev, 'projectsStorage', 0, true)}
              >{getText(this.context.lang, "home", "nav.projects")}</span>
            </li>
            <li
              className="nav-item">
              <span
                onClick={(ev) => this.scroll(ev, 'teamSection', 0, true)}
              >{getText(this.context.lang, "home", "nav.team")}</span>
            </li>
            <li
              className="nav-item contact-button">
              <span
                onClick={(ev) => this.scroll(ev, 'footerSection', 0, true)}>
                {getText(this.context.lang, "home", "nav.contact")}
              </span>
            </li>
          </NavMobile> :
          <NavDesktop>
            <li className="nav-item">
              <span
                onClick={(ev) => this.scroll(ev, 'agencySection', 0, false)}>
                {getText(this.context.lang, "home", "nav.agency")}</span>
            </li>
            <li className="nav-item">
              <span
                onClick={(ev) => this.scroll(ev, 'expertiseSection', 0, false)}>
                {getText(this.context.lang, "home", "nav.expertise")}</span>
            </li>
            <li className="nav-item">
              <span
                onClick={(ev) => this.scroll(ev, 'projectsSection', 0, false)}
              >{getText(this.context.lang, "home", "nav.projects")}</span>
            </li>
            <li
              className="nav-item">
              <span
                onClick={(ev) => this.scroll(ev, 'teamSection', 0, false)}
              >{getText(this.context.lang, "home", "nav.team")}</span>
            </li>
            <li
              className="nav-item contact-button">
              <span
                onClick={(ev) => this.scroll(ev, 'footerSection', 0, false)}>
                {getText(this.context.lang, "home", "nav.contact")}
              </span>
            </li>
          </NavDesktop>
        }
      </div>
    )
  }
}

export default Responsive(Navbar)
