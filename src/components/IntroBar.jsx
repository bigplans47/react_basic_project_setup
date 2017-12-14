import React from "react";
import ReactDOM from "react-dom";

class IntroBar extends React.Component {
  render () {
    let myStyles2 = {
      backgroundColor: "#1DA1F3",
      // backgroundColor: "transparent",
      fontFamily: "arial",
      backgroundImage: 'url(http://ag.fvsu.edu/files/9614/4354/3803/TwitterLogo_55acee.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '112% 110%',
      backgroundAttachment: 'fixed',
      backgroundSize: '60% 120%',
      // borderRadius: '3px',
      borderColor: 'red',
      borderWidth: '5px',
      // position: 'fixed',
      border: '3px solid black',
      marginRight: 'auto',
      display: 'flex',
      flexDirection: 'column',
      // border: 'none',
      margin: '0px',
      padding: '0',
      verticalAlign: 'baseline',
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
      backgroundImage : 'url(http://www.worldawesomeplaces.com/img/twitter-wrap.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '70% 70%',
      backgroundColor: 'transparent',
      border: 'transparent',
      position: 'relative',
      top: '30px',
      left: '30px',
      position: 'absolute'
    }

    let header1 = {
      color: 'white',
      textAlign: 'center',
      fontSize: '48px'
    }

    let navstyle = {
      display: 'block',
      position: 'sticky',
      display: 'inline',
      backgroundColor: 'white',
      padding: '14px 16px',
      border: '1px solid red',
      fontSize: '18px',
      color: 'black',
    }

    let div2 = {
      backgroundColor: 'white',
      marginTop: '300px'
    }

    return (
      <div style={myStyles2} >
        <button type="button" style={button1Style}>Signup</button>
        <button type="button" style={button2Style}>Login</button>
        <button style={bird}></button>
        <br/>
        <h1 style={header1}>What's happening?</h1>
        <div style={div2}>
          <ul>
            <a style={navstyle} href="search" >Search</a>
            <a style={navstyle} href="featured">Featured</a>
            <a style={navstyle} href="sports">Sports</a>
            <a style={navstyle} href="news">News</a>
            <a style={navstyle} href="music">Music</a>
            <a style={navstyle} href="entertainment">Entertainment</a>
            <a style={navstyle} href="lifestyle">Lifestyle</a>
            <a style={navstyle} href="more">More</a>
          </ul>
        </div>
        <p>Overview. This document described the process involved with configuring Windows 7 to print to a Zebra Label Printer using a. Generic / Text Only driver. Using a Generic / Text Only driver enables the application to send printer control code languages such as ZPL and CPCL. This example guides the reader through adding.
        Overview. This document described the process involved with configuring Windows 7 to  print to a Zebra Label Printer using a. Generic / Text Only driver. Using as Generic   / Text Only driver enables the application to send printer control code languages   such as ZPL and CPCL. This example guides the reader through adding Overview. This document described the process involved with configuring Windows 7 to print to a Zebra Label Printer using a. Generic / Text Only driver. Using a Generic / Text Only driver enables the application to send printer control code languages such as ZPL and CPCL. This example guides the reader through adding.
        Overview. This document described the process involved with configuring Windows 7 to  print to a Zebra Label Printer using a. Generic / Text Only driver. Using as Generic   / Text Only driver enables the application to send printer control code languages   such as ZPL and CPCL. This example guides the reader through adding Overview. This document described the process involved with configuring Windows 7 to print to a Zebra Label Printer using a. Generic / Text Only driver. Using a Generic / Text Only driver enables the application to send printer control code languages such as ZPL and CPCL. This example guides the reader through adding.
        Overview. This document described the process involved with configuring Windows 7 to  print to a Zebra Label Printer using a. Generic / Text Only driver. Using as Generic   / Text Only driver enables the application to send printer control code languages   such as ZPL and CPCL. This example guides the reader through adding Overview. This document described the process involved with configuring Windows 7 to print to a Zebra Label Printer using a. Generic / Text Only driver. Using a Generic / Text Only driver enables the application to send printer control code languages such as ZPL and CPCL. This example guides the reader through adding.
        Overview. This document described the process involved with configuring Windows 7 to  print to a Zebra Label Printer using a. Generic / Text Only driver. Using as Generic  </p>
      </div>
    )

  }

}

export default IntroBar;
