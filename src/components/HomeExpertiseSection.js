import React from 'react'
import styled from 'styled-components'
import {LanguageContext} from "../Context/LanguageProvider";
import getText from "../i18n";


class HomeExpertiseSection extends React.Component {
  static contextType = LanguageContext;

  render() {
    let leftContentList = getText(this.context.lang, "home", "expertiseSection.leftContent.list")
    let rightContentList = getText(this.context.lang, "home", "expertiseSection.rightContent.list")
    let title = getText(this.context.lang, "home", "expertiseSection.title")
    let leftTitle = getText(this.context.lang, "home", "expertiseSection.leftContent.title")
    let rightTitle = getText(this.context.lang, "home", "expertiseSection.rightContent.title")
    return (
      <Container className={"expertiseSection"}>
        <div className="container ">
          <h2
            className={'expertise-title col-12 col-md-7'}>{title}</h2>
          <div className="row expertise-row">
            <div
              className="expertise-content expertise-content-left col-12 col-sm-10 col-md-6">
              <h3
                className={'expertise-content-title expertise-content-left-title'}>{leftTitle}</h3>
              {leftContentList.map(item => (
                <div key={item.title}
                     className={'expertise-content-item'}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <div
              className="expertise-content expertise-content-right col-12 col-sm-10 col-md-6">
              <h3
                className={'expertise-content-title expertise-content-right-title'}>{rightTitle}</h3>
              {rightContentList.map(item => (
                <div
                  key={item.title}
                  className={'expertise-content-item'}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default HomeExpertiseSection

const Container = styled.div`
padding-top: 100px;
.expertise-content{
  padding-top:48px;
}

.expertise-title{
  font-weight: 600;
  margin-bottom: 30px;
}
.expertise-content-left{
  background:#FCB74B;
  display: flex;
  flex-direction: column;
}
.expertise-content-title{
  margin-bottom: 20px;
}
.expertise-content-left-title{
  color:white;
  display: block;
  max-width: 340px;
  width: 100%;
  font-weight: 600;
  padding-left: 22px;
  font-size: 40px;
  margin-bottom: 36px;
}
.expertise-content-right-title{
  font-weight: 600;
  color:white;
  font-size: 40px;
  margin-left: 22px;
  margin-bottom: 36px;
}
.expertise-content-right{
  background:#FCAE2C;
}
.expertise-content-item{
  margin-bottom: 16px;
  max-width: 340px;
  h3{
    font-weight: 600;
  }
  p{
    font-weight: 400;
    font-size: 20px;
    margin-left: 20px;
    line-height: 32px;
    color:rgba(0,0,0,0.7);
    margin-bottom: 64px;
  }
}
@media (min-width: 768px){
.expertise-row{
  position: relative;
  .expertise-title{
    position: absolute;
    top: -110px;
    left: 180px;
    z-index: 5;
    max-width: 600px;
    font-size: 36px;
    font-weight: 800;
  }
}
.expertise-content-left{
  background:#FCB74B;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 56px;
}

.expertise-content-left-title{
  color:white;
  display: block;
  max-width: 340px;
  width: 100%;
  align-self: flex-end;
  font-weight: 600;
  padding-left: 22px;
  font-size: 40px;
  margin-bottom: 20px;
}
.expertise-content-right{
  background:#FCAE2C;
  padding-left: 56px;
}
.expertise-content-item{
  height: 320px;
  max-width: 340px;
  h3{
    font-weight: 600;
  }
  p{
    font-weight: 400;
    font-size: 20px;
    margin-left: 20px;
    line-height: 32px;
    color:rgba(0,0,0,0.7);
    margin-bottom: 64px;
  }
}
}
`