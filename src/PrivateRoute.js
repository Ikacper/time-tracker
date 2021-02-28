import React, { useContext } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';

import { UserContext } from './contexts/UserContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user, isReady } = useContext(UserContext)
    const routeProps = useRouteMatch(rest);

    if(!isReady) return null
    if(user) return <Component {...routeProps}/>
    return <Redirect to="/login" />
  }

export default PrivateRoute;