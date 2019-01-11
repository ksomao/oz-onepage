import React from 'react'
import styled from 'styled-components'
import {LanguageContext} from "../Context/LanguageProvider";
import Slider from "./Slider";

class HomeProjectsSection extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <Container className={"projectsSection"}>
        <div className="container">
          <Slider/>
        </div>
      </Container>
    )
  }
}

export default HomeProjectsSection

const Container = styled.div`
padding-top: 100px;
`