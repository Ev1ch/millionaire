import React from 'react';
import { MemoryRouter, Route, Routes as Switch } from 'react-router-dom';
import Routes from 'common/enums/routes';
import { Final, Start, Quiz } from 'containers';

function Router() {
    return (
        <MemoryRouter>
            <Switch>
                <Route path={Routes.START} element={<Start />} />
                <Route path={Routes.FINAL} element={<Final />} />
                <Route path={Routes.QUIZ} element={<Quiz />} />
            </Switch>
        </MemoryRouter>
    );
}

export default Router;
