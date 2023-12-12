import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import NotFoundPage from '../components/NotFoundPage'
import BlogDetailsPage from '../components/BlogDetailsPage'
import BlogListPage from '../components/BlogListPage'
import AddBlogPage from '../components/AddBlogPage'
import EditBlogPage from '../components/EditBlogPage'
import LoginPage from '../components/LoginPage'
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory();

const AppRouter = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Switch>
                        <PublicRoute exact path="/" component={LoginPage} />
                        <PrivateRoute exact path="/blogs" component={BlogListPage} />
                        <PrivateRoute path="/create" component={AddBlogPage} />
                        <PrivateRoute path="/edit/:id" component={EditBlogPage} />
                        <PrivateRoute path="/blogs/:id" component={BlogDetailsPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default AppRouter;
