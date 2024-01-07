import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import App from './App';

/**
 * Mount fn to start up the application
 */
const mount = (el, { onNavigate }) => {
    const history = createMemoryHistory();

    /**
     * Listen the navigation events from spot-container
     */
    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(<App history={history} />, el);
};

/**
 * Check if we are in development environment and call mount inmediately
 */
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root');

    if (devRoot) {
        mount(devRoot, {});
    }
}

/**
 * Export our mount fn to run into container
 */
export { mount };
