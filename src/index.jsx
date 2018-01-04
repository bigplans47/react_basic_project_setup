import React from "react";
import ReactDOM from "react-dom";
import Document_Root from "./components/App";

import { AppContainer } from 'react-hot-loader';

const API_MOCKUP = [
  {artist: '50 Cent', lyric: 'Go shorty it\'s your birthday, we gonna party like it\'s your birthday', pic: 'https://img.wennermedia.com/featured-promo-782/rs-12-50-cent.jpg'},
  {artist: 'Muse', lyric: 'Hold you in my arms, I just wanted to hold', pic: '2.jpg'},
  {artist: 'Taylor Swift', lyric: 'You be the prince and I will be the princess baby just say yes', pic: '3.jpg'},
  {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'},
  {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'},
  {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'},
  {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'},
  {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'},
  {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'},
  {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'},
  {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'},
  {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'},
  {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'},
  // {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'},
  // {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'},
  // {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'},
  // {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'},
  // {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'},
  // {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'},
  // {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'},
  // {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'},
  // {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'},
  // {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'},
  // {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'},
  // {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'},
  // {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'},
  // {artist: 'Kanye', lyric: 'Yeezy taught me', pic: '4.jpg'},

];

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

// render(Document_Root);

if (module.hot) {
  ReactDOM.render(
      <Document_Root api = {API_MOCKUP} />,
    document.getElementById('react-app-root')
  );
}
