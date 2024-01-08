import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import {
    StylesProvider,
    createGenerateClassName,
} from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

import Header from './components/Header/Header';

const AuthAppLazy = lazy(() => import('./components/AuthApp'));
const DashboardAppLazy = lazy(() => import('./components/DashboardApp'));
const SettingsAppLazy = lazy(() => import('./components/SettingsApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

const Loading = () => {
    return <div>Loading...</div>;
};

const history = createBrowserHistory();

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        if (isSignedIn) {
            history.push('/settings');
        }
    }, [isSignedIn]);

    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header
                        onSignOut={() => setIsSignedIn(false)}
                        isSignedIn={isSignedIn}
                    />
                    <Suspense fallback={Loading}>
                        <Switch>
                            <Route path={'/auth'}>
                                <AuthAppLazy
                                    onSignIn={() => setIsSignedIn(true)}
                                />
                            </Route>
                            <Route path={'/settings'}>
                                {!isSignedIn && <Redirect to={'/'} />}
                                <SettingsAppLazy />
                            </Route>
                            <Route path={'/'}>
                                <DashboardAppLazy />
                            </Route>
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>
    );
};
