import * as React from 'react';
import { AppRoutes } from './routes/app-routes';
import { BrowserRouter } from 'react-router-dom';
import { PageLayout } from '../templates/page-layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CookiesProvider } from 'react-cookie';

const App: React.FC = () => {
    return (
        <CookiesProvider>
            <PageLayout>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </PageLayout>
        </CookiesProvider>
    );
};

export default App;
