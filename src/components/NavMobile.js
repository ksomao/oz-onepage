import React from 'react'
import styled from 'styled-components'
import {LanguageContext} from "../Context/LanguageProvider";
import Logo from "./Logo";
import $ from "jquery";

const menu = process.env.PUBLIC_URL + '/assets/img/menu.svg';
const menuDark = process.env.PUBLIC_URL + '/assets/img/menuDark.svg';

class NavMobile extends React.Component {
  static contextType = LanguageContext;

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      value: "fr",
      inverted: false
    };

  }

  componentDidMount() {
    let $this = this

    $(document).ready(function () {
      var distance = $('.agency-container').offset().top,
        $window = $('body');
      $('.nav-mobile ul li span').css({
        color: 'white',
        fontWeight: 100,
      })
      $('.nav-mobile ul li select').css({color: 'white'})

      $window.scroll(() => {
        if ($window.scrollTop() >= distance - 210) {
          $('.nav-mobile ul li select').css({color: 'black'})
          $('.nav-mobile-container').css({background: 'white'})
          $this.setState({inverted: true});
        }
        else {
          $('.nav-mobile ul li select').css({color: 'White'})
          $('.nav-mobile-container').css({background: 'none'})
          $this.setState({inverted: false});
        }
      });
    });

  }

  toggleMobileMenu() {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <Nav className={'nav-mobile'}>
        <div className="nav-mobile-container">
          <div className={'header'}>
            <div className="logo-wrapper">
              <Logo
                inverted={this.state.inverted}/>
{/*
              <LanguageSelector/>
*/}
            </div>
            <div
              onClick={this.toggleMobileMenu.bind(this)}>
              <img className={"menuIcon"}
                   src={this.state.inverted ? menuDark : menu}
                   alt=""/>
            </div>
          </div>
          <div
            className={'container-cs ' + (this.state.isOpen ? '' : 'd-none')}>
            <ul>
              {this.props.children}
            </ul>
            <button
              onClick={this.toggleMobileMenu.bind(this)}
              className={"button-close " + (this.state.isOpen ? '' : 'd-none')}>
              <span
                className={"text-white"}>X</span>
            </button>
          </div>
        </div>
      </Nav>
    )
  }
}

export default NavMobile
const Nav = styled.nav`
.nav-mobile-container{
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  z-index: 10;
.header{
  display: flex;
  width: 100%;
  padding: 16px;
  justify-content: space-between;
  .logo-wrapper{
    display: flex;
    .logo{
      height: 36px;
    }
  }
  select{
    color:white;
    margin-left: 10px;
    margin-top: 8px;
      option{
        color:white;
        background:black;
      }
  }
  .menuIcon{
    margin-top: 8px;
    margin-right: 16px;
    height: 24px;
  }
}
.container-cs{
  padding: 16px;
  background:rgba(0,0,0,0.9);
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 10;
  ul{
    left: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
    li{
      margin-left: 16px;
      margin-bottom: 8px;
      span{
        font-size:24px ;
        font-weight: 100;
        color:white;
        text-decoration: none;
        &:visited{
          color:white;
        }
        &:hover{
          color:white;
        }
      }
      button{
        font-weight: 600;
        padding: 8px;
        margin-top: 10px;
        color: white;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid #FFFFFF;
        border-radius: 10px;
      }
    }
  }
  .button-close {
    border-radius: 100px;
    border: none;
    height: 40px;
    width: 40px;
    background:rgba(255,255,255,0.5);
    margin-right: 16px;
    span{
      font-size: 16px;
      font-weight: 500;
    }
    &:hover{
      cursor: pointer;
    }
  }
}
}
`