import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

/**
 * Mount fn to start up the application
 */
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    const history =
        defaultHistory ||
        createMemoryHistory({
            initialEntries: [initialPath],
        });

    /**
     * Listen the navigation events from spot-container
     */
    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(<App history={history} />, el);

    return {
        /**
         * Spot-container has navigate and communicate to the others MF
         */
        onParentNavigate({ pathname: nextPathname }) {
            if (history.location.pathname !== nextPathname) {
                history.push(nextPathname);
            }
        },
    };
};

/**
 * Check if we are in development environment and call mount inmediately
 */
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root');

    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}

/**
 * Export our mount fn to run into container
 */
export { mount };
