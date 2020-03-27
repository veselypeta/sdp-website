import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/home';
import NotFound from '../../pages/not-found';
import Budget from '../../pages/budget';
import System from '../../pages/system';
import HowDoesItWork from '../../pages/how-does-it-work';
import Evaluation from '../../pages/evaluation';
import Team from '../../pages/team';
import Comments from '../../pages/comments';

export const AppRoutes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/budget" exact component={Budget} />
            <Route path="/system" exact component={System} />
            <Route path="/how-does-it-work" exact component={HowDoesItWork} />
            <Route path="/evaluation" exact component={Evaluation} />
            <Route path="/team" exact component={Team} />
            <Route path="/comments" exact component={Comments} />
            <Route component={NotFound} />
        </Switch>
    );
};
