import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
    StylesProvider,
    createGenerateClassName,
} from '@material-ui/core/styles';

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

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
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
                            <Route
                                path={'/settings'}
                                component={SettingsAppLazy}
                            />
                            <Route path={'/'} component={DashboardAppLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
};
