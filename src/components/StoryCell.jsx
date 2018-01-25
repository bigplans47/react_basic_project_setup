import React from "react";
import ReactDOM from "react-dom";


class StoryCell extends React.Component {
  render() {
    var mypic = this.props.element.pic;
    console.log(mypic);
    // style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
    let anchorButton = {
      margin: '10px',
      width: '30%',
      height: '100%',
      display: 'inline-block',
      background: 'white',
      borderRadius: '5px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      color: 'black',
      textDecoration: 'none',
      // border: '2px solid white',
    }
    let picFormat = {
      borderRadius: '1px',
      width: '100%',
      height: '200px',
      borderRadius: '5px 5px 0px 0px',
    }
    let picFormat2 = {
      borderRadius: '1px',
      width: '5%',
      height: '20px',
      borderRadius: '5px 5px 0px 0px',
    }
    let picFormat3 = {
      borderRadius: '1px',
      width: '5%',
      textAlign: 'center',
      height: '15px',
      borderRadius: '1px 1px 0px 0px',
    }
    let picFormat4 = {
      borderRadius: '1px',
      width: '5%',
      textAlign: 'center',
      height: '15px',
      borderRadius: '1px 1px 0px 0px',
    }
    let picFormat5 = {
      borderRadius: '1px',
      width: '10%',
      textAlign: 'center',
      height: '15px',
      borderRadius: '1px 1px 0px 0px',
    }
    let textFormat1 = {
      padding: '5px',
      margin: '0px',
      borderRadius: '1px',
      borderTop: '2px solid white',
      borderRight: '2px solid white',
      borderLeft: '2px solid white',
    }
    let textFormat2 = {
      padding: '5px',
      margin: '0px',
      borderRadius: '1px',
      borderRight: '2px solid white',
      borderLeft: '2px solid white',
      color: 'blue',
    }
    let textFormat3 = {
      padding: '5px',
      margin: '0px',
      borderRadius: '0px 0px 5px 5px',
      borderRight: '2px solid white',
      borderLeft: '2px solid white',
      borderBottom: '2px solid white',
    }
    return(
      <a style={anchorButton} href='https://twitter.com/'>
        <img src={this.props.element.pic} style={picFormat}/>
        <p style={textFormat1}>{this.props.element.artist}</p>
        <p style={textFormat2}>@{this.props.element.artist}</p>
        <p style={textFormat3}>{this.props.element.lyric}</p>
        <p>
          <img src="" style={picFormat5} href='https://twitter.com/'/>
          <img src="" style={picFormat5} href='https://twitter.com/'/>
          <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/51904-200.png" style={picFormat3} href='https://twitter.com/'/>
          <img src="" style={picFormat5} href='https://twitter.com/'/>
          <img src="" style={picFormat5} href='https://twitter.com/'/>
          <img src="https://image.flaticon.com/icons/png/128/127/127998.png" style={picFormat2} href='https://twitter.com/'/>
          <img src="" style={picFormat5} href='https://twitter.com/'/>
          <img src="" style={picFormat5} href='https://twitter.com/'/>
          <img src="https://cdn4.iconfinder.com/data/icons/48-bubbles/48/39.Heart-512.png" style={picFormat4} href='https://twitter.com/'/>
          {/* <img src="https://pbs.twimg.com/profile_images/629054758465056768/_n31pMdK.jpg" style={picFormat4} href='https://twitter.com/'/> */}
        </p>

      </a>
    );
  }
}

export default StoryCell;
//-----------------------------------------
// class ProductRow extends React.Component {
//   render() {
//     const product = this.props.product;
//     const name = product.stocked ?
//       product.name :
//       <span style={{color: 'blue'}}>
//         {product.name}
//       </span>;
//
// return (
//       <tr>
//         <td>{name}</td>
//         <td>{product.price}</td>
//       </tr>
//     );
//   }
// }
