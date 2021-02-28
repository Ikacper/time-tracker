import React from 'react';
import {BrowserRouter as Router , Switch} from 'react-router-dom';
import Routes from './Routes';
import { UserContextProvider } from './contexts/UserContext';

const App = () => {
    return(
      <UserContextProvider>
        <Router>
          <Switch>
              {Routes}
          </Switch>
        </Router> 
      </UserContextProvider>
    )
}

export default App;