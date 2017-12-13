import React from "react";
import ReactDOM from "react-dom";
import StoryCell from "./StoryCell"

class StoryTable extends React.Component {
  render() {
    const array = [];
    this.props.api.forEach((element, i) => {
      array.push(
        <StoryCell element={element} key={i} />
      );
    });
    console.log(array)
    return(
      <table>
        <tbody>
          {array}
        </tbody>
      </table>
    );


  }
}

export default StoryTable;

// class ProductTable extends React.Component {
//   render() {
//     const rows = [];
//     let lastCategory = null;
//     //line below is how the PRODUCTS got in
    // this.props.products3.forEach((product) => {
      // if (product.category !== lastCategory) {
      //   rows.push(
      //     <ProductCategoryRow
      //       category={product.category}
      //       key={product.category} />
      //   );
      // }
    //   rows.push(
    //     <ProductRow
    //       product={product}
    //       key={product.name} />
    //   );
    //
    //   lastCategory = product.category;
    // });
//
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//     );
//   }
// }
//-------------------------------------------
