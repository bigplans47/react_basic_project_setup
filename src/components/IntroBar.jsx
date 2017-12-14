import React from "react";
import ReactDOM from "react-dom";

class IntroBar extends React.Component {
  render () {

    let mainContainer = {
      backgroundColor: "#1DA1F3",
      // backgroundColor: "green",
      height: '200px',
      fontFamily: "arial",
      backgroundImage: 'url(http://ag.fvsu.edu/files/9614/4354/3803/TwitterLogo_55acee.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '112% 110%',
      backgroundSize: '60% 110%',
      // borderRadius: '3px',
      borderColor: 'red',
      // borderWidth: '5px',
      border: '3px solid black',
      marginRight: 'auto',
      display: 'flex',
      flexDirection: 'column',
      // border: 'none',
      padding: '0px',
      margin: '0px',

    }
    let button1Style = {
      position: 'absolute',
      right: '110px',
      border: '1px solid white',
      backgroundColor: 'transparent',
      top: '30px',
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
      top: '30px',
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
      fontSize: '48px'
    }

    let navstyle1 = {
      backgroundAttachment: 'fixed',
      display: 'block',
      fontFamily: 'serif bold',
      display: 'inline',
      backgroundColor: 'white',
      padding: '14px 16px',
      border: '1px solid #d3d3d3',
      fontSize: '18px',
      color: 'black',
      backgroundImage : 'url(https://sonicrunway.herokuapp.com/img/icons/twitter-logo-white-transparent.png)',
    }
    let navstyle = {
      backgroundAttachment: 'fixed',
      display: 'block',
      fontFamily: 'serif bold',
      display: 'inline',
      backgroundColor: 'white',
      padding: '14px 16px',
      border: '1px solid #d3d3d3',
      fontSize: '18px',
      color: 'black',
    }

    let navBar = {
      backgroundColor: 'white',
      // marginTop: '300px'
    }

    let linkedIn = {
      position: 'fixed',
      bottom: '0',
      right: '0',
      height: '200px',
      width: '250px',
      borderRadius: '10px',
      border: '3px solid black',
      backgroundImage : 'url(https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAIABADGAAAAAQAAAAAAAApRAAAAJGE3ODk5YWIyLTcyZDUtNDY1OC1hYzQxLThmNmFhMDEzY2E5NA.jpg)',
      backgroundColor: "#1DA1F3",
      color: 'black',
      backgroundPosition: '10% 10%'
    }

    return (
      <div>
        <div style={mainContainer} >
          <button type="button" style={button1Style}>Signup</button>
          <button type="button" style={button2Style}>Login</button>
          <button style={bird}></button>
          <br/>
          <h1 style={header1}>What's happening?</h1>
        </div>
        <div style={navBar}>
          <ul>
            <a style={navstyle1} href="search" >Search</a>
            <a style={navstyle} href="featured">Featured</a>
            <a style={navstyle} href="sports">Sports</a>
            <a style={navstyle} href="news">News</a>
            <a style={navstyle} href="music">Music</a>
            <a style={navstyle} href="entertainment">Entertainment</a>
            <a style={navstyle} href="lifestyle">Lifestyle</a>
            <a style={navstyle} href="more">More</a>
          </ul>
        </div>
        <div>
          <a style={linkedIn} href="https://www.linkedin.com/in/dan-kiss-learn-this/" >_Click for Developer Info</a>
        </div>
      </div>
    )

  }

}

export default IntroBar;
