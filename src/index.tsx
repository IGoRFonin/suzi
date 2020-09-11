import React from 'react';

import ReactDOM from 'react-dom';

import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import ThemeWrapper from './theme/ThemeProvider';

ReactDOM.render(
    <ThemeWrapper>
        <App />
    </ThemeWrapper>,
    document.getElementById('root'),
);

serviceWorker.unregister();
