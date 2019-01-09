import React from 'react'
import styled from 'styled-components'
import {LanguageContext} from "../Context/LanguageProvider";
import getText from "../i18n";
import Logo from "./Logo";
import {createMarkup} from "../Utils";

const LogoPath = process.env.PUBLIC_URL + '/assets/img/logo.svg';

class HomeFooterSection extends React.Component {
  static contextType = LanguageContext;

  render() {
    const findUsTitle = getText(this.context.lang, "home", "footerSection.findUs.title")
    const findUsText = getText(this.context.lang, "home", "footerSection.findUs.text")
    const contactTitle = getText(this.context.lang, "home", "footerSection.contact.title")
    const contactText = getText(this.context.lang, "home", "footerSection.contact.text")
    const getInTouchTitle = getText(this.context.lang, "home", "footerSection.getInTouch.title")
    const getInTouchText = getText(this.context.lang, "home", "footerSection.getInTouch.text")
    const getInTouchLink = getText(this.context.lang, "home", "footerSection.getInTouch.link.title")
    const copyright = getText(this.context.lang, "home", "footerSection.copyright")
    return (
      <Container className={"footerSection"}>
        <div
          className="container footer-container">
          <div className="row">
            <div className="col-lg-4">
              <Logo inverted={true}/>
              <div className="social">
                <div>
                  <a className={"socialLinks"}
                     href="">LindedIn</a>
                </div>
                <div>
                  <a className={"socialLinks"}
                     href="">Facebook</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="col-12 footer-findUs mb-4">
                <h2>{findUsTitle}</h2>
                <p
                  dangerouslySetInnerHTML={createMarkup(findUsText)}/>
              </div>
              <div
                className="col-12 footer-contact mb-4">
                <h2>{contactTitle}</h2>
                <a
                  href={""}
                  className={"links"}
                  dangerouslySetInnerHTML={createMarkup(contactText)}/>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="col-12 footer-contact">
                <h2
                  dangerouslySetInnerHTML={createMarkup(getInTouchTitle)}/>
                <p
                  className={"p-0 m-0"}
                  dangerouslySetInnerHTML={createMarkup(getInTouchText)}/>
                <a className={'getInTouchLink'}
                   href="">{getInTouchLink}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className={"copy"}>{copyright}</div>
        </div>
      </Container>
    )
  }
}

const Container = styled.footer`
margin-top: 64px;
background:#EDEDED;
padding-top: 40px; 
padding-bottom: 16px;
.footer-container{
  position: relative;
}
.footer-contact{
  font-weight: 400;
  font-size: 20px;
}
.copy{
  margin-top: 20px;
  bottom: 0;
  left: 0;
  margin-bottom: 16px;
}
h2{
  font-size: 24px;
  font-weight: 600;
}
p{
  font-size: 20px;
  font-weight: 400;
  color: rgba(0,0,0,0.7);
}
.socialLinks{
  font-size: 24px;
  font-weight: 600;
  color:'black';
  margin-left: 15px;
 
  &:visited{
    color: black;
  }
}
.social{
  margin-bottom: 20px;
}
.getInTouchLink{
    color: #FCC231;
    font-size: 24px;
    font-weight: 600;
    text-decoration:underline;
}

@media (min-width: 994px){
  .socialLinks{
  margin-left: 0;
}
}
`

export default HomeFooterSection;
