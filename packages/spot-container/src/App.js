import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
    StylesProvider,
    createGenerateClassName,
} from '@material-ui/core/styles';

import Header from './components/Header/Header';

const AuthAppLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

const Loading = () => {
    return <div>Loading...</div>;
};

export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Suspense fallback={Loading}>
                        <Switch>
                            <Route path={'/auth'} component={AuthAppLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
};
