import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// Higher Order Component
/*
  Private Route rules:
  1. It has the same API as <Route />.
  2. It renders a <Route /> and passes all the props through to it.
  3. It checks if the user is authenticated, if they are, it renders the “component” prop. If not, it redirects the user to /login.
*/

// rest is an architectural style that handles client-server relationship

// component is Component to be read in jsx
const PrivateRoute = ({ component: Component, ...rest }) => {
    // const Component = props.component
    return (
        <Route
      // pass in all the props with rest
            {...rest}
      // lets us render components with sociated props
            render={(props) => {
                // token should be stored in localStorage
                if (localStorage.getItem('token')) {
                    // if token is in localstorage, render the given component
                    return <Component {...props} />;
                } else {
                    return <Redirect to="/" />;
                }
            }}
        />
    );
};

export default PrivateRoute;
