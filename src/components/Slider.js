import React from 'react'
import styled from 'styled-components'
import {LanguageContext} from "../Context/LanguageProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RSlider from "react-slick";
import CustomSlide from "./CustomSilde";
import getText from "../i18n";
import ListProjects from "./ListProjects";
import {createMarkup} from "../Utils";

const bgProjects = process.env.PUBLIC_URL + '/assets/img/bgProjects.svg';

class Slider extends React.Component {
  static contextType = LanguageContext;
  state = {
    currentProjectIndex: 0
  }

  handleSlideChange(oldIndex, newIndex) {
    this.setState({currentProjectIndex: newIndex})
  }

  handleChildSlideChange(index) {
    this.slider.slickGoTo(index)
  }

  goToNextSlide() {
    this.slider.slickNext()
  }

  goToPrevSlide() {
    this.slider.slickPrev()
  }

  render() {
    let listProjects = getText(this.context.lang, "project", "list")
    let listProjectsTitle = getText(this.context.lang, "project", "title")
    let listProjectsDecoTitle = getText(this.context.lang, "project", "decoTitle")
    return (
      <Container>
        <div className="row p-sm-0">
          <div
            className="col-sm-10 col-lg-4 project-content">
            <h2
              className="project-title">{listProjectsTitle}</h2>
            <ListProjects list={listProjects}
                          changeSlide={this.handleChildSlideChange.bind(this)}
                          activeIndex={this.state.currentProjectIndex}/>
          </div>
          <div
            className="col-sm-12 col-lg-6 project-slider-container p-0">
            <RSlider className="slider"
                     ref={slider => (this.slider = slider)}
                     beforeChange={this.handleSlideChange.bind(this)}
                     {...settings}>
              {listProjects.map((item, index) =>
                <CustomSlide key={index}
                             prev={this.goToPrevSlide.bind(this)}
                             next={this.goToNextSlide.bind(this)}
                             item={item}/>
              )}
            </RSlider>
            <div
              className="project-deco-title-container">
              <h2 className={"project-deco-title"}
                  dangerouslySetInnerHTML={createMarkup(listProjectsDecoTitle)}/>
              <img className={"project-bg"}
                   src={bgProjects} alt=""/>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default Slider

const Container = styled.div`
position: relative;
.project-title{
  font-weight: 600;
  font-size: 36px;
  margin-top: 32px;
  margin-bottom: 16px;
}
.project-bg{
  opacity: 0.8;
}
.project-slider-container{
  position: relative;
}
.project-deco-title-container{
  position: absolute;
  z-index: -20;
  top: 0;
}
.project-deco-title{
  position: absolute;
  z-index: -20;
  right: 470px;
  font-weight: 600;
  line-height: 70px;
  font-size: 84px;
  color:rgba(0,0,0,0.1)
}

.slick-slider .slick-track, .slick-slider .slick-list{
  position: relative;
}
.slider{
  max-width: 430px;
  background:#0A0A0A;
}
.slick-dots li button:before {
  display: none;
}
@media (min-width: 320px) {
  margin-bottom: 100px;
}

@media (min-width: 994px) {
margin-bottom: 0px;
.project-deco-title-container{
  top: 100px;
  right: -650px;
}
}
`

const settings = {
  dots: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  adaptiveHeight: true,
  fade: true,
  infinite: true,
  /* autoplay: true,
    autoplaySpeed: 2000,*/
};