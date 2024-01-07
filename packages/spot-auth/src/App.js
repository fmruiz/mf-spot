import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
    StylesProvider,
    createGenerateClassName,
} from '@material-ui/core/styles';

import SignIn from './components/SignIn';

const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
});

export default ({ history }) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path={'/'} component={SignIn} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
};
