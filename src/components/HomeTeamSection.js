import React from 'react'
import styled from 'styled-components'
import {LanguageContext} from "../Context/LanguageProvider";
import getText from "../i18n";
import TeamItem from "./TeamItem";

class HomeTeamSection extends React.Component {
  static contextType = LanguageContext;

  render() {
    let title = getText(this.context.lang, "home", "teamSection.title")
    let text = getText(this.context.lang, "home", "teamSection.text")
    let team = getText(this.context.lang, "home", "teamSection.list")
    console.log(team);

    return (
      <Container className={"teamSection"}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 m-0 p-0">
              <h2
                className="col-12 team-title">{title}</h2>
              <p
                className="col-12 team-text">{text}</p>
            </div>
            <div className="col-md-7 offset-md-1  team-items-container">
              <div className="row">
                <div className="col-sm-6">
                  <TeamItem item={team.Valerian}/>
                  <TeamItem item={team.Max}/>
                </div>
                <div className="col-sm-6">
                  <TeamItem item={team.Kevin}/>
                  <TeamItem item={team.Jimmy}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default HomeTeamSection

const Container = styled.div`
.team-title{
  font-size: 36px;
  line-height: 43px;
  font-weight: 600;
}
.team-text{
  font-size: 20px;
  line-height: 32px;
  font-weight: 400;
}
.team-items-container{
  margin-top: 40px;
}
@media (min-width: 994px){
padding-top: 160px;
.team-items-container{
  margin-top: 80px;
}
}
`