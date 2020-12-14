import React from 'react';
import { Route, Switch } from "react-router";
import Auth from './Auth';
import { ArticleNew, SignIn, SignUp, TopPage } from './temlates';

const Router = () => {
    return (
        <Switch >
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            
            <Auth >
                <Route exact path="(/)?" component={TopPage} />
                <Route path="/new(/:id)?" component={ArticleNew} />
            </Auth>
        </Switch>
    );
};

export default Router;