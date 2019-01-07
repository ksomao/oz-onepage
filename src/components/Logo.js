import React from 'react'

const logo = process.env.PUBLIC_URL + '/assets/img/Logo.svg';
const logoDark = process.env.PUBLIC_URL + '/assets/img/LogoDark.svg';

class Logo extends React.Component {
  render() {
    return (
      <img className={"logo"} src={this.props.inverted ? logoDark : logo}
           alt="company logo"/>
    )
  }
}

export default Logo

