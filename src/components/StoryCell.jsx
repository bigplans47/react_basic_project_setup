import React from "react";
import ReactDOM from "react-dom";


class StoryCell extends React.Component {
  render() {

    return(

        <tr>
          <th>{this.props.element.artist}</th>
        </tr>

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
