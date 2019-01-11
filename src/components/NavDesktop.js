import React from 'react'
import $ from 'jquery';
import styled from 'styled-components'
import Logo from "./Logo";


class NavDesktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      inverted: false
    };
  }

  componentDidMount() {
    let $this = this

    $(document).ready(function () {
      var distance = $('.agency-container').offset().top, $window = $('body');
      $('.nav-desktop ul li span').css({
        color: 'white',
        fontWeight: 100,
      })
      $('.nav-desktop').css({background: 'none'})
      $('.nav-desktop ul li select').css({color: 'white'})

      $window.scroll(() => {
        if ($window.scrollTop() >= distance - 200) {
          $('.nav-desktop ul li span').css({
            color: 'black',
            fontWeight: 500,
          })
          $('.nav-desktop ul li select').css({color: 'black'})
          $('.nav-desktop').css({background: 'white'})
          $this.setState({inverted: true});
        }
        else {
          $('.nav-desktop ul li span').css({
            color: 'white',
            fontWeight: 100,
          })
          $('.nav-desktop').css({background: 'none'})
          $('.nav-desktop ul li select').css({color: 'white'})

          $this.setState({inverted: false});
        }
      });
    });
  }


  componentWillUnmount() {
    $('body').unbind('scroll');
  }


  render() {
    return (
      <Nav className={"nav-desktop"}>
        <div className="container s-container">
          <div>
            <Logo inverted={this.state.inverted}/>
          </div>
          <ul>
            {this.props.children}
           {/* <li>
              <LanguageSelector/>
            </li>*/}
          </ul>
        </div>
      </Nav>
    )
  }
}

export default NavDesktop

const Nav = styled.nav`
color:rgba(0,0,0,0);
width: 100%;
position: fixed;
display: flex;
justify-content: space-between;
z-index: 10;
.s-container{
  background:rgba(0,0,0,0);
  display: flex;
  justify-content: space-between;
}
.logo{
  height: 50px;
  margin: 16px;
}
ul{
  left: 0;
  padding-top: 26px;
  display: flex;
  list-style: none;
  li{
    margin-left: 16px;
    color: white;
    span{
      font-size:24px ;
      font-weight: 100;
      text-decoration: none;
      &:visited{
        color:white;
      }
      &:hover{
        color:white;
        cursor: pointer;
      }
    }
    select{
      background:none;
      color:white;
      margin-left: 10px;
      margin-top: 8px;
      font-weight: 500;
      option{
        color:white;
        background:none;
      }
    }
  }
}
`