import { createApp } from 'vue';
import Settings from './components/Settings.vue';

/**
 * Mount fn to start up the application
 */
const mount = (el) => {
    const app = createApp(Settings);
    app.mount(el);
};

/**
 * Check if we are in development environment and call mount inmediately
 */
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_settings-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

/**
 * Export our mount fn to run into container
 */
export { mount };
