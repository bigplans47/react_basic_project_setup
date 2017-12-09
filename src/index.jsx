import React from "react";
import ReactDOM from "react-dom";
import FilterableProductTables from "./components/App";

import { AppContainer } from 'react-hot-loader';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$59.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

// render(App);

if (module.hot) {
  // module.hot.accept('./components/App', () => {
  //   render(App)
  // });
  ReactDOM.render(
    // <AppContainer>
      // {/* <Component/> */}
      <FilterableProductTables products2 = {PRODUCTS} />,
    // </AppContainer>,
    document.getElementById('react-app-root')
  );
}
// worked part 2
// ReactDOM.render(
//   <App/>,
//   document.getElementById('react-app-root')
// );
