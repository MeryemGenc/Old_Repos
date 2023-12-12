import React from 'react'
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';



const PublicRoute = ({ isAuthenticated, component:Component, ...rest }) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Redirect to="/blogs" />
        ) : (
            <Component {...props} />
        )
    )} />
)


const mapStateToProps = (state) => ({
    // !! => uid set edilmişse = true, yoksa-set edilmemişse = false
    isAuthenticated: !!state.auth.uid
});

export default connect (mapStateToProps) (PublicRoute)
