import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store';
import ThemeWrapper from './theme/ThemeProvider';

ReactDOM.render(
    <Provider store={store}>
        <ThemeWrapper>
            <App />
        </ThemeWrapper>
    </Provider>,
    document.getElementById('root'),
);
