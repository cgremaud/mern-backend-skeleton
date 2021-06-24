import React, { Component } from 'react'
import { Router, Redirect } from 'react-router-dom'
import auth from './auth-helper'

//checks to see if auth'd, if not redirs to /signin. component is the component user is trying to access
//not sure what ...rest is all about yet
//see here: https://stackoverflow.com/questions/43484302/what-does-it-mean-rest-in-react-jsx
const PrivateRoute = ({ component: Component, ...rest }) => {
    <Route {...rest} render = {props => {
        auth.isAuthenticated() ? (
            <Component {...props}/>
        ) : (
            <Redirect to = {{
                pathname: '/signin',
                state: {from: props.location }
            }}/>
        )
    }}/>
}

export default PrivateRoute