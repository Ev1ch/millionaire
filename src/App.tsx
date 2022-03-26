import React from 'react';
import { Provider } from 'context';
import Router from 'components/router';
import 'styles/index.scss';

function App() {
    return (
        <Provider>
            <Router />
        </Provider>
    );
}

export default App;
