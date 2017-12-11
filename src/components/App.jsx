import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// class FilterableProductTables extends React.Component {
//   render() {
//     return (
//       <div>
//         <SearchBar />
//         <ProductTable products3={this.props.products2} />
//       </div>
//     );
//   }
// }
//--------------------------------------------------------this done
class Document_Root extends React.Component {
  render() {
    return(
      <div>

        <StoryTable api={this.props.api}/>
      </div>
    );
  }
}

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
class StoryTable extends React.Component {
  render() {
    const array = [];
    this.props.api.forEach((element) => {
      array.push(
        <StoryCell element={element} />
      );
    });
    return(
      <div>
        {array}
      </div>
    );
  }
}

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
//-----------------------------------------
class StoryCell extends React.Component {
  render() {

    return(
      <p>{this.props.element.artist}</p>
    );
  }
}

// Document_Root
// IntroBar
// SectionsCell
// UserCell
// StoryTable
// StoryCell

// class ProductCategoryRow extends React.Component {
//   render() {
//     const category = this.props.category;
//     return (
//       <tr>
//         <th colSpan="2">
//           {category}
//         </th>
//       </tr>
//     );
//   }
// }
//
//
// class SearchBar extends React.Component {
//   render() {
//     return (
//       <form>
//         <input type="text" placeholder="Search..." />
//         <p>
//           <input type="checkbox" />
//           {' '}
//           Only show products in stock
//         </p>
//       </form>
//     );
//   }
// }

// StoryTable.propTypes = {
//   //what is happening to this?
//   artist: PropTypes.string
// }
export default Document_Root;
// export default FilterableProductTables;
