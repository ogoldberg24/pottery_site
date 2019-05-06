import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Component/>
      </HashRouter>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);
registerServiceWorker();

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}
/*eslint-enable */
