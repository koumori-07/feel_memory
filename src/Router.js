import React from 'react';
import { Route, Switch } from "react-router";
import Auth from './Auth';
import { Article, ArticleNew, SignIn, SignUp, TopPage, Profile, ProfileEdit } from './temlates';



const Router = () => {
    return (
        <Switch >
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            
            <Auth >
                <Route exact path="(/)?" component={TopPage} />
                <Route path="/new(/:id)?" component={ArticleNew} />
                <Route exact path="/article/:id" component={Article} />
                <Route exact path="/user/:id" component={Profile} />
                <Route path="/user/new/:id" component={ProfileEdit} />
            </Auth>
        </Switch>
    );
};

export default Router;