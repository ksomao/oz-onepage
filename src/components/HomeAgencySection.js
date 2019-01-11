import React from 'react'
import styled from 'styled-components'
import {LanguageContext} from "../Context/LanguageProvider";
import getText from "../i18n";
import {createMarkup} from "../Utils";

const partnerImage = process.env.PUBLIC_URL + '/assets/img/partnershipImage.png';
const bgAboutImage = process.env.PUBLIC_URL + '/assets/img/bgAbout.png';

class HomeAgencySection extends React.Component {
  static contextType = LanguageContext;

  render() {
    let decoTitle2 = createMarkup(getText(this.context.lang, "home", "agencySection.decoTitle2"))
    return (
      <Container className={'agencySection'}>
        <div
          className="container agency-container">
          <div className="row">
            <div
              className="col-lg-6 agency-img-container ">
              <h2
                dangerouslySetInnerHTML={decoTitle2}/>
              <div>
              </div>
            </div>
            <div
              className="col-lg-6 agency-content">
              <h2>{getText(this.context.lang, "home", "agencySection.title")}</h2>
              <p>{getText(this.context.lang, "home", "agencySection.text")}</p>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default HomeAgencySection

const Container = styled.div`
position: relative;
.agency-container{
  background: url(${bgAboutImage});
}
.agency-img-container{
  width: 80%;
  height: 250px;
  background:url(${partnerImage}) no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  position: relative;
  h2{
    position: absolute;
    color: white;
    font-size: 50px;
    line-height: 40px;
    width: 100px;
    bottom: 32px;
    left: 16px;
  }
}
.agency-content{
  margin-top: -50px;
  position: relative;
  padding: 0;
  margin-left: -56px;
  .decoTitle{
    position: absolute;
    font-weight: 600;
    line-height: 110px;
    font-size: 100px;
    color:rgba(0,0,0,0.05);
    white-space: nowrap;
    margin-left: -54px;
  }
  h2{
    font-size: 36px;
    font-weight: 600;
  }
  p{
    font-weight: 400 ;
    line-height: 32px;
    font-size: 20px;
    max-width: 315px;  
    color:rgba(0,0,0,0.7)
  }
}
@media (min-width: 768px) { 
  padding: 160px;
  .agency-img-container{ 
    min-height: 500px;
    h2{
      font-size: 110px;
      line-height: 85px;
    }
}
  }
  .agency-content{
     margin-top: 40px;
     padding-left: 88px; 
     .decoTitle{
        font-size: 120px;
        margin-left: -86px;
    }
  }
}
`