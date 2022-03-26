import React from 'react';
import { Provider } from 'context';
import ErrorBoundary from 'components/boundaries';
import Router from 'components/router';
import 'styles/index.scss';

function App() {
    return (
        <ErrorBoundary>
            <Provider>
                <Router />
            </Provider>
        </ErrorBoundary>
    );
}

export default App;
