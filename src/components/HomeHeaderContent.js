import React from 'react'
import styled from 'styled-components'
import {LanguageContext} from "../Context/LanguageProvider";
import getText from "../i18n";
/*
import $ from "jquery";
*/

const bg = process.env.PUBLIC_URL + '/assets/img/bg.png';

export default class HomeHeaderContent extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <Container className="header-container">
        <div className="container">
          <div className="inner"/>
          <div className="row">
            <div className="offset-md-1 col-md-7">
              <h1> {getText(this.context.lang, "home", "headerSection.title")}</h1>
              <a href={"https://jimmygoossens.typeform.com/to/GgjwAL"}> {getText(this.context.lang, "home", "headerSection.linkContact.text")}</a>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

const Container = styled.div`
padding-top:100px ;
min-height: 750px;
position: relative;
overflow: hidden;
.inner{
  position: absolute;
  background: url(${bg}) no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  animation: shrink 40s infinite linear;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
}
h1{
  font-weight: 500;
  line-height: 50px;
  font-size: 40px;
  margin-bottom: 64px;
  color: white;
}
a{
  color: #FCC231;  
  font-size: 30px;
  line-height: normal;
  text-decoration: underline;
  font-weight: 600 ;
  display: block;
  max-width: 164px;
  transition: all 0.2s ease;
 &:hover{
    cursor: pointer;
    color:#faaf00;
  }
  &:visited{
    cursor: pointer;
    color:#faaf00;
    text-decoration: underline;
  }
}
@media (min-width: 576px){
padding-top:200px ;
min-height: 750px;
position: relative;
overflow: hidden;
.inner{
  position: absolute;
  background: url(${bg}) no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  animation: shrink 40s infinite linear;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 110vh;
}
h1{
  font-weight: 500;
  line-height: 63px;
  font-size: 50px;
  margin-bottom: 64px;
  color: white;
}
a{
  color: #FCC231;  
  font-size: 30px;
  line-height: normal;
  display: block;
  text-decoration: underline;
  font-weight: 600 ;
  max-width: 164px;
  transition: all 0.2s ease;
  &:hover{
    cursor: pointer;
    color:#faaf00;
  }
  &:visited{
    cursor: pointer;
    color:#faaf00;
    text-decoration: underline;
  }
}
}
`