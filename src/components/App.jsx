import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import IntroBar from "./IntroBar";
import StoryTable from "./StoryTable"

class Document_Root extends React.Component {
  render() {
    return(
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <IntroBar/>
        <StoryTable api={this.props.api}/>
      </div>
    );
  }
}

export default Document_Root;
//--------------------------------------------------------this done
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
//--------------------------------------------------------






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

// export default FilterableProductTables;
