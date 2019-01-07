import React from "react";
import {LanguageContext} from "../Context/LanguageProvider";
import styled from "styled-components";
import {createMarkup} from "../Utils";


export default class TeamItem extends React.Component {
  static contextType = LanguageContext;

  renderSocial(item) {
    if (item.linkedIn && item.github) {
      return (
        <div>
          <a className={"linkedin"}
             href={item.linkedIn}>LinkedIn</a> /
          <a className={"github"}
             href={item.github}>github</a>
        </div>
      )
    }
    else if (item.linkedIn) {
      return (
        <div>
          <a className={"linkedin"}
             href={item.linkedIn}>LinkedIn</a>
        </div>
      )
    }
    else {
      return (
        <div>
          <a className={"github"}
             href={item.github}>github</a>
        </div>
      )
    }
  }

  render() {
    const {item} = this.props;
    return (
      <Container>
        <h2
          className={"team-item-name"}>{item.nom}</h2>
        <h3
          className={"team-item-title"}>{item.title}</h3>
        <h3
          className={"team-item-quote"}>{item.quote}</h3>
        <h3 className={"team-item-social"}
            dangerouslySetInnerHTML={createMarkup(item.social)}/>
        {this.renderSocial(item)}
      </Container>
    );
  }
}

const Container = styled.div`
margin-bottom: 32px;
.team-item-name{
  font-weight: 600;
  font-size: 24px;
}
.team-item-title{
  font-weight: 700;
  font-size: 20px;
  color: #FCC231;
}
.team-item-quote{
  font-weight: 400;
  font-size: 20px;
  color: rgba(0,0,0,0.7);
}
.github,.linkedin{
  font-weight: 400;
  font-size: 20px;
  color: rgba(0,0,0,0.7);
  &:hover{
    cursor: pointer;
  }
  &:visited{
    color: black;
  }
}
.linkedInLink{
  display: none;
}
`