import React from 'react';
import ReactDOM from 'react-dom'

import { Button } from '@pro/lib';

const App = <Button suffix="-suffix-text">BOOM</Button>;

ReactDOM.render(App, document.querySelector('main'));

if (module.hot) {
  module.hot.accept();
}
