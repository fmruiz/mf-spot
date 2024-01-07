import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {
    StylesProvider,
    createGenerateClassName,
} from '@material-ui/core/styles';

import SignIn from './components/SignIn';

const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
});

export default () => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <BrowserRouter>
                    <Switch>
                        <Route path={'/'} component={SignIn} />
                    </Switch>
                </BrowserRouter>
            </StylesProvider>
        </div>
    );
};
