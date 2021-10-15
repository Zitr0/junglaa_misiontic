import React from 'react';
//Routing Pages
import Dashboard from './pages/Dashboard.js';
import Login from './Login.js';
import Register from './Register.js';
import Roles from './Roles.js';
//Router Modules Router for routing, Switch for switching components related to routes, Link for routes linking
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class App extends React.Component {
  
render() {
  return (
    <Router>
      
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/roles' component={Roles} />
        </Switch>
      
  </Router>
  );
  
}
}
export default App;