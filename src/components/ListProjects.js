import React from 'react'
import styled from 'styled-components'
import {LanguageContext} from "../Context/LanguageProvider";


class ListProjects extends React.Component {
  static contextType = LanguageContext;

  render() {
    let {list, activeIndex, changeSlide} = this.props

    return (
      <Container className="list-container">
        {list.map((item, index) => (
          <div key={item.titleBis}
               onClick={() => changeSlide(index)}>
            <p
              className={(activeIndex === index ? 'active' : '')}>{item.titleBis}</p>
          </div>
        ))}
      </Container>
    )
  }
}

const Container = styled.div`
margin-bottom: 32px;
display: none;
div{
 &:hover{
   cursor: pointer;
 }
}
.active{
  color:#0098FF;
  font-weight: 600;
}
p{
  color:rgba(0,0,0,0.5);
  font-size: 30px;
  font-weight: 100;
  margin-bottom: -4px;
}
@media (min-width: 992px){
  display: block;
}
`


export default ListProjects;
