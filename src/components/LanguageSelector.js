import React from 'react'
import styled from 'styled-components'
import {LanguageContext} from "../Context/LanguageProvider";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  state = {
    value: "en"
  };

  handleChange(ev) {
    let value = ev.target.value
    this.setState({value})
    this.context.switchLanguage(value)
  }

  render() {
    return (
      <Select
        value={this.state.value}
        onChange={this.handleChange.bind(this)}>
        <option value="nl">NL</option>
        <option value="fr">FR</option>
        <option value="en">EN</option>
      </Select>
    )
  }
}

export default LanguageSelector

const Select = styled.select`
background:none;
margin-left: 8px;
border: none;
box-shadow: none;
 outline: 0 !important;
  border: 0 !important;
option{
  color:black;
  background:none;
}
`