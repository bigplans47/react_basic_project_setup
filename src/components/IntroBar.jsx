import React from "react";
import ReactDOM from "react-dom";

class IntroBar extends React.Component {
  render () {

    let mainContainer = {
      backgroundColor: '#87CEEB',//"#1DA1F3",
      height: '200px',
      fontFamily: "arial",
      backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/1259px-Twitter_Bird.svg.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '130% 15%',
      backgroundSize: '62% 210%',
      // borderRadius: '3px',
      // border: '3px solid black',
      marginRight: 'auto',
      padding: '0px',
      margin: '0px',

    }
    let button1Style = {
      position: 'absolute',
      right: '110px',
      border: '1px solid white',
      backgroundColor: 'transparent',
      top: '20px',
      color: 'white',
      fontSize: '14px',
      borderRadius: '100px',
      padding: '6px 16px',
    }
    let button2Style = {
      position: 'absolute',
      right: '30px',
      border: '1px solid white',
      backgroundColor: 'transparent',
      top: '20px',
      color: 'white',
      fontSize: '14px',
      borderRadius: '100px',
      padding: '6px 16px',
    }
    let bird = {
      height: '100px',
      width: '100px',
      backgroundImage : 'url(https://sonicrunway.herokuapp.com/img/icons/twitter-logo-white-transparent.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '40% 30%',
      backgroundColor: 'transparent',
      border: 'transparent',
      top: '30px',
      left: '30px',
      position: 'absolute'
    }

    let header1 = {
      color: 'white',
      textAlign: 'center',
      fontSize: '48px',
      fontWeight: 'bold'
    }

    let glass = {
      height: '100%'
    }
    let navstyle = {
      backgroundAttachment: 'fixed',
      display: 'block',
      fontFamily: 'Helvetica Neue',
      display: 'inline',
      backgroundColor: 'white',
      padding: '14px 16px',
      border: '1px solid #d3d3d3',
      fontSize: '18px',
      fontWeight: 'bold',
      color: 'black',
      textDecoration: 'none',
      flex: 1,
      textAlign: 'center',
      // display: 'flex',
      // flexFlow: 'row wrap',
      // justifyContent: 'space-around',
      // flexDirection: 'column',
    }
    let navstyle2 = {
      backgroundAttachment: 'fixed',
      display: 'block',
      fontFamily: 'Helvetica Neue',
      display: 'inline',
      backgroundColor: 'white',
      padding: '14px 16px',
      border: '1px solid #d3d3d3',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#87CEEB',
      textDecoration: 'none',
      flex: 1,
      textAlign: 'center',
      // display: 'flex',
      // flexFlow: 'row wrap',
      // justifyContent: 'space-around',
      // flexDirection: 'column',
    }

    let navBar = {
      justifyContent: 'space-evenly',
      margin: '0',
      display: 'flex',
    }

    let linkedIn = {
      position: 'fixed',
      bottom: '0',
      right: '0',
      height: '200px',
      width: '250px',
      borderRadius: '4px',
      border: '3px solid black',
      backgroundImage : 'url(https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAIABADGAAAAAQAAAAAAAApRAAAAJGE3ODk5YWIyLTcyZDUtNDY1OC1hYzQxLThmNmFhMDEzY2E5NA.jpg)',
      backgroundColor: "#1DA1F3",
      color: 'black',
      backgroundPosition: '10% 10%'
    }

    return (
      <div>
        <div style={mainContainer} >
          <a type="button" style={button1Style} href='https://twitter.com/'>Signup</a>
          <a type="button" style={button2Style} href="https://twitter.com/">Login</a>
          <button style={bird}></button>
          <br/>
          <h1 style={header1}>What's happening?</h1>
        </div>

        <div style={navBar}>
            <a style={navstyle2} href="https://twitter.com/">Q</a>
            <a style={navstyle} href="https://twitter.com/">Featured</a>
            <a style={navstyle} href="https://twitter.com/">Sports</a>
            <a style={navstyle} href="https://twitter.com/">News</a>
            <a style={navstyle} href="https://twitter.com/">Music</a>
            <a style={navstyle} href="https://twitter.com/">Entertainment</a>
            <a style={navstyle} href="https://twitter.com/">Lifestyle</a>
            <a style={navstyle} href="https://twitter.com/">More</a>

        </div>

        {/* <div>
          <a style={linkedIn} href="https://www.linkedin.com/in/dan-kiss-learn-this/" >_Click for Developer Info</a>
        </div> */}

      </div>
    )

  }

}

export default IntroBar;
