import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'blue'}}>
        {product.name}
      </span>;

return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;
    //line below is how the PRODUCTS got in
    this.props.products3.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );

      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTables extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products3={this.props.products2} />
      </div>
    );
  }
}
//--------------------------------------------------------this done
// class Document_Root extends React.Component {
//   render() {
//     return(
//       <div>
//         <IntroBar />
//         <StoryTable api={this.props.api}/>
//       </div>
//     );
//   }
// }

// const API_MOCKUP = [
//   {artist: '50 Cent', lyric: 'Go shorty it\'s your birday', pic: '1.jpg'},
//   {artist: 'Muse', lyric: 'Hold you in my arms, I just wanted to hold', pic: '2.jpg'},
//   {artist: 'Taylor Swift', lyric: 'You be the prince and I will be the princess baby just say yes', pic: '3.jpg'},
//   {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'}
// ];
// const PRODUCTS = [
//   {category: 'Sporting Goods', price: '$59.99', stocked: true, name: 'Football'},
//   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];

// Document_Root
// IntroBar
// SectionsCell
// UserCell
// StoryTable
// StoryCell



// ReactDOM.render(
//   <FilterableProductTables products2 = {PRODUCTS} />,
//   document.getElementById('react-app-root')
// );

// ReactDOM.render(
//   <Document_Root api={API_MOCKUP}/>,
//   document.getElementById('react-app-root')
// );

// App.propTypes = {
//   //what is happening to this?
//   artist: PropTypes.string.isRequired
// }

export default FilterableProductTables;
