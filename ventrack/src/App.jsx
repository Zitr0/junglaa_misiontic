import RegistroVentas from './pages/RegistroVentas';
import SisVenta from './pages/SistemaVentas';
import TablaGv from './pages/TablaGV';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateLayout from './layouts/PrivateLayout';

function App() {
  return (
    <div className="App">
      <Router>
        <PrivateLayout>
        <Switch>
          <Route path='/RegistroVentas'>
            <RegistroVentas/>
          </Route>
        </Switch>
        </PrivateLayout>
      </Router>
    </div>
  );
}

export default App;
