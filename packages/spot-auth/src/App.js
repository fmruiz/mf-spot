import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import SignIn from './components/SignIn';

export default () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path={'/'} component={SignIn} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};
