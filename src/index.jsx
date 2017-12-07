import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}
// worked part 2
// ReactDOM.render(
//   <App/>,
//   document.getElementById('react-app-root')
// );
