import React from "react";
import {LanguageContext} from "../Context/LanguageProvider";
import Responsive
  from 'react-responsive-decorator';

const folder = process.env.PUBLIC_URL + '/assets/img/';
const resizeMode = 'center';

class CustomSlide extends React.Component {
  static contextType = LanguageContext;

  state = {
    isMobile: false
  };

  componentDidMount() {
    this.props.media({maxWidth: 992}, () => {
      this.setState({
        isMobile: true
      });
    });

    this.props.media({minWidth: 992}, () => {
      this.setState({
        isMobile: false
      });
    });
  }


  render() {
    const {item, prev, next, ...props} = this.props;
    return (
      <div {...props}
           style={styles.customSlideContainer}>
        <div
          style={{...styles.customSlideImageContainer, ...{backgroundImage: folder + item.image}}}>

          {this.state.isMobile &&
          <div style={styles.customSlideControls}>
            <div
              style={styles.customSlideControlsNext}
              onClick={() => next()}>NEXT
            </div>
            <div
              style={styles.customSlideControlsPrev}
              onClick={() => prev()}>PREV
            </div>
          </div>
          }
          <img style={styles.customSlideImage}
               src={folder + item.image} alt=""/>
        </div>
        <div style={styles.customSlideContent}>
          <h3
            style={styles.customSlideProjectTitle}>{item.title}</h3>
          <h4
            style={styles.customSlideProjectType}>{item.type}</h4>
          <p
            style={styles.customSlideText}>{item.text}</p>
        </div>
      </div>
    );
  }
}

export default Responsive(CustomSlide)

const styles = {
  customSlideContainer: {
    position: 'relative'
  },
  customSlideImageContainer: {
    height: 310,
    overflow: 'hidden',
    position: 'relative',
    resizeMode,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  customSlideControls: {
    position: 'absolute',
    width: 50,
    backgroundColor: 'rgba(0,0,0,0)',
    bottom: 0,
    right: 16,
    fontWeight: 600
  },
  customSlideControlsNext: {
    width: 50,
    height: 50,
    borderRadius: 100,
    color: 'white',
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customSlideControlsPrev: {
    marginTop: 8,
    marginBottom: 16,
    width: 50,
    height: 50,
    borderRadius: 100,
    color: 'white',
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customSlideProjectTitle: {
    alignSelf: 'flex-start',
    marginTop: 16,
    marginLeft: 16,
    fontSize: 30,
    color: 'white',
  },
  customSlideProjectType: {
    alignSelf: 'flex-start',
    marginLeft: 16,
    color: '#0098FF',
    fontSize: 20,
    fontWeight: 400
  },
  customSlideContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 16,
  },
  customSlideText: {
    color: 'white',
    fontWeight: 100,
    marginLeft: 16,
    fontSize: 20,
    lineHeight: '32px',
    marginRight: 16,
    marginTop: 8,
    marginBottom: 24
  }
}