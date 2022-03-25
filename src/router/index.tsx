import React from 'react';
import { MemoryRouter, Route, Routes as Switch } from 'react-router-dom';
import Routes from 'common/enums/routes';
import { Start, Final, Quiz } from 'containers';

function Router() {
    return (
        <MemoryRouter>
            <Switch>
                <Route path={Routes.START} element={<Start />} />
                <Route path={Routes.QUIZ} element={<Quiz />} />
                <Route path={Routes.FINAL} element={<Final />} />
            </Switch>
        </MemoryRouter>
    );
}

export default Router;
