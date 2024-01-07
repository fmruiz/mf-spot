import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
    StylesProvider,
    createGenerateClassName,
} from '@material-ui/core/styles';

import AuthApp from './components/AuthApp';
import Header from './components/Header/Header';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <AuthApp />
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
};
