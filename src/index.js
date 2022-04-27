import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import 'react-app-polyfill/ie11';

import { AppContainer } from './AppContainer.tsx';
import Description from './containers/description/Description.tsx';
import Footer from './containers/footer/Footer';

ReactDOM.render(<AppContainer radarId="radar"/>, document.getElementById('app'))
ReactDOM.render(<Description />, document.getElementById('description'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
