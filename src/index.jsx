import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { AppContainer } from 'react-hot-loader';

const API_MOCKUP = [
  {artist: '50 Cent', lyric: 'Go shorty it\'s your birthday, we gonna party like it\'s your birthday', pic: 'https://img.wennermedia.com/featured-promo-782/rs-12-50-cent.jpg'},
  {artist: 'Muse', lyric: 'Our hopes and expectations Black holes and revelations, Hold you in my arms', pic: 'http://www.theriffrepeater.com/wp-content/uploads/2013/09/muse-still.jpg'},
  {artist: 'Taylor Swift', lyric: 'You be the prince and I will be the princess baby just say yes', pic: 'https://carib101.com/wp-content/uploads/2017/09/taylor_swift_big_announcements_feature.jpg'},
  {artist: 'Kanye', lyric: 'Yeezy taught me', pic: 'http://lh6.ggpht.com/nML2bdK30Z0OS3cHBINnLcXCv6XVI8dWpLvMu8mxYnG7-ggBhxKem95RzfAKFTxKAvi8_a74LX3BVdZXDr0kWiLY'},
  {artist: 'Kanye', lyric: 'Yeezy taught me', pic: 'http://lh6.ggpht.com/nML2bdK30Z0OS3cHBINnLcXCv6XVI8dWpLvMu8mxYnG7-ggBhxKem95RzfAKFTxKAvi8_a74LX3BVdZXDr0kWiLY'},
  {artist: 'Kanye', lyric: 'Yeezy taught me', pic: 'http://lh6.ggpht.com/nML2bdK30Z0OS3cHBINnLcXCv6XVI8dWpLvMu8mxYnG7-ggBhxKem95RzfAKFTxKAvi8_a74LX3BVdZXDr0kWiLY'},
  {artist: 'Kanye', lyric: 'Yeezy taught me', pic: 'http://lh6.ggpht.com/nML2bdK30Z0OS3cHBINnLcXCv6XVI8dWpLvMu8mxYnG7-ggBhxKem95RzfAKFTxKAvi8_a74LX3BVdZXDr0kWiLY'},
  {artist: 'Kanye', lyric: 'Yeezy taught me', pic: 'http://lh6.ggpht.com/nML2bdK30Z0OS3cHBINnLcXCv6XVI8dWpLvMu8mxYnG7-ggBhxKem95RzfAKFTxKAvi8_a74LX3BVdZXDr0kWiLY'},
  {artist: 'Kanye', lyric: 'Yeezy taught me', pic: 'http://lh6.ggpht.com/nML2bdK30Z0OS3cHBINnLcXCv6XVI8dWpLvMu8mxYnG7-ggBhxKem95RzfAKFTxKAvi8_a74LX3BVdZXDr0kWiLY'},
  {artist: 'Kanye', lyric: 'Yeezy taught me', pic: 'http://lh6.ggpht.com/nML2bdK30Z0OS3cHBINnLcXCv6XVI8dWpLvMu8mxYnG7-ggBhxKem95RzfAKFTxKAvi8_a74LX3BVdZXDr0kWiLY'},
  {artist: 'Kanye', lyric: 'Yeezy taught me', pic: 'http://lh6.ggpht.com/nML2bdK30Z0OS3cHBINnLcXCv6XVI8dWpLvMu8mxYnG7-ggBhxKem95RzfAKFTxKAvi8_a74LX3BVdZXDr0kWiLY'},
  {artist: 'Kanye', lyric: 'Yeezy taught me', pic: 'http://lh6.ggpht.com/nML2bdK30Z0OS3cHBINnLcXCv6XVI8dWpLvMu8mxYnG7-ggBhxKem95RzfAKFTxKAvi8_a74LX3BVdZXDr0kWiLY'},
  {artist: 'Kanye', lyric: 'Yeezy taught me', pic: 'http://lh6.ggpht.com/nML2bdK30Z0OS3cHBINnLcXCv6XVI8dWpLvMu8mxYnG7-ggBhxKem95RzfAKFTxKAvi8_a74LX3BVdZXDr0kWiLY'},
  {artist: 'Kanye', lyric: 'Yeezy taught me', pic: 'http://lh6.ggpht.com/nML2bdK30Z0OS3cHBINnLcXCv6XVI8dWpLvMu8mxYnG7-ggBhxKem95RzfAKFTxKAvi8_a74LX3BVdZXDr0kWiLY'},
  {artist: 'Kanye', lyric: 'Yeezy taught me', pic: 'http://lh6.ggpht.com/nML2bdK30Z0OS3cHBINnLcXCv6XVI8dWpLvMu8mxYnG7-ggBhxKem95RzfAKFTxKAvi8_a74LX3BVdZXDr0kWiLY'},
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
      <App api = {API_MOCKUP} />,
    document.getElementById('react-app-root')
  );
}
