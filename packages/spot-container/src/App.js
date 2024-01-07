import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthApp from './components/AuthApp';
import Header from './components/Header/Header';

export default () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <AuthApp />
            </div>
        </BrowserRouter>
    );
};
