import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminShowsAdd from '../add/AdminShowsAdd';
import AdminShowsEdit from '../edit/AdminShowsEdit';
import AdminShowsList from '../list/AdminShowsList';

export default class AdminShows extends Component {
    render() {
        const uri = '/admin/tv-shows';
        return(
            <>
                <Router>
                    <Switch>
                        <Route path={`${uri}/list`} component={AdminShowsList} />
                        <Route path={`${uri}/add`} component={AdminShowsAdd} />
                        <Route path={`${uri}/edit`} component={AdminShowsEdit} />
                    </Switch>
                </Router>
            </>
        );
    }
}