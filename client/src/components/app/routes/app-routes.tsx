import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../../pages/home';
import NotFound from "../../pages/not-found";

export const AppRoutes: React.FC = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route component={NotFound}/>
        </Switch>
    )
};

