import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './src/App';
import { AppContainer } from 'react-hot-loader';


if ((module as any).hot) {
  (module as any).hot.accept('./src/App', () => {
    const NextApp = require('./src/App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}

ReactDOM.render(
  (
  <AppContainer>
    <App />
  </AppContainer>
  ), 
  document.getElementById('app')
);
