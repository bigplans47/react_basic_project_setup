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
        <IntroBar/>
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

        <tr>
          <th>{this.props.element.artist}</th>
        </tr>

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

class IntroBar extends React.Component {
  render () {
    let myStyles2 = {
      width: '800px',
      backgroundColor: "transparent",
      fontFamily: "arial",
      // backgroundColor: "#55ACEF",
      backgroundImage: 'url(https://www.smartt.com/sites/default/files/public/twitter_logo_banner_12.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',
      backgroundSize: 'contain',
      borderRadius: '3px',
      borderColor: 'red',
      borderWidth: '5px',
      position: 'fixed',
      border: '3px solid black',
      margin: 'auto'
    }
    let button1Style = {
      position: 'absolute',
      right: '70px',
      border: '1px solid white',
      backgroundColor: 'transparent',
      top: '30px',
      color: 'white',
    }
    let button2Style = {
      position: 'absolute',
      right: '10px',
      border: '1px solid white',
      backgroundColor: 'transparent',
      top: '30px',
      color: 'white',
    }
    let bird = {
      height: '100px',
      width: '100px',
      backgroundImage : 'url(https://www.smartt.com/sites/default/files/public/twitter_logo_banner_12.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '70% 70%',
      backgroundColor: 'transparent',
      border: 'transparent',
      position: 'relative',
      top: '20px',
      position: 'absolute',
    }

    let header1 = {
      color: 'white',
      textAlign: 'center',
    }

    let navstyle = {
      display: 'block',
      position: 'sticky',
      display: 'inline',
      backgroundColor: 'white',
      padding: '14px 16px',
    }

    let div2 = {
      backgroundColor: 'white',
      padding: '1px',

    }

    return (
      <div style={myStyles2} class="topnav" id="myTopnav">
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
        Overview. This document described the process involved with configuring Windows 7 to  print to a Zebra Label Printer using a. Generic / Text Only driver. Using as Generic   / Text Only driver enables the application to send printer control code languages   such as ZPL and CPCL. This example guides the reader through adding Overview. This document described the process involved with configuring Windows 7 to print to a Zebra Label Printer using a. Generic / Text Only driver. Using a Generic / Text Only driver enables the application to send printer control code languages such as ZPL and CPCL. This example guides the reader through adding.
        Overview. This document described the process involved with configuring Windows 7 to  print to a Zebra Label Printer using a. Generic / Text Only driver. Using as Generic   / Text Only driver enables the application to send printer control code languages   such as ZPL and CPCL. This example guides the reader through adding Overview. This document described the process involved with configuring Windows 7 to print to a Zebra Label Printer using a. Generic / Text Only driver. Using a Generic / Text Only driver enables the application to send printer control code languages such as ZPL and CPCL. This example guides the reader through adding.
        Overview. This document described the process involved with configuring Windows 7 to  print to a Zebra Label Printer using a. Generic / Text Only driver. Using as Generic   / Text Only driver enables the application to send printer control code languages   such as ZPL and CPCL. This example guides the reader through adding</p>
      </div>
    )

  }

}

// StoryTable.propTypes = {
//   //what is happening to this?
//   artist: PropTypes.string
// }
export default Document_Root;
// export default FilterableProductTables;
