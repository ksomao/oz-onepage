import React, {Component} from 'react';
import styled from 'styled-components'
import Navbar from "../components/Nav";
import HomeHeaderContent
  from "./HomeHeaderContent";


class HomeHeader extends Component {
  render() {
    return (
      <Container className={'HomeHeader-container'}>
        <div className="overlay"/>
        <Navbar/>
        <HomeHeaderContent/>
      </Container>
    );
  }
}


const Container = styled.div``

export default HomeHeader;
