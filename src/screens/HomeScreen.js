import React, {Component} from 'react';
import styled from 'styled-components'
import HomeHeader from "../components/HomeHeader";
import HomeAgencySection
  from "../components/HomeAgencySection";
import HomeExpertiseSection
  from "../components/HomeExpertiseSection";
import HomeProjectsSection
  from "../components/HomeProjectsSection";
import HomeTeamSection
  from "../components/HomeTeamSection";
import HomeFooterSection
  from "../components/HomeFooterSection";


class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <HomeHeader/>
        <HomeAgencySection/>
        <HomeExpertiseSection/>
        <HomeProjectsSection/>
        <HomeTeamSection/>
        <HomeFooterSection/>
      </Container>
    );
  }
}


const Container = styled.div``

export default HomeScreen;
