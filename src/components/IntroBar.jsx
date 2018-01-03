import React from "react";
import ReactDOM from "react-dom";

class IntroBar extends React.Component {
  render () {

    let mainContainer = {
      backgroundColor: '#87CEEB',//"#1DA1F3",
      height: '200px',
      fontFamily: "arial",
      backgroundImage: 'url(https://vignette.wikia.nocookie.net/roblox/images/2/2e/Twitter_Bird.png/revision/latest?cb=20171111141052)',
      // backgroundRepeat: 'no-repeat',
      // backgroundPosition: '90% 50%',
      // backgroundSize: '20% 100%',
      borderRadius: '3px',
      borderColor: 'red',
      border: '3px solid black',
      marginRight: 'auto',
      // display: 'flex',
      // flexDirection: 'column',
      padding: '0px',
      margin: '0px',

    }
    let button1Style = {
      position: 'absolute',
      right: '110px',
      border: '2px solid white',
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
      border: '2px solid white',
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
      height: '100px',
      width: '100px',
      backgroundAttachment: 'fixed',
      display: 'block',
      fontFamily: 'serif bold',
      display: 'inline',
      backgroundColor: 'white',
      padding: '14px 16px',
      // border: '1px solid #d3d3d3',
      fontSize: '18px',
      // color: 'black',
      background : 'url(https://image.flaticon.com/icons/png/128/49/49116.png)',
      fontFamily: "edgeicons",
      backgroundColor: 'white',
      backgroundSize: '30% 40%',
      color: 'transparent',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',

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
      // display: 'flex',
      // flexFlow: 'row wrap',
      // justifyContent: 'space-around',
      // flexDirection: 'column',
    }

    let navBar = {
      backgroundColor: 'green',
      justifyContent: 'space-evenly',
      // padding: '15px 0px',
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
          <button type="button" style={button1Style}>Signup</button>
          <button type="button" style={button2Style}>Login</button>
          <button style={bird}></button>
          <br/>
          <h1 style={header1}>What's happening?</h1>
        </div>

        <div style={navBar}>

            <a style={navstyle} href="search" ><div style={navstyle1}>Search</div></a>
            <a style={navstyle} href="featured">Featured</a>
            <a style={navstyle} href="sports">Sports</a>
            <a style={navstyle} href="news">News</a>
            <a style={navstyle} href="music">Music</a>
            <a style={navstyle} href="entertainment">Entertainment</a>
            <a style={navstyle} href="lifestyle">Lifestyle</a>
            <a style={navstyle} href="more">More</a>

        </div>

        {/* <div>
          <a style={linkedIn} href="https://www.linkedin.com/in/dan-kiss-learn-this/" >_Click for Developer Info</a>
        </div> */}

      </div>
    )

  }

}

export default IntroBar;
