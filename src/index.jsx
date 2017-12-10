import React from "react";
import ReactDOM from "react-dom";
import Document_Root from "./components/App";

import { AppContainer } from 'react-hot-loader';

// const PRODUCTS = [
//   {category: 'Sporting Goods', price: '$59.99', stocked: true, name: 'Football'},
//   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];

const API_MOCKUP = [
  {artist: '50 Cent', lyric: 'Go shorty it\'s your birday', pic: '1.jpg'},
  {artist: 'Muse', lyric: 'Hold you in my arms, I just wanted to hold', pic: '2.jpg'},
  {artist: 'Taylor Swift', lyric: 'You be the prince and I will be the princess baby just say yes', pic: '3.jpg'},
  {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'}
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
  ReactDOM.render(
      <Document_Root api = {API_MOCKUP} />,
    document.getElementById('react-app-root')
  );
}
