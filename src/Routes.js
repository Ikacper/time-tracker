import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage/Index';
import ResetPage from './pages/ResetPage/Index';
import RegistrationPage from './pages/RegistrationPage/Index';
import ErrorPage from './pages/ErrorPage/Index';

import DashboardPage from './pages/DashboardPage/Index';
import PlanningPage from './pages/PlanningPage/Index';
import Categories from './pages/Categories/Index';

import PrivateRoute from './PrivateRoute';
import PageTemplate from './components/PageTemplate';

const Routes = (          
        <Switch>
            <Route path="/login" component={LoginPage}/>      
            <Route path="/password/reset" component={ResetPage}/>
            <Route path="/registration" component={RegistrationPage}/> 
            <PageTemplate> 
                <Switch>                   
                    <PrivateRoute path="/planning" component={PlanningPage}/>
                    <PrivateRoute path="/categories" component={Categories}/>
                    <PrivateRoute exact path="/" component={DashboardPage}/>
                    <Route component={ErrorPage}/> 
                </Switch>  
            </PageTemplate>  
        </Switch>
    ) 
    
export default Routes;