
import './styles/styles.css';
import Index from 'pages';
import Login from 'pages/login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Index />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
