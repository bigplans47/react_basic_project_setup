import React from "react";
import ReactDOM from "react-dom";


class StoryCell extends React.Component {
  render() {
    // var mypic = this.props.element.pic
    // console.log(mypic)
    // style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
    let anchorButton = {
      margin: '10px',
      width: '30%',
      height: '200px',
      display: 'inline-block',
      background: 'green',
      borderRadius: '5px',
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url({this.props.element.pic})',
    }
    return(
      // <table>
        // <tr>
          <a style={anchorButton}>{this.props.element.artist+ " - "+this.props.element.lyric+" "+this.props.element.pic}</a>
        // </tr>
      // </table>

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
